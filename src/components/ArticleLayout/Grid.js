'use strict';
import React, {Component, PureComponent} from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";
import FastImage from 'react-native-fast-image'
import styles from "./Styles";

export default class GridLayout extends Component {
  render() {

    const {col, imageURL, title, subTitle, description, date, authorName, authorAvatar, info, onPress} = this.props;
    let stylesCol = {
      gridItem: styles.gridTwoItem,
      imageGridItem: styles.imageGridTwoItem,
      nameGridItem: styles.nameGridTwoItem,
      subTitleGridItem: styles.subTitleGridItem
    }
    if ( col === 3 ) {
      stylesCol = {
        gridItem: styles.gridThreeItem,
        imageGridItem: styles.imageGridThreeItem,
        nameGridItem: styles.nameGridThreeItem
      }
    }
    else if ( col === 0.75 ) {
      stylesCol = {
        gridItem: styles.gridLargeItem,
        imageGridItem: styles.imageGridLargeItem,
        nameGridItem: styles.nameGridLargeItem,
        subTitleGridItem: styles.subTitleGridLargeItem
      }
    }
    else {

    }
    return (
      <TouchableOpacity activeOpacity={0.9} style={[styles.gridItem, stylesCol.gridItem]} onPress={onPress}>
        <FastImage  source={{uri: imageURL}} style={[styles.imageGridItem, stylesCol.imageGridItem]}
                    resizeMode={FastImage.resizeMode.cover}
        />
        {
          typeof(title) != 'undefined' &&
          <Text numberOfLines={2} style={[styles.nameGridItem, stylesCol.nameGridItem]}>{title}</Text>
        }
        {
          typeof(subTitle) != 'undefined' &&
          <Text style={[styles.timeGridItem, stylesCol.subTitleGridItem]}>{subTitle}</Text>
        }

      </TouchableOpacity>
    );
  }
}
