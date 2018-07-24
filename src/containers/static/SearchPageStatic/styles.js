import React, {StyleSheet, Platform, Dimensions, PixelRatio} from "react-native";
import {
  RkStyleSheet
} from 'react-native-ui-kitten';

const {width, height, scale} = Dimensions.get("window")
export default RkStyleSheet.create(theme => ({
  safeArea: {
      flex: 1,
      backgroundColor: theme.colors.primary
  },
  container: {
      flex: 1,
      backgroundColor: theme.colors.screen.base,
      //flexDirection: 'row',
      //flexWrap: 'wrap'
  },
  flatlist: {
    marginTop: 15,
    paddingBottom: 80
  },
  loading: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },
  cell: {
      backgroundColor: '#ffffff',
      width: width - 6,
      margin: 3,
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 5,
      height: 120,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
  },
  imgView: {

  },
  thumbnail: {
      resizeMode: 'contain',
      width: 130,
      height: 120,
      marginRight: 10
  },
  itemTitle: {
      //flex: 1,
      flexWrap: 'wrap',
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'left'
  },
  itemPrice: {
      color: '#d21f30',
      flex: 1,
  },
  rightContainer: {
      flex: 1,
      justifyContent: "center",
  },
  emptyView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },
  emptyText: {
      color: '#7b7b7b'
  },
  searchHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Platform.OS == 'android' ? 0 : 20,
    backgroundColor: theme.colors.primary,
  },
  searchHeaderIconStyle: {
    fontSize: 36,
    color: '#fff'
  },
  searchHeaderTextStyle: {
    color: '#fff'
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    width: width - 100
  },
  searchBarInputStyle: {
    backgroundColor: '#fff'
  },
  notFoundContainer: {
    width: width,
    height: height - 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notFoundText: {
    fontSize: 18,
    color: '#000'
  },
  spinnerContainer: {
    width: width,
    height: height - 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  spinner: {
    color: '#ddd',
    marginBottom: 120
  },
  navBarTextColor: theme.colors.text.light
}));
