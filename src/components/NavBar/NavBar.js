import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Icon, Text } from 'react-native-elements';

import * as Constants from '../../../constants';

const styles = StyleSheet.create({
  navBar: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: '100%',
  },
  title: {
    alignSelf: 'center',
    fontSize: 24,
    paddingLeft: 40,
  },
});

const NavBarComponent = ({ navigation }) => {
  return (
    <View style={styles.navBar} data-test="component-navbar">
      <View data-test="view-left" />
      <Text style={styles.title} data-test="text-title">
        {Constants.TITLE}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(Constants.SCREEN.THEMES)}
        data-test="button-themes"
      >
        <Icon name="ios-leaf" type="ionicon" size={30} data-test="button-themes-content" />
      </TouchableOpacity>
    </View>
  );
};

NavBarComponent.propTypes = {
  navigation: PropTypes.object,
};

export default NavBarComponent;
