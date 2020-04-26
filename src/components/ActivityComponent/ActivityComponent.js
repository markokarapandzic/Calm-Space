/* eslint-disable no-shadow */
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BlurView } from 'expo-blur';

import { startFocusActivity } from '../../store/actions/ActionCreator';
import * as Constants from '../../../constants';
import Styles from './ActivityComponentStyle';

const styles = StyleSheet.create(Styles);

const ActivityComponent = ({ startFocusActivity }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => startFocusActivity()}
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
            Focus
          </Text>
          <Text style={styles.textWhite} data-test="text-description">
            Increase Productivity
          </Text>
        </View>
      </BlurView>
    </TouchableOpacity>
  );
};

ActivityComponent.propTypes = {
  startFocusActivity: PropTypes.func.isRequired,
};

export default connect(null, { startFocusActivity })(ActivityComponent);
