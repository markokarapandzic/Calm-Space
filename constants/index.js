/* eslint-disable prettier/prettier */
import { Dimensions, Platform } from 'react-native';

export const THEME = {
  colors: {
    backgroundGrey: '#DCDCDC',
    lightgray: '#d3d3d3',
    darkgray: '#a9a9a9',
    gray: '#808080',
    moneyGreen: '#06b075',
    moneyGreenDark: '#0D3938',
    lightGreen: '#15DD84',
    lightGreen2: '#6BE2BE',
    greenGrey: '#D9E3E0',
    gold: '#FFD700',
    white: '#FFFFFF',
    black: '#000000',
  },
};

// Screens
export const SCREEN = {
  HOME: 'Home',
  WELCOME: 'Welcome',
  SIGNIN: 'SignIn',
  SIGNUP: 'SignUp',
  THEMES: 'Themes',
  FORGOT_PASSWORD: 'ForgotPassword',
  SOUNDS: 'Sounds',
  SETTINGS: 'Settings',
  PRO: 'Pro',
};

export const ACTIVITY_ENUM = {
  FOCUS: 1,
  SLEEP: 2,
  MEDITATION: 3,
};

// Icon Types
export const ICON_TYPE = {
  MATERIAL: 'material',
  MATERIA_COMMUNITY: 'material-community',
  FONT_AWESOME: 'font-awesome',
  OCTICON: 'octicon',
  IONICON: 'ionicon',
  FOUNDATION: 'foundation',
  EVILICON: 'evilicon',
  SIMPLE_LINE_ICON: 'simple-line-icon',
  ZOCIAL: 'zocial',
  ENTYPO: 'entypo',
  FEATHER: 'feather',
  ANTDESIGN: 'antdesign',
};

// General
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SIGN_UP_BUTTON_HEIGHT = 60;
export const BASE_SIZE = 16;
export const BASE_PADDING = 20;
export const DEFAULT_OPACITY_TOUCHABLE = 0.5;
export const FORGOT_PASSWORD = 'Forgot your password?';
export const GRADIENT_TOP_STARTING_POSITION = [0, 0];
export const MENU_ICON_SIZE = 30;

// SignUp
export const FACEBOOK_LOGIN = 'Login with Facebook';
export const GOOGLE_LOGIN = 'Login with Google';
export const EMAIL_LABEL = 'Your Email Address';
export const EMAIL_PLACEHOLDER = 'email@address.com';
export const PASSWORD_LABEL = 'Password';
export const PASSWORD_PLACEHOLDER = 'Password';
export const AUTH_BUTTON_TEXT_SIZE = 25;
export const SIGN_UP = 'Sign Up';

// SignIn
export const FACEBOOK_REGISTER = 'Register with Facebook';
export const GOOGLE_REGISTER = 'Register with Google';
export const USERNAME_LABEL = 'Your Username';
export const USERNAME_PLACEHOLDER = 'Username';
export const REPEAT_PASSWORD_LABEL = 'Repeat Password';
export const SIGN_IN = 'Sign In';

// Home
export const QUOTE =
  // eslint-disable-next-line max-len
  'Write the kind of story you would like to read. People will give you all sorts of advice about writing, but if you are not writing something you like, no one else will like it either.';
export const AUTHOR = '- Amit Kalatari';

// General Text
export const TITLE = 'Calm Space';
export const THEME_FREE = 'FREE';
export const THEME_SELECTED = 'SELECTED';
export const THEME_PRO = 'PRO';

// Themes
export const FOREST_THEME = 'Forest';
export const FOREST_DESCRIPTION = 'Enjoy the Great Outdoors';
export const DESERT_THEME = 'Desert';
export const DESERT_DESCRIPTION = 'Sometime just need to enjoy';
export const SPACE_THEME = 'Space';
export const SPACE_DESCRIPTION = 'Universe start with you';

// Themes Enumerator
export const ThemesEnum = {
  FOREST: 1,
  DESERT: 2,
  SPACE: 3,
};

// Platforms
export const PLATFORM = {
  ANDROID: 'android',
  IOS: 'ios',
};

// Styles
export const CSS_SHADOW = Platform.OS === PLATFORM.IOS ? {
  shadowColor: THEME.colors.black,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
} : { elevation: 5 };
