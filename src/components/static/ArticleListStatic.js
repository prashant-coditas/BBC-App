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
import {
  RkStyleSheet
} from 'react-native-ui-kitten';

var {height, width} = Dimensions.get('window');
import { AppHelper } from '@services';
import { Actions } from "@actions"
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import _ from 'lodash'
const CARD_MARGIN = 5;
const CARD_WIDTH = (Dimensions.get('window').width - CARD_MARGIN) / 2;

import { ArticleLayout } from '@components_wordpress'

let offset = 0
export default class ArticleListStaticComponent extends Component {
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
        }

    }
    componentWillMount() {
      this.fetchData();
    }

    _renderItem(post, index) {
      //let item = post.item
      let item = post
      let layout = this.props.widget.layout
      const _item = {
        image_url: item.imageURL,
        title: item.title,
        description: item.description,
        authorName: item.authorName,
        subTitle: item.subTitle,
        authorAvatar: item.authorAvatar,
        date: item.date,
        isBookmarked: item.isBookmarked,
        comment: item.comments,
        titleFontSize: this.props.widget.titleFontSize,
        darkTheme: this.props.widget.darkTheme
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
      let _data = this.props.widget.value || []
      let dataSource = _.slice(_data, 0, this.props.widget.limit)
      return (
         <View style = {styles.container}>
           {
             !AppHelper.isNullOrEmpty(this.props.widget.title) &&
             <TouchableOpacity key={AppHelper.newGuid() }>
                 <View style={styles.widgetTitle}>
                     <Text style={styles.widgetTitle_Text}>{this.props.widget.title}</Text>
                     <Text style={styles.widgetSeeMore_Text}>See All</Text>
                 </View>
             </TouchableOpacity>
           }
           <FlatList
             horizontal = {this.props.widget.horizontal}
             contentContainerStyle = {styles.flatlist}
             data={dataSource}
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
        this.setState({
          dataSource: _.values(this.props.widget.value)
        })
    }

    toDetailScreen(article) {
  		strResourceID = article.id;
  		strResourceTitle = article.title;
  		Actions.toArticleDetailStaticScreen({title: strResourceTitle, articleID: strResourceID}, this.props.navigator);
    }

}

const styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: "#fff"
  },
  widgetTitle: {
    padding: 5,
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  widgetTitle_Text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text.base
  },
  widgetSeeMore_Text: {
    fontWeight: 'bold',
    color: theme.colors.text.base
  },
  flatlist: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center'
  }
}));
