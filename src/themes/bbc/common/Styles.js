/**
 * Created by EGANY on 22 July 17.
 */

import {Dimensions, Platform} from 'react-native';
import Color from "./Color";
const _height = Dimensions.get('window').height;
const {height} = Dimensions.get('window');
const {heightWindow} = Dimensions.get('window');

let Styles = {
  width: Dimensions.get('window').width,
  height: Platform.OS !== 'ios' ? _height : (_height - 20),
  navBarHeight: Platform !== 'ios' ? (height - heightWindow) : 0,
  headerHeight: Platform.OS === 'ios' ? 44 : 56,

  thumbnailRatio: 1.2, //Thumbnail ratio, the product display height = width * thumbnail ratio

  FontSize: {
    tiny: 12,
    small: 14,
    medium: 16,
    big: 18,
    large: 20,
  },
  IconSize: {
    TextInput: 25,
    ToolBar: 18,
    Inline: 20,
  },
  FontFamily: {}
};

Styles.Common = {
  Column: {},
  ColumnCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ColumnCenterTop: {
    alignItems: 'center',
  },
  ColumnCenterBottom: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  ColumnCenterLeft: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  ColumnCenterRight: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  Row: {
    flexDirection: 'row',
  },
  RowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  RowCenterTop: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  RowCenterBottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  RowCenterLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  RowCenterRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  RowCenterBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  //More traits

  IconSearchView: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 10,
    borderRadius: 50,

    shadowOffset: {width: 0, height: -4},
    shadowColor: 'rgba(0,0,0, .3)',
    elevation: 10,
    shadowOpacity: 0.1,
    zIndex: 9999,
  },
  IconSearch: {
    width: 20,
    height: 20,
    margin: 12,
    zIndex: 9999,
  },
  headerStyle: {
    color: Color.navigationTitleColor,
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'center',
    logo: require('../images/logo.png')
  },

  //sidemenu.wordpress.js
  sideMenu: {
    use_header_menu: true,
    logo_image: require('../images/menu_logo.png'),
    background_image: require('../images/menu_logo.png'),
    backgroundColor: Color.sideMenuBackground,
    borderBottomColor: Color.sideMenuBorderBottom,
    color: Color.sideMenuText
  },


};

export default Styles;
