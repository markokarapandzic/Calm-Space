/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps, storeFactory } from '../../../src/utils/testUtils';
import SleepActivity from '../../../src/components/Activities/SleepActivity/SleepActivity';

const defaultState = {
  loadingReducer: {
    stopSleepActivity: jest.fn(),
  },
};

const setup = (state = defaultState) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const store = storeFactory(state);
  const wrapper = shallow(<SleepActivity store={store} />)
    .dive()
    .dive();

  return wrapper;
};

describe('Sleep Activity Component', () => {
  describe('Rendering', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(defaultState);
    });

    test('should render Sleep Activity', () => {
      // const wrapper = setup(defaultState);
      const cmpFocusAct = findByTestAttr(wrapper, 'component-sleep-activity');
      expect(cmpFocusAct.length).toBe(1);
    });

    test('should render Header', () => {
      const header = findByTestAttr(wrapper, 'header');
      expect(header.length).toBe(1);
    });

    test('should render Alarm Time View', () => {
      const viewAlarmTime = findByTestAttr(wrapper, 'view-alarm-time');
      expect(viewAlarmTime.length).toBe(1);
    });

    test('should render Empty View', () => {
      const viewEmp = findByTestAttr(wrapper, 'view-empty');
      expect(viewEmp.length).toBe(1);
    });

    test('should render Time Text', () => {
      const txtTime = findByTestAttr(wrapper, 'text-time');
      expect(txtTime.length).toBe(1);
    });

    test('should render Add Button', () => {
      const btnAdd = findByTestAttr(wrapper, 'button-add');
      expect(btnAdd.length).toBe(1);
    });

    test('should render Alarms View', () => {
      const viewAlarms = findByTestAttr(wrapper, 'view-alarms');
      expect(viewAlarms.length).toBe(1);
    });

    test('should render Alarm View', () => {
      const viewAlarm = findByTestAttr(wrapper, 'view-alarm');
      expect(viewAlarm.length).toBe(1);
    });

    test('should render Alarm Title Text', () => {
      const txtAlarmTime = findByTestAttr(wrapper, 'text-alarm-time');
      expect(txtAlarmTime.length).toBe(1);
    });

    test('should render Alarm Switch Button', () => {
      const switchAlarm = findByTestAttr(wrapper, 'switch-alarm');
      expect(switchAlarm.length).toBe(1);
    });
  });

  describe('Props', () => {
    test('should not throw error with expected props', () => {
      checkProps(SleepActivity, defaultState);
    });
  });
});
