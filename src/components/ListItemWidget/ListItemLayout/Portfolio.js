'use strict';
import React, {Component, PureComponent} from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";
import { AppHelper } from '@services';

import styles from "./Styles";

export default class Portfolio extends Component {
  	render() {
    	const {title, subTitle, onPress, backgrondImageURL, logoImageURL, backgroundColor, textColor} = this.props;
    	return (
        <TouchableOpacity  onPress = {this.props.onPress}>
           <View  style = {styles.itemListViewStyle}>
             <View style = {{backgroundColor: backgroundColor, padding: 0}}>
               <View style={styles.backdrop}>
                <View style = {styles.backdropView}>
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
