/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../src/utils/testUtils';

import NavBar from '../../src/components/NavBar/NavBar';

const setup = () => {
  const wrapper = shallow(<NavBar />);
  return wrapper;
};

describe('NavBar Component', () => {
  describe('Rendering', () => {
    test('should render NavBar Component', () => {
      const wrapper = setup();
      const cmpNavbar = findByTestAttr(wrapper, 'component-navbar');
      expect(cmpNavbar.length).toBe(1);
    });

    test('should render Left Empty View', () => {
      const wrapper = setup();
      const viewLeft = findByTestAttr(wrapper, 'view-left');
      expect(viewLeft.length).toBe(1);
    });

    test('should render Title Text', () => {
      const wrapper = setup();
      const txtTitle = findByTestAttr(wrapper, 'text-title');
      expect(txtTitle.length).toBe(1);
    });

    test('should render Right Theme Button', () => {
      const wrapper = setup();
      const btnThemes = findByTestAttr(wrapper, 'button-themes');
      expect(btnThemes.length).toBe(1);
    });

    test('should render Right Theme Button Content', () => {
      const wrapper = setup();
      const btnThemeContent = findByTestAttr(wrapper, 'button-themes-content');
      expect(btnThemeContent.length).toBe(1);
    });
  });
});
