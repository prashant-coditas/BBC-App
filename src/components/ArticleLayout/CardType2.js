'use strict';
import React, {Component, PureComponent} from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";
import FastImage from 'react-native-fast-image'
import styles from "./Styles";
import HTML from 'react-native-render-html';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CardLayout extends Component {
  render() {

    const {imageURL, title, subTitle, date, authorName, description, comment, isBookmarked, authorAvatar, info, onPress} = this.props;

    return (
      <TouchableOpacity activeOpacity={0.9} style={styles.itemCard} onPress={onPress}>
        <View style = {[styles.flexRow, {justifyContent: 'flex-start', padding: 15}]}>
          <FastImage  source={{uri: authorAvatar}} style={styles.itemCardType2AuthorAvatar}
                      resizeMode={FastImage.resizeMode.contain} />
        <View style = {{marginLeft: 10}}>
          <Text numberOfLines={1} style={styles.itemCardType2AuthorName}>{authorName}</Text>
          <Text style={styles.itemCardType2Date}>{date}</Text>
        </View>
        </View>
        <FastImage  source={{uri: imageURL}} style={styles.imageItemCard}
                    resizeMode={FastImage.resizeMode.cover} />
        <View style = {{padding: 15}}>
          <Text numberOfLines={2} style={styles.itemCardType2Title}>{title}</Text>
          <HTML html={description} />
        </View>
        <View style = {[styles.flexRow, {justifyContent: 'space-between', padding: 15, paddingTop: 0}]}>
          {
            typeof(comment) != 'undefined' &&
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="comments-o" size = {24} style = {styles.itemCardType2Icon}/>
              <Text style = {styles.itemCardType2IconText}>{`${comment} `}{comment > 0 ? "comments" : "comment"}</Text>
            </View>
          }
          {
            typeof(isBookmarked) != 'undefined' &&
            <View style = {{flexDirection: 'row', alignItems: 'center' }}>
              <Icon name={isBookmarked ? "bookmark" : "bookmark-o"} size = {24} style = {styles.itemCardType2Icon}/>
              <Text style = {styles.itemCardType2IconText}>{isBookmarked ? "Bookmarked" : "Bookmark"}</Text>
            </View>
          }
        </View>
      </TouchableOpacity>
    );
  }
}
