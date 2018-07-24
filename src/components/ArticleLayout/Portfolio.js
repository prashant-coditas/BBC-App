import React, {Component, PureComponent} from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image'
import styles from "./Styles";

export default class PortfolioLayout extends Component {
  render() {

    const {imageURL, title, subTitle, description, date, authorName, authorAvatar, info, onPress} = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
          <View style={styles.itemPortfolioContainerStyle}>
              <FastImage source={{uri: imageURL}}
                  style={styles.itemPortfolioThumbnail}
                  resizeMode={FastImage.resizeMode.cover}
                  />
              <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 1)']} style={styles.itemPortfolioTitleContainerStyle}>
                  <Text numberOfLines={2} style={[styles.itemPortfolioTitle, {fontSize: 18}]}>{title}</Text>
                  <Text numberOfLines={1} style={[styles.itemPortfolioSubTitle, {fontSize: 13}]}>{subTitle}</Text>
              </LinearGradient>
          </View>
      </TouchableOpacity>
    );
  }
}
