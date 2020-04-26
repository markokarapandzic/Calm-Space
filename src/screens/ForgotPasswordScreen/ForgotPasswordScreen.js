import React from 'react';
import { StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import { Text, Input, Button, Icon } from 'react-native-elements';

import * as Constants from '../../../constants';
import Style from './ForgotPasswordStyle';

const styles = StyleSheet.create(Style);

const ForgotPasswordScreen = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === Constants.PLATFORM.IOS ? 'padding' : 'height'}
      data-test="screen-forgot-password"
    >
      <Text h4 style={styles.title} data-test="text-title">
        Forgot your Password?
      </Text>
      <Text style={styles.description} data-test="text-description">
        Confirm your Email and we will send the instructions.
      </Text>
      <Input
        placeholder={Constants.EMAIL_PLACEHOLDER}
        leftIcon={<Icon type={Constants.ICON_TYPE.ZOCIAL} name="email" color="#a9a9a9" />}
        containerStyle={styles.inputContainer}
        leftIconContainerStyle={styles.leftIconContainer}
        data-test="input-email"
      />
      <Button
        title="Send"
        linearGradientProps={{
          colors: [Constants.THEME.colors.lightGreen2, Constants.THEME.colors.lightGreen],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },
        }}
        onPress={() => console.log('[ForgotPasswordScreen] Send Button onPress')}
        buttonStyle={styles.btn}
        containerStyle={styles.btnContainer}
        titleStyle={{ fontSize: Constants.AUTH_BUTTON_TEXT_SIZE }}
        data-test="button-send"
      />
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;
