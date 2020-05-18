/* eslint-disable no-shadow */
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Platform } from 'react-native';
import { Text, Header, Icon, Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BlurView } from 'expo-blur';

import { stopFocusActivity } from '../../../store/actions/ActionCreator';
import * as Constants from '../../../../constants';
import Style from './FocusActivityStyle';

const styles = StyleSheet.create(Style);

const FocusActivity = ({ navigation, stopFocusActivity }) => {
  return (
    <BlurView
      tint="dark"
      intensity={Platform.OS === Constants.PLATFORM.IOS ? 100 : 170}
      style={styles.container}
      data-test="component-focus-activity"
    >
      <Header
        leftComponent={
          <TouchableOpacity onPress={() => stopFocusActivity()} data-test="button-exit">
            <Icon
              type={Constants.ICON_TYPE.FEATHER}
              name="x"
              size={Constants.MENU_ICON_SIZE}
              color="white"
            />
          </TouchableOpacity>
        }
        centerComponent={
          <Text h3 style={styles.headerTitle}>
            Focus
          </Text>
        }
        rightComponent={
          <TouchableOpacity onPress={() => navigation.navigate(Constants.SCREEN.SETTINGS)}>
            <Icon
              type={Constants.ICON_TYPE.OCTICON}
              name="settings"
              size={Constants.MENU_ICON_SIZE}
              color="white"
            />
          </TouchableOpacity>
        }
        containerStyle={styles.headerContainer}
        data-test="header"
      />
      <View style={styles.countdown} data-test="view-countdown">
        <View />
        <Text style={styles.timer} data-test="text-timer">
          25:00
        </Text>
        <Button
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btn}
          titleStyle={styles.btnTitle}
          icon={<Icon type={Constants.ICON_TYPE.ENTYPO} name="controller-play" color="black" />}
          title="START"
          data-test="button-start"
        />
      </View>
      <View style={styles.stats} data-test="view-stats">
        <View style={styles.stat} data-test="view-stat-longest-streak">
          <Text style={styles.statTitle} data-test="text-stat-title">
            Longest Streak
          </Text>
          <Text style={styles.statData} data-test="text-stat-data">
            5 Hours{'\n'}25 Minutes
          </Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statTitle}>Longest Streak</Text>
          <Text style={styles.statData}>5 Hours{'\n'}25 Minutes</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statTitle}>Longest Streak</Text>
          <Text style={styles.statData}>5 Hours{'\n'}25 Minutes</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statTitle}>Longest Streak</Text>
          <Text style={styles.statData}>5 Hours{'\n'}25 Minutes</Text>
        </View>
      </View>
    </BlurView>
  );
};

FocusActivity.propTypes = {
  navigation: PropTypes.object,
  stopFocusActivity: PropTypes.func,
};

export default connect(null, { stopFocusActivity })(FocusActivity);
