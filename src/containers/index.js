import { Navigation } from 'react-native-navigation';
import {withRkTheme} from 'react-native-ui-kitten';

import SideMenuWordpress from './SideMenu';

//BBC theme
import BBCThemeLayout from '../themes/bbc';
import BBCThemeHomeScreen from '../themes/bbc/screens/HomeScreen';

import WordpressLocalStorageScreen from './localStorageScreen';

//static screens
import ArticleListStaticScreen from './static/ArticleListStatic';
import ArticleDetailStaticScreen from './static/ArticleDetailStatic';
import SearchPageStaticScreen from './static/SearchPageStatic';

// register all screens of the app (including internal ones)
export function registerScreens() {
  //static screens
  Navigation.registerComponent('gikApp.ArticleListStaticScreen', () => withRkTheme(ArticleListStaticScreen));
  Navigation.registerComponent('gikApp.ArticleDetailStaticScreen', () => withRkTheme(ArticleDetailStaticScreen));
  Navigation.registerComponent('gikApp.SearchPageStaticScreen', () => withRkTheme(SearchPageStaticScreen));

  Navigation.registerComponent('gikApp.WordpressLocalStorageScreen', () => withRkTheme(WordpressLocalStorageScreen)  );
  Navigation.registerComponent('gikApp.SideMenuWordpress', () => withRkTheme(SideMenuWordpress));

  Navigation.registerComponent('gikApp.BBCThemeLayout', () => withRkTheme(BBCThemeLayout));
  Navigation.registerComponent('gikApp.BBCThemeHomeScreen', () => withRkTheme(BBCThemeHomeScreen));

}
