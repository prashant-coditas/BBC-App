import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    AlertIOS,
    StatusBar,
    Platform,
    Dimensions,
    SafeAreaView
} from 'react-native'

import {
  RkStyleSheet
} from 'react-native-ui-kitten';

import { HeaderStatic } from '@components_wordpress';
import {AppHelper } from '@services';
import { Actions } from '@actions'
import {  ScrollableTabs } from '@components_core'
import Config from '../common/Config'
var _ = require('lodash');
var {height, width} = Dimensions.get('window');

export default class HomeScreen extends Component {
    static navigatorStyle = {
        drawUnderTabBar: false,
        navBarHidden: true
    };

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        this.state = {
          isWidgetBannerTop: false
        }
        this.pageList = []
        this.bannerWidget = []
    }

    componentWillMount() {
      this.pageList = Config.HOMEPAGES_CONFIG || []
      this.bannerWidget = Config.HOMEPAGES_BANNER_TOP || []
      if (!_.isEmpty(this.bannerWidget)) {
        this.setState({ isWidgetBannerTop: true})
      }
    }

    onNavigatorEvent(event) {
        // handle a deep link section
        if (event.type == 'DeepLink') {
            const parts = event.link.split('/');
            if (parts[0] == 'section') {
                var section = AppHelper.findSection(this.props.SECTIONS_MENU, parts[1]);
                if (section) {
        					strResourceType = section.type;
        					strResourceValue = section.value;
        					strResourceTitle = section.name;
        					Actions.handleDeepLinkFromSideMenu({ strResourceType: strResourceType, strResourceValue: strResourceValue, strResourceTitle: strResourceTitle }, this.props.navigator);
                }

            } else if (parts[0] == "homeredirect") {
                //Mọi DeepLink redirect home sẽ được xử lý ở đây
                this.props.navigator.switchToTab({
                    tabIndex: 0
                });
                this.props.navigator.popToRoot({
                    animated: false
                });
            }
            else if (parts[0] == 'searchpage') {
      				strSourceType = 'wordpress';
      				strResourceType = 'page_search';
      				strResourceID = parts[1];
      				strResourceTitle = 'Search: ' + parts[1];
      				AppHelper.redirectScreen(this.props.navigator, strSourceType, strResourceType, strResourceID, strResourceTitle);

            }
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.container}>
                {
                    <HeaderStatic logoImageURL = {'https://demo.gikapp.com/wp-content/uploads/2018/05/bbc_logo.jpg'} navigator={this.props.navigator}/>
                }
                <ScrollView scrollEnabled = {this.state.isWidgetBannerTop} contentContainerStyle = { [!this.state.isWidgetBannerTop && {flex: 1}]}>

                <ScrollableTabs     scrollEnabled = {!this.state.isWidgetBannerTop}
                                    tabBarStyle = {styles.scrollableTabColor}
                                    pageList = { this.pageList }
                                    navigator={this.props.navigator}/>
                </ScrollView>
            </View>
            </SafeAreaView>
        );
    }
}
export const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};
const styles = RkStyleSheet.create(theme => ({
    button: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10,
        marginTop: 10,
        color: 'blue'
    },
    homeEmpty: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    homeEmptyText: {
        color: "#7b7b7b"
    },
    safeArea: {
        flex: 1,
        backgroundColor: theme.colors.primary
    },
    container: {
        flex: 1,
        backgroundColor: theme.colors.screen.alter
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    gradientColor: {
      // color: theme.colors.gradients.base
    },
    scrollableTabColor: {
        tabBarBackgroundColor: theme.colors.screen.tabBarBackgroundColor,
        tabBarActiveBackgroundColor:theme.colors.screen.tabBarActiveBackgroundColor,
        tabBarActiveTextColor: theme.colors.screen.tabBarActiveTextColor,
        tabBarInactiveTextColor: theme.colors.screen.tabBarInactiveTextColor,
        tabBarUnderlineStyle: {
            backgroundColor: theme.colors.screen.tabBarUnderlineColor,
            height: 3,
            borderBottomWidth: 0
        },
        tabBarTextStyle: {
            fontSize: 16,
            lineHeight: 50
        }
    }
}));
