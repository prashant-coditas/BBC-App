import React, {Component} from 'react';
import {
    AppRegistry,
    View
} from 'react-native';

// I18nManager.forceRTL(Global.RTL)

import { Navigation } from 'react-native-navigation';
// screen related book keeping
import { registerScreens } from './containers';
registerScreens();

console.disableYellowBox = true;

Navigation.startSingleScreenApp({
    screen: {
        screen: 'gikApp.BBCThemeLayout', //gikApp.ConstructionThemeLayout || gikApp.BlogThemeLayout || gikApp.SpaThemeLayout
        title: "HOME",
        navigatorStyle: {
            navBarHidden: true
        }
    },
    animationType: "none"
});
