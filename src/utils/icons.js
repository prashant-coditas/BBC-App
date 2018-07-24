// Define all your icons once,
// load them once,
// and use everywhere

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// define your suffixes by yourself..
// here we use active, big, small, very-big..
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
    "ios-home": [24, "#bbb"],
    "ios-home-outline": [24, "#bbb"],
    "ios-contact": [24, "#bbb"],
    "ios-contact-outline": [24, "#bbb"],
    "md-cart": [24, "#bbb"],
    "ios-cart-outline": [24, "#bbb"],
    "ios-search": [24, "#bbb"],
    "ios-search-outline": [24, "#bbb"],
    "ios-menu": [24, "#fff"],
    "ios-menu-outline": [24, "#fff"],
    "ios-arrow-round-back-outline": [24, "#fff"],
    "ios-notifications-outline": [28, "#fff"],
    "ios-person-outline": [28, "#fff"],
    "ios-albums-outline": [24, "#fff"],
    "ios-star-outline": [24, "#fff"],
    "ios-close-outline": [32, "#444"],
    "ios-share-outline": [28],
    "ios-heart-outline": [28],
    "ios-outlet-outline": [64,"#f1f1f1"],
    "ios-arrow-back-outline": [28,"#f1f1f1"]
}

const defaultIconProvider = Ionicons;

let iconsMap = {};
let iconsLoaded = new Promise((resolve, reject) => {

    new Promise.all(
        Object.keys(icons).map(iconName => {
            const Provider = icons[iconName][2] || defaultIconProvider; // Ionicons
            return Provider.getImageSource(
                iconName.replace(replaceSuffixPattern, ''),
                icons[iconName][0],
                icons[iconName][1]
            )
        })
    ).then(sources => {
        Object.keys(icons)
            .forEach((iconName, idx) => iconsMap[iconName] = sources[idx])

        // Call resolve (and we are done)
        resolve(true);
    })
});

export {
    iconsMap,
    iconsLoaded
};
