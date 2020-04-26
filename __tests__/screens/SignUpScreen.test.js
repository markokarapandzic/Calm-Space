/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../src/utils/testUtils';

import SignUpScreen from '../../src/screens/SignUpScreen/SignUpScreen';

const setup = () => {
  const wrapper = shallow(<SignUpScreen />);
  return wrapper;
};

describe('SignIn Screen', () => {
  describe('Rendering', () => {
    test('should render SignIn Screen', () => {
      const wrapper = setup();
      const screenSignin = findByTestAttr(wrapper, 'screen-signin');
      expect(screenSignin.length).toBe(1);
    });

    describe('Should render Social Buttons Register View', () => {
      test('should render Social Register Button View', () => {
        const wrapper = setup();
        const viewSocialBtns = findByTestAttr(wrapper, 'view-social-buttons');
        expect(viewSocialBtns.length).toBe(1);
      });

      test('should render Facebook Register Button', () => {
        const wrapper = setup();
        const btnFacebook = findByTestAttr(wrapper, 'button-facebook');
        expect(btnFacebook.length).toBe(1);
      });

      test('should render Facebook Register Button Content', () => {
        const wrapper = setup();
        const btnFacebookContent = findByTestAttr(wrapper, 'button-facebook-content');
        expect(btnFacebookContent.length).toBe(1);
      });

      test('should render Google Register Button', () => {
        const wrapper = setup();
        const btnGoogle = findByTestAttr(wrapper, 'button-google');
        expect(btnGoogle.length).toBe(1);
      });

      test('should render Google Register Button Content', () => {
        const wrapper = setup();
        const btnGoogleContent = findByTestAttr(wrapper, 'button-google-content');
        expect(btnGoogleContent.length).toBe(1);
      });
    });

    describe('Should render Register Input View', () => {
      test('should render Input View for Register', () => {
        const wrapper = setup();
        const viewRegister = findByTestAttr(wrapper, 'view-register');
        expect(viewRegister.length).toBe(1);
      });

      test('should render Username Input', () => {
        const wrapper = setup();
        const inpUsername = findByTestAttr(wrapper, 'input-username');
        expect(inpUsername.length).toBe(1);
      });

      test('should render Email Input', () => {
        const wrapper = setup();
        const inpEmail = findByTestAttr(wrapper, 'input-email');
        expect(inpEmail.length).toBe(1);
      });

      test('should render Password Input', () => {
        const wrapper = setup();
        const inpPassword = findByTestAttr(wrapper, 'input-password');
        expect(inpPassword.length).toBe(1);
      });

      test('should render Repeat Password Input', () => {
        const wrapper = setup();
        const inpPasswordRpt = findByTestAttr(wrapper, 'input-password-repeat');
        expect(inpPasswordRpt.length).toBe(1);
      });

      test('should render Register Button', () => {
        const wrapper = setup();
        const btnRegister = findByTestAttr(wrapper, 'button-register');
        expect(btnRegister.length).toBe(1);
      });
    });
  });
});
