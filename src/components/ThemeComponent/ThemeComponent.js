/* eslint-disable indent */
import React from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import * as Constants from '../../../constants';

import Styles from './ThemeComponentStyle';

const styles = StyleSheet.create(Styles);

const ThemeComponent = ({ navigation, theme }) => {
  let backgroundImage = '';
  let themeTitle = '';
  let themeDescription = '';
  let selected = false;
  let proVersion = false;
  let buyButton = (
    <TouchableOpacity style={styles.buyThemeBtn} activeOpacity={0.5}>
      <Text h1 style={styles.btnText}>
        {Constants.THEME_FREE}
      </Text>
    </TouchableOpacity>
  );

  switch (theme) {
    case Constants.ThemesEnum.FOREST:
      backgroundImage = require('../../../assets/forest-theme-background.jpg');
      themeTitle = Constants.FOREST_THEME;
      themeDescription = Constants.FOREST_DESCRIPTION;
      selected = true;
      break;
    case Constants.ThemesEnum.DESERT:
      backgroundImage = require('../../../assets/desert-theme-background.jpg');
      themeTitle = Constants.DESERT_THEME;
      themeDescription = Constants.DESERT_DESCRIPTION;
      break;
    case Constants.ThemesEnum.SPACE:
      backgroundImage = require('../../../assets/space-theme-background.jpg');
      themeTitle = Constants.SPACE_THEME;
      themeDescription = Constants.SPACE_DESCRIPTION;
      proVersion = true;
      break;
    default:
      backgroundImage = require('../../../assets/forest-theme-background.jpg');
      themeTitle = Constants.FOREST_THEME;
      themeDescription = Constants.FOREST_DESCRIPTION;
      break;
  }

  if (selected) {
    buyButton = (
      <TouchableOpacity disabled style={styles.buyThemeBtn} activeOpacity={0.5}>
        <Text h1 style={styles.btnTextDisabled}>
          {Constants.THEME_SELECTED}
        </Text>
      </TouchableOpacity>
    );
  } else if (proVersion) {
    buyButton = (
      <TouchableOpacity style={styles.buyThemeBtnPro} activeOpacity={0.5}>
        <Text h1 style={styles.btnTextPro}>
          {Constants.THEME_PRO}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon name="chevron-left" type="evilicon" size={60} />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContent}>
          <View style={styles.themeDescription}>
            <Text style={styles.themeName}>{themeTitle}</Text>
            <Text style={styles.themeText}>{themeDescription}</Text>
          </View>
          {buyButton}
        </View>
      </View>
      <View style={styles.swipeIcon}>
        <Icon name="arrows-h" type="font-awesome" color="white" size={30} />
        <Icon name="hand" type="entypo" color="white" size={40} />
      </View>
    </ImageBackground>
  );
};

export default ThemeComponent;
