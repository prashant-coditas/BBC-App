'use strict';
import React, {Component,PureComponent} from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";

import Grid from './Grid';
import ListLayout from './List';
import ListType2Layout from './ListType2';
import CardLayout from './Card';
import CardType2Layout from './CardType2';
import PortfolioLayout from './Portfolio'

export default class ArticleLayout extends Component {

  render() {
    const item = this.props.item;
    const {onPress, layout} = this.props;

    switch (this.props.layout) {
    case 'TwoColumn':
      return <Grid        col = {2}
                          imageURL={item.image_url}
                          title={item.title}
                          titleFontSize = {item.titleFontSize}
                          subTitle={ item.subTitle }
                          onPress={onPress}
                          />
    case 'LargeItem':
      return <Grid        col = {0.75}
                          imageURL={item.image_url}
                          title={item.title}
                          subTitle={ item.subTitle }
                          onPress={onPress}
                          />
      case 'Card':
        return <CardLayout  imageURL={item.image_url}
                            title={item.title}
                            subTitle={ item.subTitle }
                            date = { item.date }
                            authorName = { item.authorName }
                            authorAvatar = { item.authorAvatar }
                            info = { item.info }
                            description = {item.description}
                            onPress={onPress}
                            />
      case 'CardType2':
        return <CardType2Layout   imageURL={item.image_url}
                                  title={item.title}
                                  subTitle={ item.subTitle }
                                  date = { item.date }
                                  authorName = { item.authorName }
                                  authorAvatar = { item.authorAvatar }
                                  info = { item.info }
                                  description = {item.description}
                                  comment = {item.comment}
                                  isBookmarked = {item.isBookmarked}
                                  onPress={onPress}
                                  />
    case 'List':
      return <ListLayout    imageURL={item.image_url}
                            title={item.title}
                            subTitle={ item.subTitle }
                            date = { item.date }
                            authorName = { item.authorName }
                            authorAvatar = { item.authorAvatar }
                            info = { item.info }
                            description = {item.description}
                            comment = {item.comment}
                            isBookmarked = {item.isBookmarked}
                            darkTheme = {item.darkTheme}
                            onPress={onPress}
                            />
    case 'ListType2':
      return <ListType2Layout   imageURL={item.image_url}
                                title={item.title}
                                subTitle={ item.subTitle }
                                date = { item.date }
                                authorName = { item.authorName }
                                authorAvatar = { item.authorAvatar }
                                info = { item.info }
                                description = {item.description}
                                comment = {item.comment}
                                isBookmarked = {item.isBookmarked}
                                onPress={onPress}
                                />
      case 'Portfolio':
        return <PortfolioLayout imageURL={item.image_url}
                                      title={item.title}
                                      titleFontSize = {item.titleFontSize}
                                      subTitle={ item.subTitle }
                                      onPress={onPress}

                                />
      default:
        return <ListType2Layout imageURL={item.image_url}
                                title={item.title}
                                subTitle={ item.subTitle }
                                date = { item.date }
                                authorName = { item.authorName }
                                authorAvatar = { item.authorAvatar }
                                info = { item.info }
                                description = {item.description}
                                comment = {item.comment}
                                isBookmarked = {item.isBookmarked}
                                onPress={onPress}
                                />
    }
  }
}
