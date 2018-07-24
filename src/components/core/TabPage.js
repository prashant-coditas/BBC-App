import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Global } from '@settings';

import {AppHelper} from '@services'

import {
    YoutubePlaylistWidget,
    ListItemWidget,
    ArticleListStatic
} from '@components_wordpress';

export default class TabPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            widgets: []
        };
    }

    componentWillMount() {
        this.setState({
            widgets: this.props.page.widgets || [],
            loaded: true
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
      return nextState.widgets !== this.state.widgets;
    }

    renderWidgets(widget) {
        switch (widget.type) {
          case "video_player":
              return (<YoutubePlaylistWidget handlePlayVideo={this.handlePlayVideo} navigator={this.props.navigator} widget={widget} key={AppHelper.newGuid() } />)
          case "article_list_widget_static":
              return (<ArticleListStatic navigator={this.props.navigator} widget={widget} key={AppHelper.newGuid() } />)
          case "list_item_widget":
              return (<ListItemWidget navigator={this.props.navigator} widget={widget} key={AppHelper.newGuid() } />)
            default:
              break;
        }
    }

    handlePlayVideo = () => {
      return this.refs.rootTabView.scrollTo({ x: 0, y: 0, animated: true })
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (
            <ScrollView ref = 'rootTabView' scrollEnabled = {this.props.scrollEnabled} >
                <View key={AppHelper.newGuid() } style={styles.container}>
                {this.state.widgets.map(widget => this.renderWidgets(widget)) }
                </View>
            </ScrollView>
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size='large'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});
