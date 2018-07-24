import React, {StyleSheet, Platform, Dimensions, PixelRatio} from "react-native";
import {
  RkStyleSheet
} from 'react-native-ui-kitten';
const {width, height, scale} = Dimensions.get("window")

let initWidth = width / 3 - 10;
let initHeight = initWidth * 0.7;

export default RkStyleSheet.create(theme => ({
  flexRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  itemListViewStyle: {
    marginRight: 10,
    marginTop: 10,
    padding: 0,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
  },
  backdrop: {
    position: 'relative',
    zIndex: 9
  },
  backdropView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: '100%'
  },
  titleStyle1: {
    fontSize: 13,
    fontWeight: 'normal',
    textAlign: 'center',
    backgroundColor: 'rgba(159, 160, 238, 0.8)',
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 3
  },
  subTitleStyle: {
    fontSize: 13,
    backgroundColor: 'transparent'
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    opacity: 0.4,
    backgroundColor: '#333',
  }
}));
