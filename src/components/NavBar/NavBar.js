import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import * as Constants from '../../../constants';

const NavBarComponent = ({ navigation }) => {
  return (
    <View style={styles.navBar}>
      <View />
      <Text style={styles.title}>{Constants.TITLE}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Themes')}>
        <Icon name="ios-leaf" type="ionicon" size={30} />
      </TouchableOpacity>
    </View>
  );
};

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

export default NavBarComponent;
