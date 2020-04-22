/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../src/utils/testUtils';
import RegisterScreen from '../../src/screens/RegisterScreen/RegisterScreen';

const setup = () => {
  const wrapper = shallow(<RegisterScreen />);
  return wrapper;
};

describe('Register Screen', () => {
  describe('Rendering', () => {
    test('should render the component', () => {
      const wrapper = setup();
      const component = findByTestAttr(wrapper, 'component-register');
      expect(component.length).toBe(1);
    });
  });
});
