/* eslint-disable no-undef */
import { START_LOADING, STOP_LOADING } from '../../src/store/actions/ActionTypes';
import loadingReducer from '../../src/store/reducers/loadingReducer';

describe('Redux - Loading Reducer', () => {
  let fakeDefaultState;
  beforeEach(() => {
    fakeDefaultState = {
      loading: false,
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
});
