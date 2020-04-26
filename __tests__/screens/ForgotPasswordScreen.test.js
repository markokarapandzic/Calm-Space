/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../src/utils/testUtils';

import ForgotPasswordScreen from '../../src/screens/ForgotPasswordScreen/ForgotPasswordScreen';

const setup = () => {
  const wrapper = shallow(<ForgotPasswordScreen />);
  return wrapper;
};

describe('Forgot Password Screen', () => {
  describe('Rendering', () => {
    test('should render Forgot Password Screen', () => {
      const wrapper = setup();
      const scrForgotPassword = findByTestAttr(wrapper, 'screen-forgot-password');
      expect(scrForgotPassword.length).toBe(1);
    });

    test('should render Title Text', () => {
      const wrapper = setup();
      const txtTitle = findByTestAttr(wrapper, 'text-title');
      expect(txtTitle.length).toBe(1);
    });

    test('should render Description Text', () => {
      const wrapper = setup();
      const txtDesc = findByTestAttr(wrapper, 'text-description');
      expect(txtDesc.length).toBe(1);
    });

    test('should render Email Input', () => {
      const wrapper = setup();
      const inpEmail = findByTestAttr(wrapper, 'input-email');
      expect(inpEmail.length).toBe(1);
    });

    test('should render Send Button', () => {
      const wrapper = setup();
      const btnSend = findByTestAttr(wrapper, 'button-send');
      expect(btnSend.length).toBe(1);
    });
  });
});
