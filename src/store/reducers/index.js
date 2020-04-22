import { combineReducers } from 'redux';

import messageReducer from './messageReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
  messageReducer,
  loadingReducer,
});
