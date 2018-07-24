import React, { Component } from 'react';
import {
    AppRegistry,
    View
} from 'react-native';

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './containers';
//import { Color, Images } from '@common'
//import { iconsMap, iconsLoaded } from './common/icons.js';

registerScreens();

console.disableYellowBox = true;

// // export function LaunchApp() {
// //     Navigation.startSingleScreenApp({
// //         screen: {
// //             screen: 'gikApp.LaunchApp',
// //             title: '',
// //             navigatorStyle: {
// //                 navBarHidden: true,
// //                 statusBarTextColorScheme: 'light',
// //                 screenBackgroundColor: '#ffffff'
// //             },
// //             navigatorButtons: {}
// //         },
// //         appStyle: {
// //             orientation: 'portrait'
// //         },
// //         passProps: {},
// //         animationType: 'fade',
// //         portraitOnlyMode: true
// //     });
// // }
//
// export function Onboarding() {
//     Navigation.startSingleScreenApp({
//         screen: {
//             screen: 'kyna.Onboarding',
//             title: '',
//             navigatorStyle: {
//                 navBarHidden: true,
//                 statusBarTextColorScheme: 'light',
//                 screenBackgroundColor: '#ffffff'
//             },
//             navigatorButtons: {}
//         },
//         appStyle: {
//             orientation: 'portrait'
//         },
//         passProps: {},
//         animationType: 'fade',
//         portraitOnlyMode: true
//     });
// }

export function DashboardApp() {
  Navigation.startSingleScreenApp({
      screen: {
          screen: 'gikApp.LaunchApp',
          title: '',
          navigatorStyle: {
              navBarHidden: true,
              statusBarTextColorScheme: 'light',
              screenBackgroundColor: '#ffffff'
          },
          navigatorButtons: {}
      },
      appStyle: {
          orientation: 'portrait'
      },
      passProps: {},
      animationType: 'fade',
      portraitOnlyMode: true
  });
}
