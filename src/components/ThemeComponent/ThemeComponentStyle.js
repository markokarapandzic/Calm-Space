import ExpoConstants from 'expo-constants';
import * as Constants from '../../../constants';

export default {
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: ExpoConstants.statusBarHeight,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  bottomContent: {
    width: '100%',
  },
  themeDescription: {
    alignItems: 'center',
    marginBottom: 100,
  },
  themeName: {
    color: 'white',
    fontSize: 80,
    fontWeight: '100',
  },
  themeText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '200',
  },
  buyThemeBtn: {
    height: 100,
    backgroundColor: Constants.THEME.colors.moneyGreenDark,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buyThemeBtnPro: {
    height: 100,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btnText: {
    color: Constants.THEME.colors.moneyGreen,
  },
  btnTextDisabled: {
    color: Constants.THEME.colors.darkgray,
  },
  btnTextPro: {
    color: Constants.THEME.colors.gold,
  },
  swipeIcon: {
    margin: 'auto',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
};
