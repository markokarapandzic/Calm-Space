import ExpoConstants from 'expo-constants';
import * as Constants from '../../../constants';

export default {
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  titleContent: {
    marginTop: ExpoConstants.statusBarHeight + 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 55,
    color: Constants.THEME.colors.white,
    shadowColor: Constants.THEME.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleDescription: {
    fontSize: 24,
    color: 'white',
  },
  signUpBtn: {
    width: '100%',
    backgroundColor: 'transparent',
    height: Constants.SIGN_UP_BUTTON_HEIGHT,
    borderRadius: Constants.SIGN_UP_BUTTON_HEIGHT / 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1.5,
    borderColor: 'white',
    shadowColor: Constants.THEME.colors.black,
  },
  signUpBtnText: {
    fontSize: Constants.AUTH_BUTTON_TEXT_SIZE,
    color: Constants.THEME.colors.white,
  },
  signInBtn: {
    width: '100%',
    backgroundColor: Constants.THEME.colors.lightGreen,
    height: Constants.SIGN_UP_BUTTON_HEIGHT,
    borderRadius: Constants.SIGN_UP_BUTTON_HEIGHT / 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 20,
    ...Constants.CSS_SHADOW,
  },
  buttons: {
    width: '90%',
    marginVertical: 50,
    alignItems: 'center',
  },
  forgotPassword: {
    fontSize: 15,
    color: Constants.THEME.colors.darkgray,
    textDecorationLine: 'underline',
  },
  swipe: {
    flex: 1,
    width: '100%',
  },
  page: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipeImage: {
    resizeMode: 'cover',
    width: '100%',
    height: 250,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: Constants.SCREEN_HEIGHT,
  },
  viewPager: {
    flex: 1,
  },
};
