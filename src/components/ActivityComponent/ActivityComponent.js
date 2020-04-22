import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { BlurView } from 'expo-blur';
import Styles from './ActivityComponentStyle';

const ActivityComponent = () => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => console.log('Activity onPress')}>
      <BlurView tint="dark" intensity={60} style={styles.activity}>
        <Icon name="target" type="foundation" color="white" size={120} />
        <View style={styles.activityText}>
          <Text h1 style={{ color: 'white' }}>
            Focus
          </Text>
          <Text style={{ color: 'white' }}>Increase Productivity</Text>
        </View>
      </BlurView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create(Styles);

export default ActivityComponent;
