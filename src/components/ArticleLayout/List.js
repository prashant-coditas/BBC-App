'use strict';
import React, {Component, PureComponent} from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";
import FastImage from 'react-native-fast-image'
import styles from "./Styles";
import HTML from 'react-native-render-html';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ArticleDefaultLayout extends Component {
  render() {

    const {imageURL, title, subTitle, date, authorName, description, comment, isBookmarked, authorAvatar, info, onPress, darkTheme} = this.props;
    console.log("darkTheme ", darkTheme)
    const itemStyle = {
      backgroundColor: darkTheme ? '#1B1C1C' : '#fff',
      titleColor: darkTheme ? '#fff' : '#000',
      subTitleColor: darkTheme ? '#f5f5f5' : '#444',
      iconColor: darkTheme ? '#f5f5f5' : '#fff'
    }
    return (
      <TouchableOpacity onPress={onPress}>
          <View style={[styles.defaultAcitleContainerStyle, { backgroundColor: itemStyle.backgroundColor }]}>
              <View   style={styles.defaultAcitleThumbnailContainer}>
                <FastImage source={{uri: imageURL}}
                    style={styles.defaultAcitleThumbnail}
                    resizeMode={FastImage.resizeMode.cover}
                  />
              </View>
              <View>
              <View style={styles.defaultAcitleTitleContainerStyle}>
                  <Text numberOfLines={2} style={[styles.defaultAcitleTitle, {color: itemStyle.titleColor}]}>{title}</Text>
                  <Text numberOfLines={1} style={[styles.defaultAcitleSubTitle, {color: itemStyle.subTitleColor}]}>{authorName} / {date}</Text>
              </View>
              <View style = {[styles.flexRow, {justifyContent: 'flex-end', paddingRight: 15, backgroundColor: itemStyle.backgroundColor}]}>
                {
                  typeof(comment) != 'undefined' &&
                  <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name="comments-o" size = {16} style = {[styles.itemListType2Icon, {color: itemStyle.iconColor}]}/>
                    <Text style = {[styles.itemListType2IconText,  {color: itemStyle.iconColor}]}>{`${comment} `}</Text>
                  </View>
                }
                {
                  typeof(isBookmarked) != 'undefined' &&
                  <Icon name={isBookmarked ? "bookmark" : "bookmark-o"} size = {16} style = {[styles.itemListType2Icon,  {color: itemStyle.iconColor}]}/>
                }
              </View>
              </View>
          </View>
      </TouchableOpacity>
    );
  }
}
