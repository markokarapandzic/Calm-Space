/* eslint-disable no-undef */
import { startLoading, stopLoading } from '../../src/store/actions/ActionCreator';
import { START_LOADING, STOP_LOADING } from '../../src/store/actions/ActionTypes';

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
});
