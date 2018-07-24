import React, {StyleSheet, Platform, Dimensions, PixelRatio} from "react-native";
import {
  RkStyleSheet
} from 'react-native-ui-kitten';
const {width, height, scale} = Dimensions.get("window")

let initWidth = width / 2 - 10;
let initHeight = initWidth * 0.7;

export default RkStyleSheet.create(theme => ({
  flexRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  defaultAcitleContainerStyle: {
    width: width - 6,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: theme.colors.screen.base,
  },
  defaultAcitleThumbnailContainer: {

  },
  defaultAcitleThumbnail: {
    width: (width/3),
    height: (width/3) * 0.7
  },
  defaultAcitleTitleContainerStyle: {
    padding: 10,
    width: width - (width/3) - 10
  },
  defaultAcitleTitle: {
    fontSize: 14,
    marginBottom: 5,
    color: theme.colors.text.base,
    fontWeight: 'bold'
  },
  defaultAcitleSubTitle: {
    color: theme.colors.text.secondary,
  },
  gridItem: {
    position: "relative",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 12
  },
  gridLargeItem: {
    width: (width/3)* 2,
    alignItems: "flex-start",
    justifyContent: 'center',
    padding: 8
  },
  imageGridLargeItem: {
    width: "100%",
    height: (width/3)*2*0.5
  },
  nameGridLargeItem: {
    alignItems: 'flex-start',
    width: '100%',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 0
  },
  subTitleGridLargeItem: {
    textAlign: 'left'
  },
  gridThreeItem: {
    width: (width/3)
  },
  gridTwoItem: {
    width: (width/2)
  },
  imageGridItem: {
    position: "relative",
    borderRadius: 3
  },
  imageGridThreeItem: {
    width: (width/3 - 10),
    height: (width/3 + 20)
  },
  imageGridTwoItem: {
    width: (width/2 - 10),
    height: (width/3 - 10)
  },
  nameGridItem: {
    color: theme.colors.text.base,
    fontSize: 13,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
    textAlign: "center"
  },
  nameGridThreeItem: {
    width: (width/3 - 10),
  },
  nameGridTwoItem: {
    width: (width/2 - 10),
  },
  timeGridItem: {
    marginLeft: 4,
    marginRight: 8,
    color: '#999',
    fontSize: 10,
    marginTop: 4
  },
  itemCard: {
    backgroundColor: theme.colors.screen.base,
    marginBottom: 12,
    padding: 0,
    margin: 5,
    width: width - 10,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
  },
  itemCardType3: {
    height: width * 0.7
  },
  imageItemCard: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderRadius: 2,
    width: (width) - 8,
    height: (width/2)
  },
  nameItemCard: {
    color: theme.colors.text.base,
    fontSize: 16,
    width: (width)-24,
    padding: 12,
    fontWeight: 'bold'
  },
  timeItemCard: {
    marginBottom: 10,
    marginTop: 4,
    marginLeft: 12,
    marginRight: 12,
    color: "#999",
    fontSize: 12,
    textAlign: 'left'
  },
  itemCardType2AuthorAvatar: {
    width: 64, height: 64,
    borderRadius: 32
  },
  itemCardType2AuthorName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemCardType2Date: {
    textAlign: 'left', fontSize: 13, color: '#444', marginTop: 5
  },
  itemCardType2Title: {
    fontSize: 20, fontWeight: 'bold'
  },
  itemCardType2Icon: {
    color: "#0084ff"
  },
  itemCardType2IconText: {
    fontSize: 16,
    marginLeft: 5,
    color: "#0084ff"
  },
  itemCardType3Icon: {
    color: "#000"
  },
  itemCardType3IconText: {
    fontSize: 16,
    marginLeft: 5,
    color: "#000"
  },
  itemPortfolioThumbnail: {
    width: '100%',
    height: '100%',
    position: "relative",
    marginBottom: 6
  },
  itemPortfolioTitleContainerStyle: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    padding: 15,
    justifyContent: 'flex-end'
  },
  itemPortfolioTitle: {
    color: theme.colors.text.light,
    fontSize: 14,
    textAlign: 'left',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 1,
  },
  itemPortfolioSubTitle: {
    fontSize: 11,
    marginTop: 5,
    color: theme.colors.text.secondary,
    textAlign: 'left',
    alignContent: 'center'
  },
  itemPortfolioType2Thumbnail: {
    width: width,
    height: 0.5 * width,
    position: "relative"
  },
  itemPortfolioType2TitleContainerStyle: {
    padding: 10,
    paddingTop: 5
  },
  itemPortfolioType2Title: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '500',
    textAlign: 'left',
    color: theme.colors.text.base,
  },
  itemPortfolioType2SubTitle: {
    textAlign: 'left',
    color: theme.colors.text.secondary,
  },
  itemPortfolioContainerStyle: {
    width: width,
    height: 0.6 * width
  },
  itemListViewStyle: {
    marginRight: 10,
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
    width: initWidth,
    height: initHeight,
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
    backgroundColor: 'transparent'
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
  },
  listLargeItemImage: {
    width: width,
    height: 0.8 * width
  },
  itemListType2: {
    backgroundColor: theme.colors.screen.base,
    padding: 15,
    marginHorizontal: 5,
    width: width - 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  itemListType2Thumbnail: {
    width: (width/4),
    height: (width/4) * 0.7,
    borderRadius: 3
  },
  itemListType2Title: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  itemListType2AuthorAvatar: {
    width: 32, height: 32,
    borderRadius: 16
  },
  itemListType2AuthorName: {

  },
  itemListType2Date: {
    textAlign: 'left',
    fontSize: 11,
    color: '#777'
  },
  itemListType2Icon: {
    color: '#777'
  },
  itemListType2IconText: {
    fontSize: 16,
    marginLeft: 2,
    marginRight: 15,
    color: "#777"
  }
}));
