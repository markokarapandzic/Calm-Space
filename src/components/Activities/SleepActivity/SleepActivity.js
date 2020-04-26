/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Platform, Switch } from 'react-native';
import { Text, Header, Icon, Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BlurView } from 'expo-blur';

import { stopSleepActivity } from '../../../store/actions/ActionCreator';
import * as Constants from '../../../../constants';
import Style from './SleepActivityStyle';

const styles = StyleSheet.create(Style);

const FocusActivity = ({ stopSleepActivity }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <BlurView
      tint="dark"
      intensity={Platform.OS === Constants.PLATFORM.IOS ? 100 : 170}
      style={styles.container}
      data-test="component-sleep-activity"
    >
      <Header
        leftComponent={
          <TouchableOpacity onPress={() => stopSleepActivity()} data-test="button-exit">
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
            Sleep
          </Text>
        }
        rightComponent={
          <TouchableOpacity>
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
      <View style={styles.countdown} data-test="view-alarm-time">
        <View data-test="view-empty" />
        <Text style={styles.timer} data-test="text-time">
          12:30:15
        </Text>
        <Button
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btn}
          titleStyle={styles.btnTitle}
          icon={<Icon type={Constants.ICON_TYPE.MATERIA_COMMUNITY} name="alarm" color="black" />}
          title="ADD"
          data-test="button-add"
        />
      </View>
      <View style={styles.alarms} data-test="view-alarms">
        <View style={styles.alarm} data-test="view-alarm">
          <Text h3 style={styles.alarmTime} data-test="text-alarm-time">
            08:00
          </Text>
          <Switch
            trackColor={{ false: Constants.THEME.colors.gray, true: Constants.THEME.colors.gray }}
            thumbColor={
              isEnabled ? Constants.THEME.colors.lightGreen : Constants.THEME.colors.lightgray
            }
            ios_backgroundColor={Constants.THEME.colors.gray}
            onValueChange={toggleSwitch}
            value={isEnabled}
            data-test="switch-alarm"
          />
        </View>
        <View style={styles.alarm}>
          <Text h3 style={styles.alarmTime}>
            11:55
          </Text>
          <Switch
            trackColor={{ false: Constants.THEME.colors.gray, true: Constants.THEME.colors.gray }}
            thumbColor={
              isEnabled ? Constants.THEME.colors.lightGreen : Constants.THEME.colors.lightgray
            }
            ios_backgroundColor={Constants.THEME.colors.gray}
            onValueChange={toggleSwitch}
            value={false}
          />
        </View>
        <View style={styles.alarm}>
          <Text h3 style={styles.alarmTime}>
            12:30
          </Text>
          <Switch
            trackColor={{ false: Constants.THEME.colors.gray, true: Constants.THEME.colors.gray }}
            thumbColor={
              isEnabled ? Constants.THEME.colors.lightGreen : Constants.THEME.colors.lightgray
            }
            ios_backgroundColor={Constants.THEME.colors.gray}
            onValueChange={toggleSwitch}
            value={false}
          />
        </View>
      </View>
    </BlurView>
  );
};

FocusActivity.propTypes = {
  stopSleepActivity: PropTypes.func,
};

export default connect(null, { stopSleepActivity })(FocusActivity);
