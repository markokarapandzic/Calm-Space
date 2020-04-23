import React from 'react';
import { Platform, StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import store from './src/store';
import AppNavigation from './src/navigation/AppNavigation';
import NavigationService from './src/service/NavigationService';
import * as Constants from './constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spinner: {
    color: Constants.THEME.colors.white,
  },
});

export default function App() {
  const { loading } = store.getState().loadingReducer;

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Spinner visible={loading} textContent="Loading..." textStyle={styles.spinner} />
        {Platform.OS === Constants.PLATFORM.IOS && <StatusBar barStyle="default" />}
        <AppNavigation
          ref={navigationRef => {
            // eslint-disable-next-line import/no-named-as-default-member
            NavigationService.setTopLevelNavigator(navigationRef);
          }}
        />
      </View>
    </Provider>
  );
}
