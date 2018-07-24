'use strict';
import React, {Component, PureComponent} from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";
import FastImage from 'react-native-fast-image'
import styles from "./Styles";
import HTML from 'react-native-render-html';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ListType2Layout extends Component {
  render() {

    const {imageURL, title, subTitle, date, authorName, description, comment, isBookmarked, authorAvatar, info, onPress} = this.props;

    return (
      <TouchableOpacity activeOpacity={0.9} style={styles.itemListType2} onPress={onPress}>
        <View style = {[styles.flexRow, {justifyContent: 'space-between'}]}>
          <View style = {{paddingRight: 16, flex: 4}}>
            <Text numberOfLines={3} style={styles.itemListType2Title}>{title}</Text>
          </View>
          <FastImage  source={{uri: imageURL}} style={styles.itemListType2Thumbnail}
                      resizeMode={FastImage.resizeMode.cover} />
        </View>
        <View style = {[styles.flexRow,{ justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 5}]}>
          <View style = {[styles.flexRow,{justifyContent: 'flex-start'}]}>
            <FastImage  source={{uri: authorAvatar}} style={styles.itemListType2AuthorAvatar}
                        resizeMode={FastImage.resizeMode.contain} />
            <View style = {{marginLeft: 10}}>
              <Text numberOfLines={1} style={styles.itemListType2AuthorName}>{authorName}</Text>
              <Text style={styles.itemListType2Date}>{date}</Text>
            </View>
          </View>
          <View style = {[styles.flexRow, {justifyContent: 'flex-end'}]}>
            {
              typeof(comment) != 'undefined' &&
              <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="comments-o" size = {20} style = {styles.itemListType2Icon}/>
                <Text style = {styles.itemListType2IconText}>{`${comment} `}</Text>
              </View>
            }
            {
              typeof(isBookmarked) != 'undefined' &&
              <Icon name={isBookmarked ? "bookmark" : "bookmark-o"} size = {20} style = {styles.itemListType2Icon}/>
            }
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
