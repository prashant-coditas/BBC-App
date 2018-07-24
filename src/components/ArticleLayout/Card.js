'use strict';
import React, {Component, PureComponent} from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";
import FastImage from 'react-native-fast-image'
import styles from "./Styles";
import HTML from 'react-native-render-html';
export default class CardLayout extends Component {
  render() {

    const {imageURL, title, subTitle, description, date, authorName, authorAvatar, info, onPress, titleFontSize} = this.props;
    console.log("titleFontSize: ", titleFontSize)
    return (
      <TouchableOpacity activeOpacity={0.9} style={styles.itemCard} onPress={onPress}>
        <FastImage  source={{uri: imageURL}} style={styles.imageItemCard}
                    resizeMode={FastImage.resizeMode.cover} />
        <Text numberOfLines={2} style={[styles.nameItemCard, titleFontSize && { fontSize: titleFontSize} ]}>{title}</Text>
        <Text style={styles.timeItemCard}>{subTitle}</Text>
      </TouchableOpacity>
    );
  }
}
