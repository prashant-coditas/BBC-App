'use strict';
import React, {Component} from "react";
import {Text, View, TouchableOpacity, Image, ImageBackground, Dimensions} from "react-native";
import FastImage from 'react-native-fast-image'
import styles from "./Styles";
import { AppHelper } from '@services';
const {width, height, scale} = Dimensions.get("window")

export default class BackdropLogo extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    const {title,subTitle, column, onPress,backgroundColor, logoImageURL, textColor} = this.props;

    let _column = !AppHelper.isNullOrEmpty(column) ? column : 2
    let initWidth = (width / parseInt(_column)) - 10;
    let initHeight = initWidth * 0.7;
    return (
      <TouchableOpacity  onPress = {this.props.onPress}>
        <View style = {{backgroundColor: backgroundColor, padding: 0, marginVertical: 10, width: initWidth, height: initHeight}}>
          <View style={[styles.backdrop, {width: '100%', height: '100%'}]}>
           <View style = {[styles.backdropView, {justifyContent: 'flex-start'}]}>
             <Text numberOfLines = {1} style={[styles.titleStyle, {color: textColor, fontSize: 18, fontWeight: 'bold'}]}>{title}</Text>
             { !AppHelper.isNullOrEmpty(subTitle) && <Text style = {[styles.subTitleStyle, {color: textColor}]}>{subTitle}</Text>}
             {
               !AppHelper.isNullOrEmpty(logoImageURL) && <FastImage source={{uri: logoImageURL}} style = {{width: 55, height: 55, marginTop: 15,  marginBottom: 10}} resizeMode={FastImage.resizeMode.contain}/>
             }
           </View>
        </View>
       </View>
       </TouchableOpacity>
    );
  }
}
