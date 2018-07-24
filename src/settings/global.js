module.exports = {
    RTL: false,
    ADMOD_ENABLE: false,
    ISPRODUCTION: true,
    THUMBNAIL_DEFAULT: "https://cdn.mbizvietnam.com/images/no-img.jpg",
    DATE_FORMAT: "MMMM DD, YYYY",
    DATE_FORMAT_SHORT: "MMM. DD", // Oct. 19th
    SECTIONS_MENU_ABOVE: [
      {
  			icon: require('@images/menu_icon/favorite.png'),
  			name: 'Themes',
  			type: 'page_switch_theme',
  			value: '26',
  			id: 'page_switch_theme',
  			children: []
  		},
  	],
    SECTIONS_MENU_BELOW: [
    	{
  			icon: require('@images/menu_icon/offline_mode.png'),
  			name: 'Save Articles',
  			type: 'localStorage',
  			value: '26',
  			id: 'localStorage',
  			children: []
  		}
  	],
    INTEGRATE: {
        wordpress: { domain: 'https://demo.gikapp.com/' }
	}
};
