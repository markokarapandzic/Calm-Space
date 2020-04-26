/* eslint-disable no-param-reassign */
/* eslint-disable indent */
import produce from 'immer';

import {
  START_LOADING,
  STOP_LOADING,
  START_FOCUS_ACTIVITY,
  STOP_FOCUS_ACTIVITY,
} from '../actions/ActionTypes';

const initialState = {
  loading: false,
  focusActivityModal: false,
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case START_LOADING:
        draft.loading = true;
        break;
      case STOP_LOADING:
        draft.loading = false;
        break;
      case START_FOCUS_ACTIVITY:
        draft.focusActivityModal = true;
        break;
      case STOP_FOCUS_ACTIVITY:
        draft.focusActivityModal = false;
        break;
      default:
        break;
    }
  });
