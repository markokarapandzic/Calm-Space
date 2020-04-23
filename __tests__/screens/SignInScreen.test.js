/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps, storeFactory } from '../../src/utils/testUtils';
import SignInScreen from '../../src/screens/SignInScreen/SignInScreen';

const defaultState = {
  loadingReducer: {
    loading: false,
    startLoading: jest.fn(),
    stopLoading: jest.fn(),
  },
};

const setup = (state = defaultState) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const store = storeFactory(state);
  const wrapper = shallow(<SignInScreen store={store} />)
    .dive()
    .dive();

  return wrapper;
};

describe('SignIn Screen', () => {
  describe('Rendering', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(defaultState);
    });

    test('should render Signin Screen', () => {
      // const wrapper = setup(defaultState);
      const screenSignin = findByTestAttr(wrapper, 'screen-signin');
      expect(screenSignin.length).toBe(1);
    });

    test('should render Social Buttons View', () => {
      const viewSocBtns = findByTestAttr(wrapper, 'view-social-button');
      expect(viewSocBtns.length).toBe(1);
    });

    test('should render Facebook Register Button', () => {
      const btnFacebook = findByTestAttr(wrapper, 'button-facebook');
      expect(btnFacebook.length).toBe(1);
    });

    test('should render Facebook Register Button Content', () => {
      const btnFacebookCnt = findByTestAttr(wrapper, 'button-facebook-content');
      expect(btnFacebookCnt.length).toBe(1);
    });

    test('should render Google Register Button', () => {
      const btnGoogle = findByTestAttr(wrapper, 'button-google');
      expect(btnGoogle.length).toBe(1);
    });

    test('should render Google Register Button Content', () => {
      const btnGoogleCnt = findByTestAttr(wrapper, 'button-google-content');
      expect(btnGoogleCnt.length).toBe(1);
    });
  });

  describe('Should render Input View', () => {
    test('should render Input View for Login', () => {
      const wrapper = setup();
      const viewLogin = findByTestAttr(wrapper, 'view-input');
      expect(viewLogin.length).toBe(1);
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

    test('should render Login Button', () => {
      const wrapper = setup();
      const btnLogin = findByTestAttr(wrapper, 'button-login');
      expect(btnLogin.length).toBe(1);
    });

    test('should render Forger Password Button', () => {
      const wrapper = setup();
      const btnForgotPass = findByTestAttr(wrapper, 'button-forgot-password');
      expect(btnForgotPass.length).toBe(1);
    });

    test('should render Forger Password Button Content', () => {
      const wrapper = setup();
      const btnForgotPassCnt = findByTestAttr(wrapper, 'button-forgot-password-content');
      expect(btnForgotPassCnt.length).toBe(1);
    });

    describe('Login Button Loading', () => {
      test('should render Login Button without Loading', () => {
        const wrapper = setup();
        const btnLogin = findByTestAttr(wrapper, 'button-login');
        const isLoading = btnLogin.prop('loading');
        expect(isLoading).toBe(false);
      });

      test('should render Login Button with Loading', () => {
        const newState = {
          loadingReducer: {
            loading: true,
            startLoading: jest.fn(),
            stopLoading: jest.fn(),
          },
        };
        const wrapper = setup(newState);
        const btnLogin = findByTestAttr(wrapper, 'button-login');

        const isLoading = btnLogin.prop('loading');

        expect(isLoading).toBe(true);
      });
    });
  });

  describe('Props', () => {
    test('should not throw error with expected props', () => {
      checkProps(SignInScreen, defaultState);
    });
  });
});
