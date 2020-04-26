/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { SocialIcon, Text, Input, Icon, Button } from 'react-native-elements';

import * as Constants from '../../../constants';
import { startLoading, stopLoading } from '../../store/actions/ActionCreator';

import Styles from './SignInScreenStyle';

const styles = StyleSheet.create(Styles);

const mapStateToProps = state => {
  return {
    loading: state.loadingReducer.loading,
  };
};

const SignInScreen = ({ navigation, loading, startLoading, stopLoading }) => {
  let passwordInputRef = React.createRef();

  const signin = () => {
    startLoading();
    setTimeout(() => {
      stopLoading();
      navigation.navigate(Constants.SCREEN.HOME);
    }, 3000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === Constants.PLATFORM.IOS ? 'padding' : 'height'}
      style={styles.container}
      data-test="screen-signin"
    >
      <ScrollView style={{ width: '100%' }}>
        <View style={styles.socialButtons} data-test="view-social-button">
          <TouchableOpacity
            activeOpacity={Constants.DEFAULT_OPACITY_TOUCHABLE}
            onPress={() => console.log('[SignIn Screen] Facebook Login Button onPress')}
            data-test="button-facebook"
          >
            <SocialIcon
              type="facebook"
              button
              title={Constants.FACEBOOK_LOGIN}
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
              title={Constants.GOOGLE_LOGIN}
              data-test="button-google-content"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.input} data-test="view-input">
          <Input
            label={Constants.EMAIL_LABEL}
            placeholder={Constants.EMAIL_PLACEHOLDER}
            leftIcon={<Icon type={Constants.ICON_TYPE.ZOCIAL} name="email" color="#a9a9a9" />}
            containerStyle={{ marginBottom: 20 }}
            leftIconContainerStyle={{ paddingRight: 10 }}
            data-test="input-email"
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordInputRef.focus();
            }}
            blurOnSubmit={false}
          />
          <Input
            label={Constants.PASSWORD_LABEL}
            placeholder={Constants.PASSWORD_PLACEHOLDER}
            leftIcon={<Icon type={Constants.ICON_TYPE.IONICON} name="ios-lock" color="#a9a9a9" />}
            containerStyle={{ marginBottom: 20 }}
            leftIconContainerStyle={{ paddingRight: 10 }}
            ref={input => {
              passwordInputRef = input;
            }}
            onSubmitEditing={() => signin()}
            returnKeyType="go"
            data-test="input-password"
          />
          <Button
            title="Login"
            linearGradientProps={{
              colors: [Constants.THEME.colors.lightGreen2, Constants.THEME.colors.lightGreen],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
            onPress={() => signin()}
            buttonStyle={{ height: 60, marginVertical: 40 }}
            titleStyle={{ fontSize: Constants.AUTH_BUTTON_TEXT_SIZE }}
            loading={loading}
            data-test="button-login"
          />
          <TouchableOpacity
            style={{ alignItems: 'center' }}
            onPress={() => navigation.navigate(Constants.SCREEN.FORGOT_PASSWORD)}
            data-test="button-forgot-password"
          >
            <Text style={styles.forgotPassword} data-test="button-forgot-password-content">
              {Constants.FORGOT_PASSWORD}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

SignInScreen.propTypes = {
  navigation: PropType.object,
  loading: PropType.bool,
  startLoading: PropType.func,
  stopLoading: PropType.func,
};

export default connect(mapStateToProps, { startLoading, stopLoading })(SignInScreen);
