import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import PropType from 'prop-types';
import { Text } from 'react-native-elements';
import ViewPager from '@react-native-community/viewpager';
import { LinearGradient } from 'expo-linear-gradient';
import * as Constants from '../../../constants';

import Styles from './WelcomeScreenStyle';

const styles = StyleSheet.create(Styles);

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container} data-test="welcome-screen">
      <LinearGradient
        colors={[Constants.THEME.colors.lightGreen, Constants.THEME.colors.greenGrey]}
        style={styles.gradient}
        start={Constants.GRADIENT_TOP_STARTING_POSITION} // Gradient Starting Position
      />
      <View style={styles.titleContent} data-test="view-title-container">
        <Text style={styles.title} data-test="text-title">
          Calm Space
        </Text>
        <Text style={styles.titleDescription} data-test="text-title-description">
          Enjoy the Experience
        </Text>
      </View>
      <View style={styles.swipe}>
        <ViewPager style={styles.viewPager} initialPage={0} data-test="viewpager-swipe">
          <View style={styles.page} key="1" data-test="view-page-1">
            <Image
              source={require('../../../assets/welcome-page-1.png')}
              style={styles.swipeImage}
              data-test="image-swipe-1"
            />
          </View>
          <View style={styles.page} key="2" data-test="view-page-2">
            <Image
              source={require('../../../assets/welcome-page-2.png')}
              style={styles.swipeImage}
              data-test="image-swipe-2"
            />
          </View>
          <View style={styles.page} key="3" data-test="view-page-3">
            <Image
              source={require('../../../assets/welcome-page-3.png')}
              style={styles.swipeImage}
              data-test="image-swipe-3"
            />
          </View>
        </ViewPager>
      </View>
      <View style={styles.buttons} data-test="view-buttons">
        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={() => navigation.navigate(Constants.SCREEN.SIGNUP)}
          data-test="button-signup"
        >
          <Text style={styles.signUpBtnText}>{Constants.SIGN_UP}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signInBtn}
          onPress={() => navigation.navigate(Constants.SCREEN.SIGNIN)}
          data-test="button-signin"
        >
          <Text style={styles.signUpBtnText}>{Constants.SIGN_IN}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('[WelcomeScreen] Forgot Password Button onPress')}
          data-test="button-forgot-password"
        >
          <Text style={styles.forgotPassword}>{Constants.FORGOT_PASSWORD}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

WelcomeScreen.propTypes = {
  navigation: PropType.object,
};

export default WelcomeScreen;
