import React, { Component } from 'react'
import {
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
  WebView,
  FlatList,
  Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import VideoPlayer from './VideoPlayer'
import { ArticleLayout } from '@components_wordpress'
const { width, height } = Dimensions.get("window")


export default class YoutubePlaylistWidget extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: [],
      currentVideoID: null
    }
    this.apiKey = this.props.widget.apiKey || ''
    this.channelId = this.props.widget.channelId || ''
    this.results = this.props.widget.limit
  }

  componentDidMount(){
    fetch(`https://www.googleapis.com/youtube/v3/search/?key=${this.apiKey}&channelId=${this.channelId}&part=snippet,id&order=date&maxResults=${this.results}`)
    //fetch('https://www.googleapis.com/youtube/v3/search/?key=AIzaSyBJ3ntReiv0L19H2RoYW62LpRdIuyPhIpw&channelId=UCQzdMyuz0Lf4zo4uGcEujFw&part=snippet,id&order=date&maxResults=30')
    .then(res => res.json())
    .then(res => {
      const videoId = []
      res.items.forEach(item => {
        videoId.push(item)
      })
      console.log('video: ', videoId[0])
      this.setState({
        data: videoId,
        currentVideoID: videoId[0].id.videoId
      })
    })
    .catch(error => {
      console.error(error)
    })
  }

  renderVideoItem(item) {
    console.log("item video: ", item)
    const _item = {
      image_url: item.snippet.thumbnails.medium.url,
      title: item.snippet.title
    }
		const layout = this.props.widget.layout
    return (
      <ArticleLayout  item = {_item}
                      layout = {layout}
                      key={item.id.videoId}
                      onPress = {() => {
                        this.showVideo(item.id.videoId)
                        this.props.handlePlayVideo()
                      }}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
      <VideoPlayer videoID = {this.state.currentVideoID} navigator = {this.props.navigator}/>
      <FlatList
        horizontal = {this.props.widget.horizontal}
        key = {this.state.displayModeSwitching}
        contentContainerStyle = {styles.flatlist}
        data={this.state.data}
        renderItem={({item, index}) => this.renderVideoItem(item, index) }
        keyExtractor={(item, index) => index}
        onEndReachedThreshold={0.5}
      />
	    </View>
    )
  }
  showVideo(videoId) {
      this.setState({
        currentVideoID: videoId
      })
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 15
  },
  flatlist: {
    flexWrap: "wrap",
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: 'center'
  }
})
