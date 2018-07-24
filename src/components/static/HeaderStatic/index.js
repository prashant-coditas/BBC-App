import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Platform
} from 'react-native';
import {
  RkStyleSheet
} from 'react-native-ui-kitten';
import { AppHelper } from '@services'
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Actions } from '@actions';
import FastImage from 'react-native-fast-image';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: ""
        }

    }

    _onPressButton() {
        //alert('menu');
        this.props.navigator.toggleDrawer({
            side: 'left',
            animated: true,
            //to: 'open'
        });
    }

    render() {
        return (
            <View style={[styles.container, this.props.containerStyle]}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={this._onPressButton.bind(this) }>
                        <View style={{ paddingLeft: 15, paddingRight: 20 }}>
                            <Ionicons name="ios-menu" size={32} color={styles.navBarTextColor}/>
                        </View>
                    </TouchableOpacity>
                    <View style={{ paddingLeft: 0 }}>
                        {
                            !AppHelper.isNullOrEmpty(this.props.logoImageURL)
                            ?
                            <FastImage  source={{uri: this.props.logoImageURL}}
                                        style = {{ width: 150, height: 35 }}
                                        resizeMode={FastImage.resizeMode.contain}/>
                            :
                            <Text style = {[styles.navBarText, {color: styles.navBarTextColor}]}>{this.props.title}</Text>
                        }
                    </View>
                    <TouchableOpacity onPress={Actions.toSearchPageStaticScreen.bind(this, {}, this.props.navigator) }>
                        <View style={{ paddingRight: 15, paddingLeft: 20 }}>
                            <Ionicons name="ios-search" size={30} color={styles.navBarTextColor}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};

Header.propTypes = {
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'HOME'
}

var styles = RkStyleSheet.create((theme) => ({
    container: {
        height: Platform.OS == 'android' ? 54 : 44,
        backgroundColor: theme.colors.primary
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    searchRow: {
        marginRight: 10, flex: 1, flexDirection: 'row', marginRight: 10
    },
    textInput: {
      fontSize: 15,
      paddingLeft: 5,
      paddingRight: 5,
      height: 30
    },
    logo: {
  		width: 30, height: 30,
  		borderTopLeftRadius: 17,
  		borderTopRightRadius: 17,
  		borderBottomLeftRadius: 17,
  		borderBottomRightRadius: 17,
	},
  navBarText: {
    fontSize: 16
  },
  navBarTextColor: theme.colors.text.light,

}));
