var _ = require('lodash');
import Share, {ShareSheet, Button} from 'react-native-share';
import {
	Linking,
	Platform,
} from 'react-native';

import { Global } from '@settings'

const AppHelper = {
    newGuid: function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    },
    isEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },

    //checking if a string is blank, null or undefined
    stringIsEmpty: function (str) {
        return (!str || /^\s*$/.test(str));
    },

    isNullOrEmpty: function (obj) {
        if (_.isNull(obj) || _.isEmpty(obj) || _.isUndefined(obj)) return true;
        return false;
    },

    isNullOrUndefined: function (obj) {
        if (_.isNull(obj) || _.isUndefined(obj)) return true;
        return false;
    },

		resizeImage: function (image_width, image_height, imageWidth) {
			var imageSize = {
				width: imageWidth,
				height: (imageWidth * image_height) / image_width
			}
			return imageSize;
    },

    convertToInt: function (input, output) {
        try {
            return parseInt(input);
        } catch (e) {
            return output
        }
    },
    floatToString: function (numeric, decimals) {
        if (numeric) {
            var amount = numeric.toFixed(decimals).toString();
            //amount.replace('.', Haravan.decimal);
            //if (amount.match('^[\.' + Haravan.decimal + ']\d+')) { return "0" + amount; }
            //else { return amount; }
            return amount;
        }
        return "";
    },

    formatMoney: function (cents, format) {
        var haravanFormat = {
            code: 'vi-VN',
            thousands: ',',
            decimal: '.',
            numberdecimal: 0,
            money_format: '{{amount}}'
        };

        //cents = cents / 100;
        if (typeof cents == 'string') cents = cents.replace(haravanFormat.thousands, '');
        var value = '';
        var patt = /\{\{\s*(\w+)\s*\}\}/;
        var formatString = (format || this.money_format);

        function addCommas(moneyString) {
            return moneyString.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + haravanFormat.thousands);
        }

        switch (formatString.match(patt)[1]) {
            case 'amount':
                value = addCommas(this.floatToString(cents, haravanFormat.numberdecimal));
                break;
            case 'amount_no_decimals':
                value = addCommas(this.floatToString(cents, 0));
                break;
            case 'amount_with_comma_separator':
                value = this.floatToString(cents, haravanFormat.numberdecimal).replace(/\./, ',');
                break;
            case 'amount_no_decimals_with_comma_separator':
                value = addCommas(this.floatToString(cents, 0)).replace(/\./, ',');
                break;
        }
        return formatString.replace(patt, value);
    },

	/*
	 * Display date by format, using moment.js
	 *
	 * @author: phong.nguyen 20161017 + ung mBiz
	 * @param strDateWordpress: '2016-09-23T09:21:18'
	 * @param strDateFormat: following moment.js. Ex: 'MMMM DD YYYY HH:MMA', A (AM/PM)...
	 * @param return following strDateFormat.
	 */
    displayDateWordpress: function (strDateWordpress, strDateFormat) {
		var strDateRe = '';

		var moment = require('moment');
		var dateModified = new Date(strDateWordpress);
		strDateRe = moment(dateModified).format(strDateFormat);

		return strDateRe;
	},

	/*
	 * Display share-screen, using react-native-share.
	 *
	 * @author: phong.nguyen 20161017 +Hung mBiz
	 * @param shareTitle
	 * @param shareUrl
	 */
	displayShareScreen: function (shareTitle, shareUrl) {
		// var shareTitle = this.state.article.title.rendered;
		// var shareUrl = this.state.article.link;
		var shareOptions = {
			title: shareTitle,
			message: shareTitle,
			url: shareUrl,
			subject: shareTitle
		};

		Share.open(shareOptions);
	},

	/*
	 * Find item in list by key "id".
	 *
	 * @author: phong.nguyen 20161018 +Hung mBiz
	 * @param list
	 * @param id
	 */
	findSection(list, id) {
	// // function findSection(list, id){
		for (key in list){
			var obj = list[key];
			if (obj.id == id)
				return obj;

			if (obj.children){
				var childSection = this.findSection(obj.children, id);
				if (childSection)
					return childSection;
			}
		}
		return null;
	},

	/*
	 * LaunchURL. Open an url based on app-objects: phone, email, websites
	 * (copied from: ...\node_modules\react-native-communications\AKCommunications.js)
	 *
	 * @author: phong.nguyen 20161019 +Hung mBiz
	 * @param url
	 */
	LaunchURL: function(url) {
		Linking.canOpenURL(url).then(supported => {
			if(!supported) {
				console.log('Can\'t handle url: ' + url);
			} else {
				return Linking.openURL(url);
			}
		}).catch(err => console.error('An unexpected error happened', err));
	},

	/*
	 * Redirect source to relevant-screen (using this.props.navigator)
	 *
	 * @author: phong.nguyen 20161104
	 * @param url
	 */
	redirectScreen: function(objNavigator, strSourceType, strResourceType, strResourceID, strResourceTitle, boHideTopBar) {

		var redirectScreen = "";
		var passProps = {};
		var boHideTopBar = boHideTopBar || false; // set default value.
		var switchToTab = 0;

		switch (strResourceType) {
			case 'product':
				redirectScreen = "gikApp.ShopifyProductDetailScreen";
				passProps = {productHandle: strResourceID };
				break;
			case 'collection':
				redirectScreen = "gikApp.ShopifyCollectionScreen";
				passProps = { collection: { value: strResourceID, name: strResourceTitle } };
				break;
			case 'blog':
				if (strSourceType === "shopify") {
					redirectScreen = "gikApp.ShopifyArticleListScreen";
					passProps = { blog: { sourceValue: strResourceID, name: strResourceTitle } };
				}
				// wordpress integration
				else if (strSourceType === "wordpress") {
					redirectScreen = "gikApp.WordpressArticleListScreen";
					passProps = { blog: { sourceValue: strResourceID } };
				}
				break;
			case 'article':
				if (strSourceType === "shopify") {
					redirectScreen = "gikApp.ShopifyArticleDetailScreen";
					passProps = { article: { articleId: strResourceID, name: strResourceTitle } };
				}
				// phong.nguyen 20161011: wordpress integration
				else if (strSourceType === "wordpress") {
					redirectScreen = "gikApp.WordpressArticleDetailScreen";
					passProps = { article: { id: strResourceID } };

				}
				break;
			case 'page_content':
				if (strSourceType === "shopify") {
					redirectScreen = "gikApp.ShopifyPageContentDetailScreen";
					passProps = { page_content: { pageId: strResourceID, name: strResourceTitle } };
				}
				// wordpress integration
				else if (strSourceType === "wordpress") {
					redirectScreen = "gikApp.WordpressPageContentDetailScreen";
					passProps = { page_content: { pageId: strResourceID } };
				}
				break;
			case 'page_contact':
				redirectScreen = "gikApp.WordpressPageContactScreen";
				passProps = { sectionId: {} }
				break;
			case 'page_design':
				redirectScreen = "gikApp.DynamicPageDesignScreen";
				passProps = { page: { } }
				break;
			case 'page_switch_theme':
				redirectScreen = "gikApp.SwitchThemeScreen";
				passProps = { page: { } }
				break;
			case 'page_template':
				redirectScreen = "gikApp.WordpressPageTemplateScreen";
				passProps = { page: { } }
				break;
			case 'category_list':
				redirectScreen = "gikApp.WordpressCategoryListScreen";
				passProps = { page: { } }
				break;
			case 'page_search':

				if (strSourceType === "shopify") {
					redirectScreen = "gikApp.ShopifyPageSearchScreen";
					passProps = {
							keyword: strResourceID
					};
				}
				// wordpress integration
				else if (strSourceType === "wordpress") {
					redirectScreen = "gikApp.WordpressSearchScreen";
					passProps = {
							keyword: strResourceID
					};
				}

				break;
			case 'home':
				// mbiz.EcomzThemeLayout
                objNavigator.switchToTab({
                    tabIndex: 0
                });
                objNavigator.popToRoot({
                    animated: false
                });
				break;

			case 'account_profile':
				redirectScreen = "gikApp.WordpressAccountProfileScreen";
                passProps = {
                };
				switchToTab = 2;
				break;

			case 'account_login':
				redirectScreen = "gikApp.WordpressAccountLoginScreen";
                passProps = {
                };
				switchToTab = 2;
				break;

			case 'account_register':
				redirectScreen = "gikApp.WordpressAccountRegisterScreen";
                passProps = {
                };
				switchToTab = 2;
				break;

			case 'bookmarks':
				redirectScreen = "gikApp.WordpressBookmarks";
                passProps = {
                };
				break;
			case 'localStorage':
				redirectScreen = "gikApp.WordpressLocalStorageScreen";
                passProps = {
                };
				break;


			// other actions (call, website, gmaps...)
            case 'phone':
                Communications.phonecall(strResourceTitle, true);
                break;
            case 'email':
                Communications.email([strResourceTitle, null], null, null, "Contact", "");
                break;
            case 'website':
                Communications.web(strResourceTitle);
                break;
            case 'maps':
				var url = 'geo:0,0?q=' + strResourceTitle.latitude + ',' + strResourceTitle.longitude + '(' + strResourceTitle.title + '))';  // 'geo:11.941952,108.434776;u=15';  // 'geo:0,0?q=' + store.name + ' ' + store.address; //
                AppHelper.LaunchURL(url);
                break;

		}

		if (!this.isNullOrEmpty(redirectScreen)) {

			// phong.nguyen 20161107: fix bug, goto "first tab" first, then do redirectScreen.
			objNavigator.switchToTab({
				tabIndex: switchToTab
			});

			// off Navigator.
			objNavigator.dismissAllModals({
				animationType: 'slide-down'
			});

			// push screen.
			objNavigator.push({
				title: strResourceTitle,
				screen: redirectScreen,
				backButtonTitle: " ",
				passProps: passProps
			});
		}
	},

	/*
	 * Go to home-page
	 *
	 * @author: phong.nguyen 20161111
	 * @param url
	 */
	redirectHome: function(objNavigator, boToggleMenu) {

		// toggle menu
		if(boToggleMenu == true){
			objNavigator.toggleDrawer({
				side: 'left',
				animated: true
			});
		}

		// phong.nguyen 20161111: using redirectScreen for all components.
		strSourceType = 'wordpress';
		strResourceType = 'home';
		strResourceID = '';
		strResourceTitle = '';
		return this.redirectScreen(objNavigator, strSourceType, strResourceType, strResourceID, strResourceTitle);

	},

	// phong.nguyen 20161202
	// copy from: https://scotch.io/tutorials/how-to-encode-and-decode-strings-with-base64-in-javascript
	Base64: {_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}},

	/*
	 * function "scaleImage" - scale image by JS code to FULL device-screen-width (by JS)
	 * (copy from Hung: product.detail.fulldescription.js)
	 *
	 * @author: phong.nguyen 20161214
	 * @param url
	 */
    scaleImage: function() {
		// phong.nguyen 20161212: scale image... Note: do not put comments inside `...`
    	return `
							try{
								var widthA = (window.innerWidth > 0) ? window.innerWidth : screen.width;
								var img_width = widthA - 15;
								img_width = img_width + 'px';

								var imgs = document.querySelectorAll("img");
								for( var i = 0; i < imgs.length; i++ ) {
									imgs[i].style.maxWidth = img_width;
									imgs[i].style.height = 'auto';
									var imgSrc = imgs[i].getAttribute("src");
									if (imgSrc.substring(0, 4) != "http") {
										imgSrc = "https:" + imgSrc;
										imgs[i].src = imgSrc;
									}

									var imgAlign = imgs[i].getAttribute("class");
									var parent = imgs[i].parentNode;
									if (imgAlign.indexOf("aligncenter") !== -1 ) {
								    var wrapper = document.createElement('center');
								    parent.replaceChild(wrapper, imgs[i]);
										wrapper.appendChild(imgs[i]);
									}
									else if (imgAlign.indexOf("alignright") !== -1 ) {
								    var wrapper = document.createElement('p');
										wrapper.style.cssFloat = 'right';
								    parent.replaceChild(wrapper, imgs[i]);
										wrapper.appendChild(imgs[i]);
									}
								}

								var iframes = document.querySelectorAll("iframe");
								for( var j = 0; j < iframes.length; j++ ) {
									iframes[j].style.width = img_width;
									iframes[j].style.height = '250px';
									var iSrc = iframes[j].getAttribute("src");
									if (iSrc.substring(0, 4) != "http") {
										iSrc = "https:" + iSrc;
										iframes[j].src = iSrc;
									}
								}
							}catch(e){}
						`;
    },

}

export default AppHelper;
