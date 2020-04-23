import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import ViewPager from '@react-native-community/viewpager';

import * as Constants from '../../../constants';

import ThemeComponent from '../../components/ThemeComponent/ThemeComponent';

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  viewPager: {
    flex: 1,
  },
});

const ThemesScreen = ({ navigation }) => {
  return (
    <View style={styles.backgroundContainer} data-test="screen-themes">
      <ViewPager style={styles.viewPager} page={0} data-test="viewpager-themes">
        <View key="1">
          <ThemeComponent
            navigation={navigation}
            theme={Constants.ThemesEnum.FOREST}
            data-test="component-theme-1"
          />
        </View>
        <View key="2">
          <ThemeComponent
            navigation={navigation}
            theme={Constants.ThemesEnum.DESERT}
            data-test="component-theme-2"
          />
        </View>
        <View key="3">
          <ThemeComponent
            navigation={navigation}
            theme={Constants.ThemesEnum.SPACE}
            data-test="component-theme-3"
          />
        </View>
      </ViewPager>
    </View>
  );
};

ThemesScreen.propTypes = {
  navigation: PropTypes.object,
};

export default ThemesScreen;
