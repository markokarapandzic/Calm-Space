/* eslint-disable no-undef */
import {
  startLoading,
  stopLoading,
  startFocusActivity,
  startSleepActivity,
  stopSleepActivity,
  stopFocusActivity,
} from '../../src/store/actions/ActionCreator';
import {
  START_LOADING,
  STOP_LOADING,
  START_FOCUS_ACTIVITY,
  START_SLEEP_ACTIVITY,
  STOP_FOCUS_ACTIVITY,
  STOP_SLEEP_ACTIVITY,
} from '../../src/store/actions/ActionTypes';

describe('Redux - Index Actions', () => {
  test('should return startLoading action object', () => {
    const expectedAction = {
      type: START_LOADING,
    };
    expect(startLoading()).toEqual(expectedAction);
  });

  test('should return stopLoading action object', () => {
    const expectedAction = {
      type: STOP_LOADING,
    };
    expect(stopLoading()).toEqual(expectedAction);
  });

  test('should return startFocusActivity action object', () => {
    const expectedAction = {
      type: START_FOCUS_ACTIVITY,
    };
    expect(startFocusActivity()).toEqual(expectedAction);
  });

  test('should return stopFocusActivity action object', () => {
    const expectedAction = {
      type: STOP_FOCUS_ACTIVITY,
    };
    expect(stopFocusActivity()).toEqual(expectedAction);
  });

  test('should return startSleepActivity action object', () => {
    const expectedAction = {
      type: START_SLEEP_ACTIVITY,
    };
    expect(startSleepActivity()).toEqual(expectedAction);
  });

  test('should return stopSleepActivity action object', () => {
    const expectedAction = {
      type: STOP_SLEEP_ACTIVITY,
    };
    expect(stopSleepActivity()).toEqual(expectedAction);
  });
});
