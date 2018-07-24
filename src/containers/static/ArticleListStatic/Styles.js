import React, {StyleSheet, Platform, Dimensions, PixelRatio} from "react-native";
import {
  RkStyleSheet
} from 'react-native-ui-kitten';
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default RkStyleSheet.create(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.screen.base
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: height,
    width: width,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 9
  },
  spinner: {
    color: '#ddd',
    marginBottom: 120
  },
  widgetTitle: {
    padding: 5
  },
  widgetTitle_Text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444'
  },
  flatlist: {
    flexWrap: "wrap",
    flexDirection: "row",
    paddingBottom: 20,
    alignItems: 'center'
  },
  layoutModalContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: '#fff'
  },
  layoutModalItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 3,
    height: width /3,
    borderColor: '#ddd',
    borderWidth: 0.5
  },
  layoutItemImage: {
    width: 36,
    height: 36,
    marginBottom: 16,
    tintColor: '#0E0E52'
  },
  layoutItemText: {
    fontWeight: '300'
  },
  toolbar: {
      backgroundColor: theme.colors.primary,
      height: 45,
      width: width,
      paddingHorizontal: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  toolBarButtonStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  toolBarTextStyle: {
    color: theme.colors.text.light,
    fontSize: 16,
    paddingLeft: 10
  }
}));
