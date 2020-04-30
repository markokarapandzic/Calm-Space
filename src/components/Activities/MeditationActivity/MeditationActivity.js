/* eslint-disable no-shadow */
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Platform } from 'react-native';
import { Text, Header, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BlurView } from 'expo-blur';

import { stopMeditationActivity } from '../../../store/actions/ActionCreator';
import * as Constants from '../../../../constants';
import Style from './MeditationActivityStyle';

const styles = StyleSheet.create(Style);

const MeditationActivity = ({ stopMeditationActivity }) => {
  return (
    <BlurView
      tint="dark"
      intensity={Platform.OS === Constants.PLATFORM.IOS ? 100 : 170}
      style={styles.container}
      data-test="component-meditation-activity"
    >
      <Header
        leftComponent={
          <TouchableOpacity onPress={() => stopMeditationActivity()} data-test="button-exit">
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
            Meditation
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
      <Text h4 style={styles.breathTxt} data-test="text-breath-in">
        Breath In
      </Text>
      <View style={styles.bottomContent} data-test="view-bottom-content">
        <TouchableOpacity
          style={styles.breatheBtn}
          activeOpacity={0.5}
          data-test="touchable-breath-btn"
        >
          <Text h1 style={styles.btnText} data-test="touchable-breath-btn-content">
            HOLD
          </Text>
        </TouchableOpacity>
      </View>
    </BlurView>
  );
};

MeditationActivity.propTypes = {
  stopMeditationActivity: PropTypes.func,
};

export default connect(null, { stopMeditationActivity })(MeditationActivity);
