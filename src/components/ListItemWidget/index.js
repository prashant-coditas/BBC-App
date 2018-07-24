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
    Image
} from 'react-native';
import {
  RkStyleSheet
} from 'react-native-ui-kitten';


var {height, width} = Dimensions.get('window')
import { AppHelper } from '@services';
import { Actions } from '@actions'
import _ from 'lodash'

import ListItemLayout from './ListItemLayout'

export default class ListItemWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
			      dataSource:  [],
        }
    }

    componentWillMount() {
      //if data != null

      this.setState({
        dataSource: this.props.widget.data_widget
      })
    }

    render() {
         return (
            <View style = {styles.container}>
                {
                    this.props.widget.headingBackground
                    ?
                    <View style={styles.spaGalleryHeaderContainer}>
                      <Image style={{width: 280, height: 50, resizeMode: 'contain'}}
                              source={{uri: this.props.widget.headingBackground}} />
                    </View>
                    :
                    !AppHelper.isNullOrEmpty(this.props.widget.title) &&
                    <TouchableOpacity key={AppHelper.newGuid() }>
                        <View style={styles.widgetTitle}>
                            <Text style={styles.widgetTitle_Text}>{this.props.widget.title}</Text>
                            <Text style={styles.widgetSeeMore_Text}>See All</Text>
                        </View>
                    </TouchableOpacity>
                }

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal = { this.props.widget.horizontal }
                    contentContainerStyle={styles.flatlist}
                    data={this.state.dataSource}
                    renderItem={ ({item}) => this._renderItem(item) }
                    enableEmptySections = {true}
                    keyExtractor = {(item, index) => index.toString()}
                    scrollEnabled = {this.props.widget.horizontal}
                    />
            </View>
		);
    }

    _renderItem(item) {
      const layout = this.props.widget.layout
      console.log("ListItem: ", item.value)
      const _item = {
        backgrondImageURL: item.backgrondImageURL,
        logoImageURL: item.logoImageURL,
        backgroundColor: item.backgroundColor,
        textColor: item.textColor,
        title: item.title,
        subTitle: item.subTitle
      }
      return (
        <ListItemLayout  item = {_item}
                        key={AppHelper.newGuid() }
                        onPress={this.toDetailScreen.bind(this, item) }
                        layout = {layout}
        />
      );
    }

    toDetailScreen(item) {
      const itemProps = {
        title: item.title || "",
        articleID: item.value || 0,
        blogID: item.value || 0,
        pageID: item.value || 0
      }
      switch(item.app_action) {
        case "blog_static":
          return Actions.toArticleListStaticScreen({ title: itemProps.title, dataJson: itemProps.blogID, layout_children: item.layout_children }, this.props.navigator, false)
    }
  }
}

const styles = RkStyleSheet.create(theme => ({
  container: {
    flex: 1,
    marginTop: 15
  },
  widgetTitle: {
    padding: 5,
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
      flexDirection: "row",
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      paddingBottom: 20,
      marginLeft: 5
  },
  spaGalleryHeaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
  },
}));
