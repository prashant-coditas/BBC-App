import React, {Component} from 'react';
import {
    Text,
    View,
    Platform,
    ActivityIndicator,
    StyleSheet,
    ScrollView,
    Dimensions
} from 'react-native';

import { AppHelper } from '@services';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { ScrollableTabBar } from '@components_wordpress';

import TabPage from './TabPage';

var _ = require('lodash');
var {height, width} = Dimensions.get('window');

export default class ScrollableTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageList: [],
            loaded: false
        }
    }

    componentWillMount() {
        this.setState({
            pageList: this.props.pageList || [],
            loaded: true
        });
    }

    renderTab(page) {
        return (
            <TabPage tabLabel={page.name}
                navigator={this.props.navigator}
                widgets={page.widgets}
                page ={page}
                scrollEnabled = {this.props.scrollEnabled}
                key={AppHelper.newGuid() } />
        );
    }

    render() {
      const { tabBarStyle } = this.props
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        if (this.state.pageList.length > 1) {
          return (
            <ScrollableTabView
                initialPage={0}
                //locked={true}
                tabBarTextStyle={tabBarStyle.tabBarTextStyle}
                tabBarBackgroundColor={tabBarStyle.tabBarBackgroundColor}
                tabBarActiveTextColor={tabBarStyle.tabBarActiveTextColor}
                tabBarInactiveTextColor={tabBarStyle.tabBarInactiveTextColor}
                tabBarUnderlineStyle={tabBarStyle.tabBarUnderlineStyle}
                renderTabBar={() => <ScrollableTabBar />}
                >
                { this.state.pageList.map(page => this.renderTab(page)) }
            </ScrollableTabView>
          )
        }
        else {
          return (
            <TabPage
                scrollEnabled = {this.props.scrollEnabled}
                navigator={this.props.navigator}
                page ={this.state.pageList[0]}
                key={AppHelper.newGuid() } />
          )
        }
    }

    renderLoadingView() {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size='large'/>
            </View>
        );
    }
};

const styles = {
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
}
