/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../src/utils/testUtils';
import WelcomeScreen from '../../src/screens/WelcomeScreen/WelcomeScreen';

const setup = () => {
  const wrapper = shallow(<WelcomeScreen />);
  return wrapper;
};

describe('Welcome Screen', () => {
  describe('Rendering', () => {
    test('should render Welcome Screen', () => {
      const wrapper = setup();
      const screenWelcome = findByTestAttr(wrapper, 'welcome-screen');
      expect(screenWelcome.length).toBe(1);
    });

    describe('Should Render Title View', () => {
      test('should render title', () => {
        const wrapper = setup();
        const txtTitle = findByTestAttr(wrapper, 'text-title');
        expect(txtTitle.length).toBe(1);
      });

      test('should render title description', () => {
        const wrapper = setup();
        const txtTitleDesc = findByTestAttr(wrapper, 'text-title-description');
        expect(txtTitleDesc.length).toBe(1);
      });

      test('should render title view container', () => {
        const wrapper = setup();
        const viewTitle = findByTestAttr(wrapper, 'view-title-container');
        expect(viewTitle.length).toBe(1);
      });
    });

    describe('Should Render Swipe View', () => {
      test('should render ViewPager for Swipe', () => {
        const wrapper = setup();
        const viewPager = findByTestAttr(wrapper, 'viewpager-swipe');
        expect(viewPager.length).toBe(1);
      });

      test('should render View for Page 1', () => {
        const wrapper = setup();
        const viewPage1 = findByTestAttr(wrapper, 'view-page-1');
        expect(viewPage1.length).toBe(1);
      });

      test('should render Image for Page 1', () => {
        const wrapper = setup();
        const imageSwipe = findByTestAttr(wrapper, 'image-swipe-1');
        expect(imageSwipe.length).toBe(1);
      });

      test('should render View for Page 2', () => {
        const wrapper = setup();
        const viewPage2 = findByTestAttr(wrapper, 'view-page-2');
        expect(viewPage2.length).toBe(1);
      });

      test('should render Image for Page 2', () => {
        const wrapper = setup();
        const imageSwipe = findByTestAttr(wrapper, 'image-swipe-2');
        expect(imageSwipe.length).toBe(1);
      });

      test('should render View for Page 3', () => {
        const wrapper = setup();
        const viewPage3 = findByTestAttr(wrapper, 'view-page-3');
        expect(viewPage3.length).toBe(1);
      });

      test('should render Image for Page 3', () => {
        const wrapper = setup();
        const imageSwipe = findByTestAttr(wrapper, 'image-swipe-3');
        expect(imageSwipe.length).toBe(1);
      });
    });

    describe('Should Render Buttons', () => {
      test('should render Button View', () => {
        const wrapper = setup();
        const viewBtn = findByTestAttr(wrapper, 'view-buttons');
        expect(viewBtn.length).toBe(1);
      });

      test('should render SingUp Button', () => {
        const wrapper = setup();
        const btnSignup = findByTestAttr(wrapper, 'button-signup');
        expect(btnSignup.length).toBe(1);
      });

      test('should render SingIn Button', () => {
        const wrapper = setup();
        const btnSignin = findByTestAttr(wrapper, 'button-signin');
        expect(btnSignin.length).toBe(1);
      });

      test('should render Button Forgot Password', () => {
        const wrapper = setup();
        const btnForgotPassword = findByTestAttr(wrapper, 'button-forgot-password');
        expect(btnForgotPassword.length).toBe(1);
      });
    });
  });
});
