import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';
import * as Constants from '../../constants';

import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';

const AuthNavigation = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SignIn: {
      screen: SignInScreen,
      navigationOptions: {
        title: 'Login',
      },
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        title: 'Register',
      },
    },
  },
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Constants.THEME.colors.white,
        borderBottomColor: 'transparent',
        elevation: 0, // for android
      },
      headerBackImage: () => <Icon name="chevron-left" type="evilicon" size={60} />,
      headerBackTitleVisible: false,
    },
  }
);

export default AuthNavigation;
