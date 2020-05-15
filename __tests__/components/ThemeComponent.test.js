/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../src/utils/testUtils';

import ThemeComponent from '../../src/components/ThemeComponent/ThemeComponent';

const defaultState = {
  loadingReducer: {
    isSoundsModalActive: false,
    startSoundsModal: jest.fn(),
  },
};

const setup = (state = defaultState) => {
  const store = storeFactory(state);
  const wrapper = shallow(<ThemeComponent store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('Theme Component', () => {
  describe('Rendering', () => {
    test('should render Theme Component', () => {
      const wrapper = setup(defaultState);
      const cmpTheme = findByTestAttr(wrapper, 'component-theme');
      expect(cmpTheme.length).toBe(1);
    });

    test('should render Container View', () => {
      const wrapper = setup(defaultState);
      const viewContainer = findByTestAttr(wrapper, 'view-container');
      expect(viewContainer.length).toBe(1);
    });

    test('should render Header', () => {
      const wrapper = setup(defaultState);
      const header = findByTestAttr(wrapper, 'header');
      expect(header.length).toBe(1);
    });

    test('should render Bottom Content View', () => {
      const wrapper = setup(defaultState);
      const viewBottomCnt = findByTestAttr(wrapper, 'view-bottom-content');
      expect(viewBottomCnt.length).toBe(1);
    });

    test('should render Theme Info View', () => {
      const wrapper = setup(defaultState);
      const viewThemeInfo = findByTestAttr(wrapper, 'view-theme-info');
      expect(viewThemeInfo.length).toBe(1);
    });

    test('should render Title Text', () => {
      const wrapper = setup(defaultState);
      const txtTitle = findByTestAttr(wrapper, 'text-title');
      expect(txtTitle.length).toBe(1);
    });

    test('should render Description Text', () => {
      const wrapper = setup(defaultState);
      const txtDesc = findByTestAttr(wrapper, 'text-description');
      expect(txtDesc.length).toBe(1);
    });

    // test('should render Swipe Icon View', () => {
    //   const wrapper = setup(defaultState);
    //   const viewSwipeIcn = findByTestAttr(wrapper, 'view-swipe-icon');
    //   expect(viewSwipeIcn.length).toBe(1);
    // });

    // test('should render Swipe Arrows Icon', () => {
    //   const wrapper = setup(defaultState);
    //   const icnArrow = findByTestAttr(wrapper, 'icon-arrows');
    //   expect(icnArrow.length).toBe(1);
    // });

    // test('should render Swipe Hand Icon', () => {
    //   const wrapper = setup(defaultState);
    //   const icnHand = findByTestAttr(wrapper, 'icon-hand');
    //   expect(icnHand.length).toBe(1);
    // });
  });
});
