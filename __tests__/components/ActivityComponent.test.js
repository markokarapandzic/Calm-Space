/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../src/utils/testUtils';
import ActivityComponent from '../../src/components/ActivityComponent/ActivityComponent';

const defaultState = {
  loadingReducer: {
    startFocusActivity: jest.fn(),
    startSleepActivity: jest.fn(),
  },
};

const setup = (props = {}) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const store = storeFactory(defaultState);
  const wrapper = shallow(<ActivityComponent store={store} {...props} />).dive();

  return wrapper;
};

describe('Activity Component', () => {
  describe('Rendering', () => {
    test('should render Activity Component', () => {
      const wrapper = setup();
      const cmpActivity = findByTestAttr(wrapper, 'component-activity');
      expect(cmpActivity.length).toBe(1);
    });

    test('should render Blured Background View', () => {
      const wrapper = setup();
      const blurBckView = findByTestAttr(wrapper, 'blur-view-background');
      expect(blurBckView.length).toBe(1);
    });

    test('should render Activity Icon', () => {
      const wrapper = setup();
      const icnActivity = findByTestAttr(wrapper, 'icon-activity');
      expect(icnActivity.length).toBe(1);
    });

    test('should render Activity Text View', () => {
      const wrapper = setup();
      const viewActTxt = findByTestAttr(wrapper, 'view-activity-text');
      expect(viewActTxt.length).toBe(1);
    });

    test('should render Activity Title Text', () => {
      const wrapper = setup();
      const txtTitle = findByTestAttr(wrapper, 'text-title');
      expect(txtTitle.length).toBe(1);
    });

    test('should render Activity Description Text', () => {
      const wrapper = setup();
      const txtDesc = findByTestAttr(wrapper, 'text-description');
      expect(txtDesc.length).toBe(1);
    });
  });
});
