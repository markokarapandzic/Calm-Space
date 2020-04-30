/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../src/utils/testUtils';

import HomeScreen from '../../src/screens/HomeScreen/HomeScreen';

const defaultState = {
  loadingReducer: {
    isFocusActivity: false,
  },
};

const setup = () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const store = storeFactory(defaultState);
  const wrapper = shallow(<HomeScreen store={store} />)
    .dive()
    .dive();

  return wrapper;
};

describe('Home Screen', () => {
  describe('Rendering', () => {
    test('should render Home Screen', () => {
      const wrapper = setup();
      const screenHome = findByTestAttr(wrapper, 'screen-home');
      expect(screenHome.length).toBe(1);
    });

    test('should render Background Image', () => {
      const wrapper = setup();
      const bcgImage = findByTestAttr(wrapper, 'background-image');
      expect(bcgImage.length).toBe(1);
    });

    test('should render Header', () => {
      const wrapper = setup();
      const header = findByTestAttr(wrapper, 'header');
      expect(header.length).toBe(1);
    });

    test('should render Bottom Content View', () => {
      const wrapper = setup();
      const viewBottonContent = findByTestAttr(wrapper, 'view-bottom-content');
      expect(viewBottonContent.length).toBe(1);
    });

    test('should render Quote Text', () => {
      const wrapper = setup();
      const txtQuote = findByTestAttr(wrapper, 'text-quote');
      expect(txtQuote.length).toBe(1);
    });

    test('should render Author Text', () => {
      const wrapper = setup();
      const txtAuthor = findByTestAttr(wrapper, 'text-author');
      expect(txtAuthor.length).toBe(1);
    });

    test('should render Activities View', () => {
      const wrapper = setup();
      const viewActivities = findByTestAttr(wrapper, 'view-activities');
      expect(viewActivities.length).toBe(1);
    });

    test('should render Activities Scroll View', () => {
      const wrapper = setup();
      const scrollViewActivities = findByTestAttr(wrapper, 'scroll-view-activities');
      expect(scrollViewActivities.length).toBe(1);
    });

    test('should render Activity Component 1', () => {
      const wrapper = setup();
      const cmpActivity1 = findByTestAttr(wrapper, 'component-activity-1');
      expect(cmpActivity1.length).toBe(1);
    });

    test('should render Activity Component 2', () => {
      const wrapper = setup();
      const cmpActivity2 = findByTestAttr(wrapper, 'component-activity-2');
      expect(cmpActivity2.length).toBe(1);
    });

    test('should render Activity Component 3', () => {
      const wrapper = setup();
      const cmpActivity3 = findByTestAttr(wrapper, 'component-activity-3');
      expect(cmpActivity3.length).toBe(1);
    });
  });
});
