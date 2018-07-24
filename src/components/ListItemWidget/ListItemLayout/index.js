'use strict';
import React, {Component,PureComponent} from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";

import BackdropLayout from './Backdrop';
import BackdropLogo from './BackdropLogo';
import ImageTitle from './ImageTitle'

export default class ListItemLayout extends Component {

  render() {
    const item = this.props.item;
    const {onPress, layout} = this.props;

    switch (this.props.layout) {
      case 'ListItemType1':
        return <BackdropLayout  backgrondImageURL={item.backgrondImageURL}
                                logoImageURL = {item.logoImageURL}
                                backgroundColor = {item.backgroundColor}
                                textColor = {item.textColor}
                                title={item.title}
                                subTitle={ item.subTitle }
                                onPress={onPress}
                                column = "2"
                                />
      case 'ListItemType2':
        return <BackdropLayout  backgrondImageURL={item.backgrondImageURL}
                                logoImageURL = {item.logoImageURL}
                                backgroundColor = {item.backgroundColor}
                                textColor = {item.textColor}
                                title={item.title}
                                subTitle={ item.subTitle }
                                onPress={onPress}
                                column = "3"
                                />
        break;
        case 'ListItemType3':
          return <BackdropLogo
                                  logoImageURL = {item.logoImageURL}
                                  backgroundColor = {item.backgroundColor}
                                  textColor = {item.textColor}
                                  title={item.title}
                                  subTitle={ item.subTitle }
                                  onPress={onPress}
                                  column = "3"
                                  />
          break;
        case 'ListItemType4':
          return <ImageTitle
                                  logoImageURL = {item.logoImageURL}
                                  backgroundColor = {item.backgroundColor}
                                  textColor = {item.textColor}
                                  title={item.title}
                                  subTitle={ item.subTitle }
                                  onPress={onPress}
                                  column = "2"
                                  />

      default:
        return <BackdropLayout  backgrondImageURL={item.backgrondImageURL}
                                logoImageURL = {item.logoImageURL}
                                backgroundColor = {item.backgroundColor}
                                textColor = {item.textColor}
                                title={item.title}
                                subTitle={ item.subTitle }
                                onPress={onPress}
                                />
    }
  }
}
