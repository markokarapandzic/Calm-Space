import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ThemesScreen from '../screens/ThemesScreen/ThemesScreen';
import AuthNavigation from './AuthNavigation';

const StackNavigation = createSwitchNavigator(
  {
    Home: HomeScreen,
    Themes: ThemesScreen,
    Auth: AuthNavigation,
  },
  {
    initialRouteName: 'Auth',
  }
);

export default createAppContainer(StackNavigation);
