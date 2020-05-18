import React from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { Text, Icon, Header, Button } from 'react-native-elements';

import * as Constants from '../../../constants';

const styles = StyleSheet.create({
  backgroundImage: {
    height: 180,
    justifyContent: 'flex-start',
    opacity: 0.95,
    resizeMode: 'cover',
  },
  btn: {
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
    marginTop: 5,
    width: 250,
    ...Constants.CSS_SHADOW,
  },
  btnButText: {
    color: Constants.THEME.colors.moneyGreen,
  },
  btnBuy: {
    alignItems: 'center',
    marginTop: 50,
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  proDescription: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  proDescriptionTitleText: {
    fontWeight: '200',
  },
  proItem: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  proText: {
    color: Constants.THEME.colors.gold,
    fontSize: 48,
    fontWeight: '200',
  },
  proTitle: {
    alignItems: 'center',
    backgroundColor: Constants.THEME.colors.black,
    height: 150,
    justifyContent: 'center',
    left: '50%',
    marginLeft: -75,
    position: 'absolute',
    top: 100,
    width: 150,
    ...Constants.CSS_SHADOW,
  },
});

const ProVersionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../../assets/pro-version-background.jpg')}
      >
        <Header
          leftComponent={
            <TouchableOpacity
              onPress={() => navigation.navigate(Constants.SCREEN.SETTINGS)}
              data-test="button-exit"
            >
              <Icon
                name="chevron-left"
                type={Constants.ICON_TYPE.EVILICON}
                size={60}
                color="white"
              />
            </TouchableOpacity>
          }
          containerStyle={styles.headerContainer}
          data-test="header"
        />
      </ImageBackground>
      <View style={styles.proTitle}>
        <Text style={styles.proText}>PRO</Text>
      </View>
      <View style={styles.proDescription}>
        <Text h2 style={styles.proDescriptionTitleText}>
          Calm Space PRO
        </Text>
        <View style={styles.proItem}>
          <Icon type={Constants.ICON_TYPE.ENTYPO} name="dot-single" />
          <Text h4>All Themes</Text>
        </View>
        <View style={styles.proItem}>
          <Icon type={Constants.ICON_TYPE.ENTYPO} name="dot-single" />
          <Text h4>All Sounds</Text>
        </View>
        <View style={styles.proItem}>
          <Icon type={Constants.ICON_TYPE.ENTYPO} name="dot-single" />
          <Text h4>No Ads</Text>
        </View>
        <View style={styles.proItem}>
          <Icon type={Constants.ICON_TYPE.ENTYPO} name="dot-single" />
          <Text h4>Achieve More</Text>
        </View>
        <View style={styles.btnBuy}>
          <Text>Start Today</Text>
          <Button title="2.99$" buttonStyle={styles.btn} titleStyle={styles.btnButText} />
        </View>
      </View>
    </View>
  );
};

ProVersionScreen.propTypes = {
  navigation: PropTypes.object,
};

export default ProVersionScreen;
