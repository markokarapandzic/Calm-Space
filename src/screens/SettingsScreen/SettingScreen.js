import React from 'react';
import { StyleSheet, View, TouchableOpacity, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Text, Header, Icon, Slider } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

import * as Constants from '../../../constants';

const styles = StyleSheet.create({
  btnPro: {
    height: 170,
    justifyContent: 'flex-end',
    padding: Constants.BASE_PADDING,
    width: '100%',
  },
  container: {
    padding: Constants.BASE_PADDING,
  },
  headerContainer: {
    backgroundColor: Constants.THEME.colors.white,
    borderBottomColor: Constants.THEME.colors.lightgray,
  },
  itemBody: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  itemTitle: {
    color: Constants.THEME.colors.gray,
    fontWeight: '600',
  },
  linearGradientPro: {
    borderRadius: 20,
  },
  screen: {
    backgroundColor: Constants.THEME.colors.backgroundGrey,
  },
  settingsPanel: {
    backgroundColor: Constants.THEME.colors.white,
    height: 500,
    marginVertical: 10,
    width: '100%',
    ...Constants.CSS_SHADOW,
  },
  settingsPanelBody: {
    padding: Constants.BASE_PADDING,
    width: '100%',
  },
  settingsPanelHeader: {
    alignItems: 'center',
    borderBottomColor: Constants.THEME.colors.lightgray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 50,
    paddingLeft: Constants.BASE_PADDING,
    width: '100%',
  },
  settingsPanelHeaderTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  slider: {
    paddingLeft: 10,
    width: '90%',
  },
});

const SettingScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Header
        leftComponent={
          <TouchableOpacity
            onPress={() => console.log('[Settings Screen] Back Header on Press')}
            data-test="button-exit"
          >
            <Icon name="chevron-left" type={Constants.ICON_TYPE.EVILICON} size={60} />
          </TouchableOpacity>
        }
        centerComponent={<Text h3>Settings</Text>}
        containerStyle={styles.headerContainer}
        data-test="header"
      />
      <View style={styles.container}>
        <LinearGradient
          colors={
            Platform.OS === Constants.PLATFORM.IOS
              ? [Constants.THEME.colors.black, '#545454']
              : ['#545454', Constants.THEME.colors.black]
          }
          style={styles.linearGradientPro}
          start={Platform.OS === Constants.PLATFORM.IOS ? [0, 0.5] : [0.5, 0]}
        >
          <TouchableOpacity
            style={styles.btnPro}
            onPress={() => navigation.navigate(Constants.SCREEN.PRO)}
          >
            <Text h4 style={{ color: Constants.THEME.colors.gold }}>
              Calm Space PRO
            </Text>
            <Text style={{ color: Constants.THEME.colors.white }}>Achieve More</Text>
          </TouchableOpacity>
        </LinearGradient>
        <View style={styles.settingsPanel}>
          <View style={styles.settingsPanelHeader}>
            <Text style={styles.settingsPanelHeaderTitle}>Account Settings</Text>
          </View>
          <View style={styles.settingsPanelBody}>
            <View style={styles.settingsPanelItem}>
              <Text style={styles.itemTitle}>Sound Volume</Text>
              <View style={styles.itemBody}>
                <Icon type={Constants.ICON_TYPE.FEATHER} name="speaker" size={30} />
                <Slider
                  value={0}
                  minimumValue={0}
                  maximumValue={100}
                  onValueChange={value =>
                    console.log(`[SettingsScreen | Slider] Value changed (value: ${value})`)
                  }
                  thumbStyle={{ ...Constants.CSS_SHADOW }}
                  thumbTintColor={Constants.THEME.colors.white}
                  style={styles.slider}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

SettingScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SettingScreen;
