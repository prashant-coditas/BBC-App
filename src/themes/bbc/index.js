import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Platform,
    Dimensions,
    Image
} from 'react-native';
import {RkTheme} from 'react-native-ui-kitten';
import { Navigation } from 'react-native-navigation';
import Spinner from 'react-native-loading-spinner-overlay';
// import OneSignal from 'react-native-onesignal';

import { Theme } from './common/BBCTheme.style';
import Config from './common/Config'

import { Global } from '@settings';

var {height, width} = Dimensions.get('window');
var _ = require('lodash');

import { WordpressService } from '@services';

export default class BBCThemeLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };
    }
    componentWillMount() {
		   // WordpressService.startWordpressApp(this, 17); // 17 is menuID fetch from wordpress site
       this.startApp()
       RkTheme.setTheme(Theme, null);
    }

    startApp() {
        Navigation.startSingleScreenApp({
            screen: {
              screen: 'gikApp.BBCThemeHomeScreen', // unique ID registered with Navigation.registerScreen
              title: 'Welcome', // title of the screen as appears in the nav bar (optional)
              navigatorStyle: {
                navBarBackgroundColor: Theme.colors.primary,
                navBarTextColor: Theme.colors.text.light,
                navBarButtonColor: Theme.colors.text.light
              }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
              navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
            },
            appStyle: {
              navBarBackgroundColor: Theme.colors.primary,
              navBarTextColor: Theme.colors.text.light,
              navBarButtonColor: Theme.colors.text.light
            }, //
            drawer: {
                left: {
                    screen: 'gikApp.SideMenuWordpress',
                    passProps: {
                        SECTIONS_MENU: Config.SECTIONS_MENU,
                    }
                },
                appStyle: {
                  navBarBackgroundColor: Theme.colors.primary,
                  navBarTextColor: Theme.colors.text.light,
                  navBarButtonColor: Theme.colors.text.light
                }, //
            },
            passProps: {
                SECTIONS_MENU: Config.SECTIONS_MENU //replace Menu Settings (Global.SECTIONS_MENU_WORDPRESS)
            },
            animationType: 'fade'
        });
    }

    render() {
        return this.renderLoadingView()
    }

    renderLoadingView() {
        return (
            <View style={styles.loading}>
                <Image style={{ position: 'absolute', left: 0, top: 0, width: width, height: height }} source={require('./images/splash.jpg') }></Image>
                {/* { Platform.OS == 'ios' && <Spinner visible={this.state.visible} /> } */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        position: 'absolute',
        width: width,
        height: height,
        zIndex: 9,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center"
    },
});
