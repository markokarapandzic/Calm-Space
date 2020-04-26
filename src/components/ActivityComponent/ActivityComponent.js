/* eslint-disable indent */
/* eslint-disable no-shadow */
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BlurView } from 'expo-blur';

import { startFocusActivity, startSleepActivity } from '../../store/actions/ActionCreator';
import * as Constants from '../../../constants';
import Styles from './ActivityComponentStyle';

const styles = StyleSheet.create(Styles);

const ActivityComponent = ({ activity, startFocusActivity, startSleepActivity }) => {
  let startActivity = null;
  let title = 'Activity';
  let description = 'Increase Rest';

  switch (activity) {
    case Constants.ACTIVITY_ENUM.FOCUS:
      startActivity = startFocusActivity;
      title = 'Focus';
      description = 'Increase Productivity';
      break;
    case Constants.ACTIVITY_ENUM.SLEEP:
      startActivity = startSleepActivity;
      title = 'Sleep';
      description = 'Increase Rest';
      break;
    default:
      break;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => startActivity()}
      data-test="component-activity"
    >
      <BlurView tint="dark" intensity={60} style={styles.activity} data-test="blur-view-background">
        <Icon
          name="target"
          type={Constants.ICON_TYPE.FOUNDATION}
          color="white"
          size={120}
          data-test="icon-activity"
        />
        <View style={styles.activityText} data-test="view-activity-text">
          <Text h1 style={styles.textWhite} data-test="text-title">
            {title}
          </Text>
          <Text style={styles.textWhite} data-test="text-description">
            {description}
          </Text>
        </View>
      </BlurView>
    </TouchableOpacity>
  );
};

ActivityComponent.propTypes = {
  startFocusActivity: PropTypes.func.isRequired,
  startSleepActivity: PropTypes.func.isRequired,
  activity: PropTypes.oneOf([Constants.ACTIVITY_ENUM.FOCUS, Constants.ACTIVITY_ENUM.SLEEP]),
};

export default connect(null, { startFocusActivity, startSleepActivity })(ActivityComponent);
