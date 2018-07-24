import React, {Component} from 'react';
import {
    Platform,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Dimensions,
    AsyncStorage,
    ActivityIndicator,
    Image
} from 'react-native';

import { Global } from '@settings';
import { AppHelper, StorageService} from '@services';
var {height, width} = Dimensions.get('window');
import { ArticleLayout } from '@components_wordpress'

var _ = require('lodash');


export default class WordpressLocalStorageScreen extends Component {

    static navigatorStyle = {
        drawUnderTabBar: false,
        tabBarHidden: true
    };

    constructor(props) {
        super(props);

        this.state = {
            dataSource: [],
            loaded: false,
            notFound: false
        };

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) {

    }

    componentWillMount() {

    }

    getLocalStorage(){

    }

    renderNotfound() {
        return (
          <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image source = {require('@images/notebook.png')} style = {{width: 64, height: 64, marginBottom: 30}}/>
              <Text style = {{fontSize: 24}}>No Saved Article</Text>
              <Text style = {{fontSize: 16, marginTop: 30, color: '#777', width: '60%', textAlign: 'center'}}>Save an article to add it here to your saved queue</Text>
          </View>
        )
    }


    _renderItem(item) {

    }

    render() {
      if (this.state.dataSource.length > 0) {
        return (
            <View style={{flex:1}} >

            </View>
        );
      }
      else {
        return this.renderNotfound()
      }

    }

    toDetailScreen(item) {
    
    }
}

const styles = StyleSheet.create({
    container: {
        //width: width,
        // backgroundColor: 'rgb(241,241,241)',
        //flexDirection: 'row',
        //flexWrap: 'wrap'
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    cell: {
        backgroundColor: '#ffffff',
        width: width - 6,
        margin: 3,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        height: 120,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgView: {

    },
    thumbnail: {
        resizeMode: 'contain',
        width: 130,
        height: 120,
        marginRight: 10
    },
    itemTitle: {
        //flex: 1,
        flexWrap: 'wrap',
        color: 'black',
	      fontWeight: 'bold',
        textAlign: 'left'
    },
    itemPrice: {
        color: '#d21f30',
        flex: 1,
    },
    rightContainer: {
        flex: 1,
        justifyContent: "center",
    },
    emptyView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    emptyText: {
        color: '#7b7b7b'
    },
});
