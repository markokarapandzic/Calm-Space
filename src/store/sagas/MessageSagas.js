import { put } from 'redux-saga/effects';
import { sendMessage } from '../actions/MessageActions';
import { GET_MESSAGES_ERROR } from '../actions/ActionTypes';

// eslint-disable-next-line import/prefer-default-export
export function* printWorkingWhenSendingMessage(action) {
  if (action.payload.error) {
    yield put({ type: GET_MESSAGES_ERROR });
  } else {
    yield put(sendMessage(action.payload));
  }
}
