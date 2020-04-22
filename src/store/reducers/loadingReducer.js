/* eslint-disable no-param-reassign */
/* eslint-disable indent */
import produce from 'immer';

import { START_LOADING, STOP_LOADING } from '../actions/ActionTypes';

const initialState = {
  loading: false,
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
      default:
        break;
    }
  });
