'use strict';
import React, { Component } from 'react';

import {
    AlertIOS,
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    WebView
} from 'react-native';

const { width, height } = Dimensions.get("window")

export default class VideoPlayer extends Component {
    constructor(props) {
        super(props);
    }

    render() {

      return (
          <View style={styles.container}>
          <WebView
                  allowsInlineMediaPlayback = {true}
                  javaScriptEnabledAndroid={true}
                  source={{uri: `https://www.youtube.com/embed/${this.props.videoID}?version=3&enablejsapi=1&rel=0&autoplay=1&showinfo=0&controls=0&modestbranding=0`}}
                  style={{height:240, width:width, justifyContent:'center', alignItems:'center', backgroundColor:'black'}}
                  />
          </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
        height: width * 0.57,
        width: width
    }
});
