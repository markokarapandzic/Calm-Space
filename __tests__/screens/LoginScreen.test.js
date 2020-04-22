/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../src/utils/testUtils';

import LoginScreen from '../../src/screens/LoginScreen/LoginScreen';

const setup = () => {
  const wrapper = shallow(<LoginScreen />);
  return wrapper;
};

describe('Login Screen', () => {
  describe('Rendering', () => {
    test('should render Login Screen', () => {
      const wrapper = setup();
      const screenLogin = findByTestAttr(wrapper, 'screen-login');
      expect(screenLogin.length).toBe(1);
    });

    test('should render title', () => {
      const wrapper = setup();
      const txtTitle = findByTestAttr(wrapper, 'text-title');
      expect(txtTitle.length).toBe(1);
    });

    test('should render Login Screen', () => {
      const wrapper = setup();
      const tiName = findByTestAttr(wrapper, 'text-input-name');
      expect(tiName.length).toBe(1);
    });
  });
});
