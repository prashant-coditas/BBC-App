import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ActivityIndicator,
    FlatList,
    RefreshControl,
    VirtualizedList,
    Animated
} from 'react-native';
var {height, width} = Dimensions.get('window');
import { AppHelper } from '@services';
import { Actions } from "@actions"
import Styles from './Styles'
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import _ from 'lodash'
const CARD_MARGIN = 5;
const CARD_WIDTH = (Dimensions.get('window').width - CARD_MARGIN) / 2;

import { ArticleLayout } from '@components_wordpress'

let offset = 0
export default class ArticleListStaticScreen extends Component {
    static navigatorButtons = {
      rightButtons: [{
        id: 'search',
      }]
    }

    static navigatorStyle = {
      tabBarHidden: true
    };

    constructor(props) {
        super(props);
        this.state = {
            layout: !AppHelper.isNullOrEmpty(this.props.layout_children) ? this.props.layout_children : 'ListType2',
			      dataSource: [],
        }
    }
    componentWillMount() {
        this.fetchData();
    }

    _renderItem(post, index) {
      console.log("index article list: ", index)
      //let item = post.item
      let item = post
      layout = this.state.layout
      // let image_width = 'td_400x300';
      // let imageURL = WordpressService.getFeaturedImage(item, image_width);
      // let _author = _.values(WordpressService.getArticleAuthor(item))
      // let _date = WordpressService.getAritcleDateTime(item)
      // let _comment = WordpressService.getArticleComment(item)
      const _item = {
        image_url: item.imageURL,
        title: item.title,
        description: item.description,
        authorName: item.authorName,
        subTitle: item.subTitle,
        authorAvatar: item.authorAvatar,
        date: item.date,
        isBookmarked: item.isBookmarked,
        comment: item.comments
      }
      return (
        <ArticleLayout  item = {_item}
                        key={AppHelper.newGuid() }
                        onPress={this.toDetailScreen.bind(this, item) }
                        layout = {layout}
        />
      );
    }

    render() {
      return (
         <View style = {Styles.container}>
         {
           this.state.isSpinnerVisible ?
           <View style = {Styles.spinnerContainer}>
               <ActivityIndicator animating={this.state.isSpinnerVisible} size='large' color="#ddd" />
           </View>
           : <View />
         }
           <FlatList
             key = {this.state.displayModeSwitching}
             contentContainerStyle = {Styles.flatlist}
             data={this.state.dataSource}
             renderItem={({item, index}) => this._renderItem(item, index) }
             keyExtractor={(item, index) => index}
           />
         </View>
     );
    }

    renderNotfound() {
        return (
          <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style = {{fontSize: 16}}>Waiting for update</Text>
          </View>
        )
    }

    fetchData() {
      console.log("blog_static: ", _.values(this.props.dataJson))
        this.setState({
          dataSource: _.values(this.props.dataJson)
        })
    }

    toDetailScreen(article) {
  		strResourceID = article.id;
  		strResourceTitle = article.title;
  		Actions.toArticleDetailStaticScreen({title: strResourceTitle, articleID: strResourceID}, this.props.navigator);
    }

}
