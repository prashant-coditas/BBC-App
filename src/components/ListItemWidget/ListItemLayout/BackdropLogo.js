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
    const {title, type, column, subTitle, onPress, logoImageURL, backgroundColor, textColor} = this.props;

    let _column = !AppHelper.isNullOrEmpty(column) ? column : 2
    let initWidth = (width / parseInt(_column)) - 10;
    let initHeight = initWidth * 0.8;
    return (
      <TouchableOpacity  onPress = {this.props.onPress}>
        <View style = {{backgroundColor: backgroundColor, padding: 0, marginTop: 10, width: initWidth, height: initHeight}}>
          <View style={[styles.backdrop, {width: '100%', height: '100%'}]}>
           <View style = {styles.backdropView}>
             {
               !AppHelper.isNullOrEmpty(logoImageURL) && <FastImage source={{uri: logoImageURL}} style = {{width: 55, height: 55, marginBottom: 10}} resizeMode={FastImage.resizeMode.contain}/>
             }
             <Text numberOfLines = {1} style={[styles.titleStyle, {color: textColor, fontSize: 14, fontWeight: '300'}]}>{title}</Text>
             { !AppHelper.isNullOrEmpty(subTitle) && <Text style = {[styles.subTitleStyle, {color: textColor}]}>{subTitle}</Text>}
           </View>
        </View>
       </View>
       </TouchableOpacity>
    );
  }
}
