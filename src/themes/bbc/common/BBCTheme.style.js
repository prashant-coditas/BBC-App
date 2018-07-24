const Colors = {
  accent: '#ff2824',
  primary: '#9E0500',
  success: '#3bd555',
  disabled: '#cacaca',

  foreground: '#222',
  alterForeground: '#707070',
  inverseForeground: '#ffffff',
  secondaryForeground: '#777',
  hintForeground: '#969696',

  background: '#fff',
  alterBackground: '#f2f2f2',
  overlayBackground: '#00000057',
  neutralBackground: '#f2f2f2',
  fadedBackground:'rgba(32, 53, 209, 0.1)',

  border: '#fff',

  twitter: '#41abe1',
  google: '#e94335',
  facebook: '#3b5998',

  gradientBaseBegin: '#ff9147',
  gradientBaseEnd: '#ff524c',
  gradientVisaBegin:'#63e2ff',
  gradientVisaEnd:'#712ec3',
  gradientMasterBegin:'#febb5b',
  gradientMasterEnd:'#f24645',
  gradientAxpBegin:'#42e695',
  gradientAxpEnd:'#3bb2bb',

  // -----
  faded: '#e5e5e5',
  icon: '#c2c2c2',
  neutral: '#f2f2f2',


  info: '#19bfe5',
  warning: '#feb401',
  danger: '#ed1c4d',
  lightText: '#fff',

  starsStat: '#2ab5fa',
  tweetsStat: '#ffc61c',
  likesStat: '#5468ff',

  doughnutFirst: '#8a98ff',
  doughnutSecond: '#ffd146',
  doughnutThird: '#c2d521',
  doughnutFourth: '#ff6b5c',

  followersProgress: '#c2d521',

  followersFirst: '#b3e5fc',
  followersSecond: '#81d4fa',
  followersThird: '#4fc3f7',
  followersFourth: '#42a5f5',

  chartsAreaStroke:'#097fe5',
  chartsAreaFill: '#d6ecff',

  //Home Tab Colors
  tabBarBackgroundColor: "#9E0500",
  tabBarActiveBackgroundColor: "#000",
  tabBarActiveTextColor: "#fff",
  tabBarInactiveTextColor: "#f2f2f2",
  tabBarUnderlineColor: "#fff",

  //Side Menu Colors
  sideMenuBackgroundColor: "#111",
  sideMenuTextColor: "#fff",
  sideMenuBorderColor: "#333",
  sideMenuHeaderColor: ""
};

export const Theme = {
  name: 'Theme',
  colors: {
    accent: Colors.accent,
    primary: Colors.primary,
    disabled: Colors.disabled,
    twitter: Colors.twitter,
    google: Colors.google,
    facebook: Colors.facebook,
    brand: Colors.accent,
    text: {
      base: Colors.foreground,
      secondary: Colors.secondaryForeground,
      accent: Colors.accent,
      inverse: Colors.inverseForeground,
      hint: Colors.alterForeground,
      filter: Colors.lightText,
      light: Colors.lightText
    },
    input: {
      text: Colors.alterForeground,
      background: Colors.background,
      label: Colors.secondaryForeground,
      placeholder: Colors.secondaryForeground,
    },
    screen: {
      base: Colors.background,
      alter: Colors.alterBackground,
      scroll: Colors.alterBackground,
      bold: Colors.alterBackground,
      overlay: Colors.overlayBackground,
      faded: Colors.fadedBackground,
      sidemenuBackground: Colors.primary,
      tabBarBackgroundColor: Colors.tabBarBackgroundColor,
      tabBarActiveBackgroundColor: Colors.tabBarActiveBackgroundColor,
      tabBarActiveTextColor: Colors.tabBarActiveTextColor,
      tabBarInactiveTextColor: Colors.tabBarInactiveTextColor,
      tabBarUnderlineColor: Colors.tabBarUnderlineColor,
      sideMenuBackgroundColor: Colors.sideMenuBackgroundColor ,
      sideMenuTextColor: Colors.sideMenuTextColor ,
      sideMenuBorderColor: Colors.sideMenuBorderColor ,
      sideMenuHeaderColor: Colors.sideMenuHeaderColor ,
    },
    button: {
      back: Colors.background,
      underlay: Colors.neutralBackground,
      highlight: Colors.primary
    },
    border: {
      base: Colors.border,
      accent: Colors.accent,
      secondary: Colors.secondaryForeground
    },
    control: {
      background: Colors.background
    },
    badge:{
      likeBackground: Colors.primary,
      likeForeground: Colors.inverseForeground,
      plusBackground: Colors.success,
      plusForeground: Colors.inverseForeground,
    },
    chat:{
      messageInBackground: Colors.neutralBackground,
      messageOutBackground: Colors.fadedBackground,
      text: Colors.foreground
    },
    gradients: {
      base: [Colors.gradientBaseBegin, Colors.gradientBaseEnd],
      visa: [Colors.gradientVisaBegin, Colors.gradientVisaEnd],
      mastercard: [Colors.gradientMasterBegin, Colors.gradientMasterEnd],
      axp: [Colors.gradientAxpBegin, Colors.gradientAxpEnd],
    },
    dashboard: {
      stars: Colors.starsStat,
      tweets: Colors.tweetsStat,
      likes: Colors.likesStat,
    },
    charts:{
      followersProgress: Colors.followersProgress,
      doughnut: [Colors.doughnutFirst, Colors.doughnutSecond, Colors.doughnutThird, Colors.doughnutFourth],
      followersArea: [Colors.followersFirst, Colors.followersSecond, Colors.followersThird, Colors.followersFourth],
      area: {
        stroke: Colors.chartsAreaStroke,
        fill: Colors.chartsAreaFill
      }
    },
  }
};
