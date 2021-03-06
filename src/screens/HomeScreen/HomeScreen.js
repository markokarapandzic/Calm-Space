import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Modal,
  Alert,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, Header, Icon } from 'react-native-elements';

import Styles from './HomeScreenStyle';
import * as Constants from '../../../constants';
import ActivityComponent from '../../components/ActivityComponent/ActivityComponent';
import SleepActivity from '../../components/Activities/SleepActivity/SleepActivity';
import FocusActivity from '../../components/Activities/FocusAcitvity/FocusAcitvity';
import MeditationActivity from '../../components/Activities/MeditationActivity/MeditationActivity';

const styles = StyleSheet.create(Styles);

const mapStateToProps = state => {
  return {
    isFocusActivity: state.loadingReducer.focusActivityModal,
    isSleepActivity: state.loadingReducer.sleepActivityModal,
    isMeditationActivity: state.loadingReducer.meditationActivityModal,
  };
};

const HomeScreen = ({ navigation, isFocusActivity, isSleepActivity, isMeditationActivity }) => {
  return (
    <View style={styles.backgroundContainer} data-test="screen-home">
      <ImageBackground
        source={require('../../../assets/forest-theme-background.jpg')}
        style={styles.backgroundImage}
        data-test="background-image"
      >
        <View style={styles.container} data-test="view-main">
          <Header
            centerComponent={<Text h4>Calm Space</Text>}
            rightComponent={
              <TouchableOpacity onPress={() => navigation.navigate(Constants.SCREEN.THEMES)}>
                <Icon name="ios-leaf" type="ionicon" size={30} />
              </TouchableOpacity>
            }
            containerStyle={styles.headerContainer}
            data-test="header"
          />
          <View style={styles.bottomContent} data-test="view-bottom-content">
            <Text style={styles.quote} data-test="text-quote">
              {Constants.QUOTE}
            </Text>
            <Text style={styles.author} data-test="text-author">
              {Constants.AUTHOR}
            </Text>
            <View style={styles.activities} data-test="view-activities">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                data-test="scroll-view-activities"
              >
                <ActivityComponent
                  activity={Constants.ACTIVITY_ENUM.FOCUS}
                  data-test="component-activity-1"
                />
                <ActivityComponent
                  activity={Constants.ACTIVITY_ENUM.SLEEP}
                  data-test="component-activity-2"
                />
                <ActivityComponent
                  activity={Constants.ACTIVITY_ENUM.MEDITATION}
                  data-test="component-activity-3"
                />
              </ScrollView>
            </View>
          </View>
        </View>
      </ImageBackground>
      {/* Focus Activity */}
      <Modal
        animationType="fade"
        // eslint-disable-next-line react/jsx-boolean-value
        visible={isFocusActivity}
        transparent
        presentationStyle="overFullScreen"
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <FocusActivity navigation={navigation} />
      </Modal>
      {/* Sleep Activity */}
      <Modal
        animationType="fade"
        // eslint-disable-next-line react/jsx-boolean-value
        visible={isSleepActivity}
        transparent
        presentationStyle="overFullScreen"
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <SleepActivity />
      </Modal>
      {/* Meditation Activity */}
      <Modal
        animationType="fade"
        // eslint-disable-next-line react/jsx-boolean-value
        visible={isMeditationActivity}
        transparent
        presentationStyle="overFullScreen"
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <MeditationActivity />
      </Modal>
    </View>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.object,
  isFocusActivity: PropTypes.bool,
  isSleepActivity: PropTypes.bool,
  isMeditationActivity: PropTypes.bool,
};

export default connect(mapStateToProps)(HomeScreen);
