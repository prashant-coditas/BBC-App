import _ from 'lodash';

class Actions {

    toggleDrawer = (navigator) => {
        navigator.toggleDrawer({
            side: 'left'
        });
    };

    toSectionDrawer = (props, navigator) => {
        this.toggleDrawer(navigator);
        navigator.switchToTab({
            tabIndex: 0
        });
        navigator.handleDeepLink({
            link: 'section/' + props.id
        });
    }

    handleDeepLinkFromSideMenu = (props, navigator) => {
        switch (props.strResourceType) {
            case "blog_static" :
                return this.toArticleListStaticScreen({ title: props.strResourceTitle, dataJson: props.strResourceValue, layout_children: props.layout_children }, navigator)
                break;
            case "article_static" :
                return this.toArticleDetailStaticScreen({ title: props.strResourceTitle, articleID: props.strResourceValue, layout_children: props.layout_children }, navigator)
                break;
            case 'localStorage':
                return this.toArticleListOfflineScreen({ title: props.strResourceTitle }, navigator)
                break;
        }
    }

    toHomeScreen = (props, navigator) => {
        navigator.switchToTab({
            tabIndex: 0
        });
        navigator.popToRoot({
            animated: false
        });
    }

    toArticleListStaticScreen = (props, navigator) => {
        navigator.push({
            screen: "gikApp.ArticleListStaticScreen",
            backButtonTitle: '',
            title: props.title,
            passProps: props
            //animationType: 'fade'
        });
    }

    toArticleListOfflineScreen = (props, navigator) => {
        navigator.push({
            screen: "gikApp.WordpressLocalStorageScreen",
            backButtonTitle: '',
            title: props.title,
            passProps: props
            //animationType: 'fade'
        });
    }

    toArticleDetailStaticScreen = (props, navigator) => {
        navigator.push({
            screen: "gikApp.ArticleDetailStaticScreen",
            backButtonTitle: '',
            title: props.title,
            passProps: props
            //animationType: 'fade'
        });
    }

    toSearchPageStaticScreen = (props, navigator) => {
        navigator.push({
            screen: "gikApp.SearchPageStaticScreen",
            backButtonTitle: '',
            title: props.title,
            passProps: props
            //animationType: 'fade'
        });
    }
}

export default new Actions();
