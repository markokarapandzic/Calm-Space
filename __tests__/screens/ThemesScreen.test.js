/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../src/utils/testUtils';

import ThemesScreen from '../../src/screens/ThemesScreen/ThemesScreen';

const setup = () => {
  const wrapper = shallow(<ThemesScreen />);
  return wrapper;
};

describe('Themes Screen', () => {
  describe('Rendering', () => {
    test('should render Welcome Screen', () => {
      const wrapper = setup();
      const screenThemes = findByTestAttr(wrapper, 'screen-themes');
      expect(screenThemes.length).toBe(1);
    });

    test('should render View Pager', () => {
      const wrapper = setup();
      const viewPgrThemes = findByTestAttr(wrapper, 'viewpager-themes');
      expect(viewPgrThemes.length).toBe(1);
    });

    test('should render Theme Component 1', () => {
      const wrapper = setup();
      const cmpTheme1 = findByTestAttr(wrapper, 'component-theme-1');
      expect(cmpTheme1.length).toBe(1);
    });

    test('should render Theme Component 2', () => {
      const wrapper = setup();
      const cmpTheme2 = findByTestAttr(wrapper, 'component-theme-2');
      expect(cmpTheme2.length).toBe(1);
    });

    test('should render Theme Component 3', () => {
      const wrapper = setup();
      const cmpTheme3 = findByTestAttr(wrapper, 'component-theme-3');
      expect(cmpTheme3.length).toBe(1);
    });
  });
});
