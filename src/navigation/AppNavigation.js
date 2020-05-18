import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ThemesScreen from '../screens/ThemesScreen/ThemesScreen';
import AuthNavigation from './AuthNavigation';
import SettingScreen from '../screens/SettingsScreen/SettingScreen';
import ProScreen from '../screens/ProVersionScreen/ProVersionScreen';

const StackNavigation = createSwitchNavigator(
  {
    Home: HomeScreen,
    Themes: ThemesScreen,
    Settings: SettingScreen,
    Pro: ProScreen,
    Auth: AuthNavigation,
  },
  {
    initialRouteName: 'Auth',
  }
);

export default createAppContainer(StackNavigation);
