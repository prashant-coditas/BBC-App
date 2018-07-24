import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Image,
    ImageBackground
} from 'react-native';
import {
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';
import FastImage from 'react-native-fast-image'
import { Actions } from '@actions'
import { Global } from '@settings/';
import { AppHelper } from '@services';
var _ = require('lodash');
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';


export default class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            sections: [],
            sectionCurrent: null,
            Setting_Menu : this.props.SECTIONS_MENU || [], // this.props.SECTIONS_MENU
        }
    }

    componentWillMount() {
  		this.setState({
        loaded: false,
  			sections: this.state.Setting_Menu
  		}) ;
    }

    renderRow(item) {
        return (
            <View key={AppHelper.newGuid() } style={styles.row}>
                {
                    item.icon
                        ?
                        <View style={styles.menuIcon}>
                            <Image
                                style={{ width: 25, height: 25}}
                                source={ item.icon }
                                resizeMode={FastImage.resizeMode.contain}
                                />
                        </View>
                        : false
                }
                <TouchableOpacity style={styles.sectionName} onPress={ Actions.toSectionDrawer.bind(this, { id: item.id, item: item }, this.props.navigator)}>
                    <View>
                        <Text numberOfLines = {1} style={styles.menuTitle}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
                {
                    item.children.length > 0 &&
                    <TouchableOpacity style={styles.arrowChild} onPress={ this.toChildren.bind(this, item) }>
                        <View>
                            <Icon style={styles.arrow} name= {Global.RTL ? "ios-arrow-back-outline" : "ios-arrow-forward-outline"} size={25} color={this.props.MENU_STYLES.color} />
                        </View>
                    </TouchableOpacity>
                }
            </View>
        );
    }

    render() {
        return (
          <ScrollView animation="bounceInUp" duration={800} delay={1400}
              style={styles.backgroundColor}>
              <View style={styles.sidemenu}>
                  <Animatable.View ref="view">
                      { this.state.sectionCurrent != null &&
                          <View key={AppHelper.newGuid() } style={styles.row}>
                              <TouchableOpacity style={styles.sectionName} onPress={ this.backHistory.bind(this) }>
                                  <View>
                                      <Text numberOfLines = {1} style={styles.menuTitle}>Go back</Text>
                                  </View>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.arrowChild} onPress={ this.backHistory.bind(this) }>
                                  <View>
                                      <Icon style={styles.arrow} name="ios-arrow-back-outline" size={25} style={styles.menuTitle} />
                                  </View>
                              </TouchableOpacity>
                          </View>
                      }
                      { this.state.sections.map((item) => this.renderRow(item)) }
                  </Animatable.View>
              </View>
            </ScrollView>

        ); // this.state.sections || this.state.objMenuMbizFromWordpress
    }

    toSection(item) {
        Actions.toSectionDrawer({id: item.type}, this.props.navigator)
    }

    toChildren(item) {
        if (item.children.length > 0) {
            var current = _.clone(item);
            current.children = [];
            var children = _.clone(item.children);
            children.unshift(current);
            this.refs.view.lightSpeedIn(300);
            this.setState({
                sections: children,
                sectionCurrent: item
            });
        }
    }
    backHistory() {
        this.refs.view.fadeInLeft(300);
        this.setState({
            sections: this.state.Setting_Menu,
            sectionCurrent: null
        });
    }
}

const styles = RkStyleSheet.create(theme =>({
    backgroundColor: {
      backgroundColor: theme.colors.screen.sideMenuBackgroundColor
    },
    containerLogo: {
      justifyContent: 'center',
      alignItems: 'center',
      height:80,
    },
    sidemenu: {
        flex: 1,
        marginTop: 12,
        paddingTop: 30
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        marginLeft: 16,
        height: 48,
        borderBottomColor: theme.colors.screen.sideMenuBorderColor
    },
    menuIcon: {
        marginBottom: 12,
        marginTop: 10,
        marginRight: 12
    },
    menuTitle: {
        textAlign: 'left',
        fontSize: 16,
        fontWeight: '100',
        marginTop:12,
        marginLeft: 12,
        color: theme.colors.screen.sideMenuTextColor
    },
    arrow: {
        marginTop: 12,
    },
    sectionName: {
        flex: 8,
        alignItems: 'flex-start'
    },
    arrowChild: {
        flex: 2,
        alignItems: 'flex-end',
        paddingRight: 15
    }
}));
