/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps, storeFactory } from '../../../src/utils/testUtils';
import MeditationActivity from '../../../src/components/Activities/MeditationActivity/MeditationActivity';

const defaultState = {
  loadingReducer: {
    stopMeditationActivity: jest.fn(),
  },
};

const setup = (state = defaultState) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const store = storeFactory(state);
  const wrapper = shallow(<MeditationActivity store={store} />)
    .dive()
    .dive();

  return wrapper;
};

describe('Meditation Activity Component', () => {
  describe('Rendering', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(defaultState);
    });

    test('should render Meditation Activity', () => {
      // const wrapper = setup(defaultState);
      const cmpMeditationAct = findByTestAttr(wrapper, 'component-meditation-activity');
      expect(cmpMeditationAct.length).toBe(1);
    });

    test('should render Header', () => {
      const header = findByTestAttr(wrapper, 'header');
      expect(header.length).toBe(1);
    });

    test('should render Time Text', () => {
      const txtBreathIn = findByTestAttr(wrapper, 'text-breath-in');
      expect(txtBreathIn.length).toBe(1);
    });

    test('should render Bottom Content View', () => {
      const viewBottomContent = findByTestAttr(wrapper, 'view-bottom-content');
      expect(viewBottomContent.length).toBe(1);
    });

    test('should render HOLD Touchable Opacity', () => {
      const toHold = findByTestAttr(wrapper, 'touchable-breath-btn');
      expect(toHold.length).toBe(1);
    });

    test('should render HOLD Touchable Opacity Content', () => {
      const toHoldContent = findByTestAttr(wrapper, 'touchable-breath-btn-content');
      expect(toHoldContent.length).toBe(1);
    });
  });

  describe('Props', () => {
    test('should not throw error with expected props', () => {
      checkProps(MeditationActivity, defaultState);
    });
  });
});
