import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { BlurView } from 'expo-blur';

import * as Constants from '../../../constants';
import Styles from './ActivityComponentStyle';

const styles = StyleSheet.create(Styles);

const ActivityComponent = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => console.log('Activity onPress')}
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

export default ActivityComponent;
