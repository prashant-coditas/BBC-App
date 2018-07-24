'use strict';
import React, {Component} from "react";
import {Text, View, TouchableOpacity, Image, ImageBackground, Dimensions} from "react-native";
import FastImage from 'react-native-fast-image'
import styles from "./Styles";
import { AppHelper } from '@services';
const {width, height, scale} = Dimensions.get("window")

export default class BackdropLayout extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    const {title, type, column, subTitle, onPress, backgrondImageURL, logoImageURL, backgroundColor, textColor} = this.props;

    let _column = !AppHelper.isNullOrEmpty(column) ? column : 2
    let initWidth = (width / parseInt(_column)) - 10;
    let initHeight = initWidth * 0.7;

    if (backgrondImageURL) {
      let titleStyle1 = {
        fontSize: 13,
        fontWeight: 'normal',
        textAlign: 'center',
        backgroundColor: backgroundColor,
        width: '100%',
        paddingHorizontal: 5,
        paddingVertical: 3
      }
      return (
        <TouchableOpacity  onPress = {this.props.onPress}>
           <View  style = {styles.itemListViewStyle}>
             <View>
                <FastImage style={[styles.backdrop, {width: initWidth, height: initHeight}]} source={{uri: backgrondImageURL}}>
                 <View style = {styles.overlay}/>
                 <View style = {styles.backdropView}>
                   {
                     !AppHelper.isNullOrEmpty(logoImageURL) && <FastImage source={{uri: logoImageURL}} style = {{width: 64, height: 64, marginBottom: 10}} resizeMode={FastImage.resizeMode.contain}/>
                   }
                   <Text numberOfLines = {1} style={[styles.titleStyle, {color: textColor, fontSize: subTitle ? 14 : 16}, this.props.type && titleStyle1]}>{title}</Text>
                   { !AppHelper.isNullOrEmpty(subTitle) && <Text style = {[styles.subTitleStyle, {color: textColor}]}>{subTitle}</Text>}
                 </View>
               </FastImage>
               </View>
           </View >
         </TouchableOpacity>
      );
    }
    else {
      return (
        <TouchableOpacity  onPress = {this.props.onPress}>
           <View  style = {styles.itemListViewStyle}>
             <View style = {{backgroundColor: backgroundColor, padding: 0}}>
               <View style={[styles.backdrop, {width: initWidth, height: initHeight}]}>
                <View style = {styles.backdropView}>
                  {
                    !AppHelper.isNullOrEmpty(logoImageURL) && <FastImage source={{uri: logoImageURL}} style = {{width: 64, height: 64, marginBottom: 10}} resizeMode={FastImage.resizeMode.contain}/>
                  }
                  <Text numberOfLines = {1} style={[styles.titleStyle, {color: textColor, fontSize: subTitle ? 14 : 16}]}>{title}</Text>
                  { !AppHelper.isNullOrEmpty(subTitle) && <Text style = {[styles.subTitleStyle, {color: textColor}]}>{subTitle}</Text>}
                </View>
             </View>
            </View>
           </View >
         </TouchableOpacity>
      );
    }
  }
}
