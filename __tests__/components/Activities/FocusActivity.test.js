/* eslint-disable no-undef */
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps, storeFactory } from '../../../src/utils/testUtils';
import FocusAcitvity from '../../../src/components/Activities/FocusAcitvity/FocusAcitvity';
import { TouchableOpacity } from 'react-native-gesture-handler';

const defaultState = {
  loadingReducer: {
    stopFocusActivity: jest.fn(),
  },
};

const setup = (state = defaultState) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const store = storeFactory(state);
  const wrapper = shallow(<FocusAcitvity store={store} />)
    .dive()
    .dive();

  return wrapper;
};

describe('Focus Activity Component', () => {
  describe('Rendering', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(defaultState);
    });

    test('should render Focus Activity', () => {
      // const wrapper = setup(defaultState);
      const cmpFocusAct = findByTestAttr(wrapper, 'component-focus-activity');
      expect(cmpFocusAct.length).toBe(1);
    });

    test('should render Header', () => {
      const header = findByTestAttr(wrapper, 'header');
      expect(header.length).toBe(1);
    });

    test('should render Countdown View', () => {
      const viewCountdown = findByTestAttr(wrapper, 'view-countdown');
      expect(viewCountdown.length).toBe(1);
    });

    test('should render Timer Text', () => {
      const txtTimer = findByTestAttr(wrapper, 'text-timer');
      expect(txtTimer.length).toBe(1);
    });

    test('should render Start Button', () => {
      const btnStart = findByTestAttr(wrapper, 'button-start');
      expect(btnStart.length).toBe(1);
    });

    test('should render Stats View', () => {
      const viewStats = findByTestAttr(wrapper, 'view-stats');
      expect(viewStats.length).toBe(1);
    });

    test('should render Stat Component', () => {
      const viewStatLongStr = findByTestAttr(wrapper, 'view-stat-longest-streak');
      expect(viewStatLongStr.length).toBe(1);
    });

    test('should render Stat Component Title', () => {
      const txtStatTitle = findByTestAttr(wrapper, 'text-stat-title');
      expect(txtStatTitle.length).toBe(1);
    });

    test('should render Stats Component Data', () => {
      const txtStatData = findByTestAttr(wrapper, 'text-stat-data');
      expect(txtStatData.length).toBe(1);
    });
  });

  describe('Props', () => {
    test('should not throw error with expected props', () => {
      checkProps(FocusAcitvity, defaultState);
    });
  });
});
