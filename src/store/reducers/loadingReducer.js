/* eslint-disable no-param-reassign */
/* eslint-disable indent */
import produce from 'immer';

import {
  START_LOADING,
  STOP_LOADING,
  START_FOCUS_ACTIVITY,
  STOP_FOCUS_ACTIVITY,
  START_SLEEP_ACTIVITY,
  STOP_SLEEP_ACTIVITY,
  START_MEDITATION_ACTIVITY,
  STOP_MEDITATION_ACTIVITY,
} from '../actions/ActionTypes';

const initialState = {
  loading: false,
  focusActivityModal: false,
  sleepActivityModal: false,
  meditationActivityModal: false,
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
      case START_SLEEP_ACTIVITY:
        draft.sleepActivityModal = true;
        break;
      case STOP_SLEEP_ACTIVITY:
        draft.sleepActivityModal = false;
        break;
      case START_MEDITATION_ACTIVITY:
        draft.meditationActivityModal = true;
        break;
      case STOP_MEDITATION_ACTIVITY:
        draft.meditationActivityModal = false;
        break;
      default:
        break;
    }
  });
