/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { Button, SocialIcon, Input, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import * as Constants from '../../../constants';
import Styles from './SignUpScreenStyle';

const styles = StyleSheet.create(Styles);

const SignUpScreen = ({ navigation }) => {
  let emailInputRef = React.createRef();
  let passwordInputRef = React.createRef();
  let repPasswordInputRef = React.createRef();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === Constants.PLATFORM.IOS ? 'padding' : 'height'}
      style={styles.container}
      data-test="screen-signin"
    >
      <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
        <View style={styles.socialButtons} data-test="view-social-buttons">
          <TouchableOpacity
            activeOpacity={Constants.DEFAULT_OPACITY_TOUCHABLE}
            onPress={() => console.log('[SignIn Screen] Facebook Login Button onPress')}
            data-test="button-facebook"
          >
            <SocialIcon
              type="facebook"
              button
              title={Constants.FACEBOOK_REGISTER}
              data-test="button-facebook-content"
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={Constants.DEFAULT_OPACITY_TOUCHABLE}
            onPress={() => console.log('[SignIn Screen] Google Login Button onPress')}
            data-test="button-google"
          >
            <SocialIcon
              type="google"
              button
              title={Constants.GOOGLE_REGISTER}
              data-test="button-google-content"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.input} data-test="view-register">
          <Input
            label={Constants.USERNAME_LABEL}
            placeholder={Constants.USERNAME_PLACEHOLDER}
            leftIcon={<Icon type={Constants.ICON_TYPE.FONT_AWESOME} name="user" color="#a9a9a9" />}
            containerStyle={{ marginBottom: 20 }}
            leftIconContainerStyle={{ paddingRight: 10 }}
            data-test="input-username"
            returnKeyType="next"
            onSubmitEditing={() => {
              emailInputRef.focus();
            }}
            blurOnSubmit={false}
          />
          <Input
            label={Constants.EMAIL_LABEL}
            placeholder={Constants.EMAIL_PLACEHOLDER}
            leftIcon={<Icon type="zocial" name="email" color="#a9a9a9" />}
            containerStyle={{ marginBottom: 20 }}
            leftIconContainerStyle={{ paddingRight: 10 }}
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordInputRef.focus();
            }}
            blurOnSubmit={false}
            ref={input => {
              emailInputRef = input;
            }}
            data-test="input-email"
          />
          <Input
            label={Constants.PASSWORD_LABEL}
            placeholder={Constants.PASSWORD_PLACEHOLDER}
            leftIcon={<Icon type={Constants.ICON_TYPE.IONICON} name="ios-lock" color="#a9a9a9" />}
            containerStyle={{ marginBottom: 20 }}
            leftIconContainerStyle={{ paddingRight: 10 }}
            returnKeyType="next"
            onSubmitEditing={() => {
              repPasswordInputRef.focus();
            }}
            blurOnSubmit={false}
            ref={input => {
              passwordInputRef = input;
            }}
            data-test="input-password"
          />
          <Input
            label={Constants.REPEAT_PASSWORD_LABEL}
            placeholder={Constants.PASSWORD_PLACEHOLDER}
            leftIcon={<Icon type={Constants.ICON_TYPE.IONICON} name="ios-lock" color="#a9a9a9" />}
            containerStyle={{ marginBottom: 20 }}
            leftIconContainerStyle={{ paddingRight: 10 }}
            data-test="input-password-repeat"
            returnKeyType="go"
            onSubmitEditing={() => {
              navigation.navigate(Constants.SCREEN.HOME)
            }}
            ref={input => {
              repPasswordInputRef = input;
            }}
          />
          <Button
            title="Register"
            linearGradientProps={{
              colors: [Constants.THEME.colors.lightGreen2, Constants.THEME.colors.lightGreen],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
            onPress={() => navigation.navigate(Constants.SCREEN.HOME)}
            buttonStyle={{ height: 60, marginVertical: 10 }}
            titleStyle={{ fontSize: Constants.AUTH_BUTTON_TEXT_SIZE }}
            data-test="button-register"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

SignUpScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SignUpScreen;
