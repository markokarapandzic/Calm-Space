/* eslint-disable no-undef */
import {
  START_LOADING,
  STOP_LOADING,
  START_SLEEP_ACTIVITY,
  START_FOCUS_ACTIVITY,
  STOP_SLEEP_ACTIVITY,
  STOP_FOCUS_ACTIVITY,
  STOP_MEDITATION_ACTIVITY,
  START_MEDITATION_ACTIVITY,
} from '../../src/store/actions/ActionTypes';
import loadingReducer from '../../src/store/reducers/loadingReducer';

describe('Redux - Loading Reducer', () => {
  let fakeDefaultState;
  beforeEach(() => {
    fakeDefaultState = {
      loading: false,
      focusActivityModal: false,
      sleepActivityModal: false,
      meditationActivityModal: false,
    };
  });

  test('should return FALSE for default Initial State', () => {
    const newState = loadingReducer(undefined, {});
    expect(newState).toEqual(fakeDefaultState);
  });

  test('should return state based on START_LOADING action type', () => {
    const newState = loadingReducer(undefined, { type: START_LOADING });
    fakeDefaultState.loading = true;
    expect(newState).toEqual(fakeDefaultState);
  });

  test('should return state based on STOP_LOADING action type', () => {
    const newState = loadingReducer(undefined, { type: STOP_LOADING });
    expect(newState).toEqual(fakeDefaultState);
  });

  test('should return state based on START_FOCUS_ACTIVITY action type', () => {
    const newState = loadingReducer(undefined, { type: START_FOCUS_ACTIVITY });
    fakeDefaultState.focusActivityModal = true;
    expect(newState).toEqual(fakeDefaultState);
  });

  test('should return state based on STOP_FOCUS_ACTIVITY action type', () => {
    const newState = loadingReducer(undefined, { type: STOP_FOCUS_ACTIVITY });
    expect(newState).toEqual(fakeDefaultState);
  });

  test('should return state based on START_SLEEP_ACTIVITY action type', () => {
    const newState = loadingReducer(undefined, { type: START_SLEEP_ACTIVITY });
    fakeDefaultState.sleepActivityModal = true;
    expect(newState).toEqual(fakeDefaultState);
  });

  test('should return state based on STOP_SLEEP_ACTIVITY action type', () => {
    const newState = loadingReducer(undefined, { type: STOP_SLEEP_ACTIVITY });
    expect(newState).toEqual(fakeDefaultState);
  });

  test('should return state based on START_MEDITATION_ACTIVITY action type', () => {
    const newState = loadingReducer(undefined, { type: START_MEDITATION_ACTIVITY });
    fakeDefaultState.meditationActivityModal = true;
    expect(newState).toEqual(fakeDefaultState);
  });

  test('should return state based on STOP_MEDITATION_ACTIVITY action type', () => {
    const newState = loadingReducer(undefined, { type: STOP_MEDITATION_ACTIVITY });
    expect(newState).toEqual(fakeDefaultState);
  });
});
