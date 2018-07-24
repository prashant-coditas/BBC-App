import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
	StatusBar,
  Keyboard,
  FlatList,
  SafeAreaView
} from 'react-native';
import { ArticleLayout, HeaderSearchInput } from '@components_wordpress'
import { Actions } from '@actions'

import styles from './styles'


export default class SearchPageStatic extends Component {
    static navigatorStyle = {
        drawUnderTabBar: false,
        navBarHidden: true,
        tabBarHidden: true
    };

    constructor(props) {
        super(props);
    }


    render() {
      return (
        <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.container}>
            <HeaderSearchInput
              navigator = {this.props.navigator}
              onChangeText={(text) => this.setState({keyword: text})}
              placeholder='Type Here...'
              returnKeyType = 'done'
              clearButtonMode = 'always'
              spellCheck = {false}
              autoFocus = {true}
              blurOnSubmit={ true }
              onSubmitEditing = {this._onSubmitEditing.bind(this)}
              onPress = {this._onSubmitEditing.bind(this)}
            />
        </View>
        </SafeAreaView>
      );
    }

    _onSubmitEditing() {

    }

    onChangeText(keyword) {
      this.setState({
        keyword: keyword
      })
    }
}
