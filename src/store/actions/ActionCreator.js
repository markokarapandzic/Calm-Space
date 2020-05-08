import {
  START_LOADING,
  STOP_LOADING,
  START_FOCUS_ACTIVITY,
  STOP_FOCUS_ACTIVITY,
  START_SLEEP_ACTIVITY,
  STOP_SLEEP_ACTIVITY,
  START_MEDITATION_ACTIVITY,
  STOP_MEDITATION_ACTIVITY,
  START_SOUNDS_MODAL,
  STOP_SOUNDS_MODAL,
} from './ActionTypes';

export const startLoading = () => {
  return {
    type: START_LOADING,
  };
};

export const stopLoading = () => {
  return {
    type: STOP_LOADING,
  };
};

export const startFocusActivity = () => {
  return {
    type: START_FOCUS_ACTIVITY,
  };
};

export const stopFocusActivity = () => {
  return {
    type: STOP_FOCUS_ACTIVITY,
  };
};

export const startSleepActivity = () => {
  return {
    type: START_SLEEP_ACTIVITY,
  };
};

export const stopSleepActivity = () => {
  return {
    type: STOP_SLEEP_ACTIVITY,
  };
};

export const startMeditationActivity = () => {
  return {
    type: START_MEDITATION_ACTIVITY,
  };
};

export const stopMeditationActivity = () => {
  return {
    type: STOP_MEDITATION_ACTIVITY,
  };
};

export const startSoundsModal = () => {
  return {
    type: START_SOUNDS_MODAL,
  };
};

export const stopSoundsModal = () => {
  return {
    type: STOP_SOUNDS_MODAL,
  };
};
