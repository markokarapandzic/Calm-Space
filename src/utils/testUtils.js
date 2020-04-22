// eslint-disable-next-line import/no-extraneous-dependencies
import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
import combineReducers from '../store/reducers';
// import rootSaga from '../../src/store/sagas';

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  // eslint-disable-next-line react/forbid-foreign-prop-types
  const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
  // eslint-disable-next-line no-undef
  expect(propError).toBeUndefined();
};

export const storeFactory = (initialState = {}) => {
  const store = createStore(combineReducers, initialState);
  return store;
};
