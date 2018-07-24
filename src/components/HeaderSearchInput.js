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
import { Actions } from '@actions'

export default class HeaderSearchInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: ""
        }

    }
    _onPressButton() {
      this.props.navigator.pop()
    }

    componentDidMount() {
      setTimeout(() => {
        this.refs.searchInput && this.refs.searchInput.focus()
      }, 500)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={this._onPressButton.bind(this) }>
                        <View style={{ paddingLeft: 10 }}>
                            <Ionicons name= {Platform.OS == 'ios'? "ios-arrow-back-outline" : "md-arrow-back"} size={32} color={styles.navBarTextColor}/>
                        </View>
                    </TouchableOpacity>
                    <View  style={{ flex: 1, paddingLeft: 30, paddingRight: 20}}>
                      <TextInput
                            ref = 'searchInput'
                            underlineColorAndroid='transparent'
                            autoCorrect={false}
                            clearButtonMode="while-editing"
                            placeholder={this.props.placeholder}
                            placeholderTextColor= "rgba(255, 255, 255, 0.54)"
                            returnKeyType='done'
                            style={styles.textInput}
                            {...this.props}
                            />
                    </View>
                    <TouchableOpacity onPress={ this.props.onPress }>
                        <View style={{ paddingRight: 20 }}>
                            <Ionicons name="ios-search" size={30} color={styles.navBarTextColor}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};

HeaderSearchInput.propTypes = {
  placeholder: PropTypes.string
}

HeaderSearchInput.defaultProps = {
  placeholder: "Tìm kiếm"
}

var styles = RkStyleSheet.create(theme => ({
    container: {
        height: Platform.OS == 'android' ? 54 : 44,
        backgroundColor: theme.colors.primary
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems: 'center',
    },
    searchRow: {
        marginRight: 10, flex: 1, flexDirection: 'row', marginRight: 10
    },
    textInput: {
      fontSize: 20,
      color: theme.colors.text.light,
      padding: 0
    },
    logo: {
  		width: 30, height: 30,
  		borderTopLeftRadius: 17,
  		borderTopRightRadius: 17,
  		borderBottomLeftRadius: 17,
  		borderBottomRightRadius: 17,
	},
  navBarTextColor: theme.colors.text.light
}));
