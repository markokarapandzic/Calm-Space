import { all, takeLatest } from 'redux-saga/effects';
import { SEND_MESSAGE_REQUEST } from '../actions/ActionTypes';
import { printWorkingWhenSendingMessage } from './MessageSagas';

export default function* rootSaga() {
  yield all([takeLatest(SEND_MESSAGE_REQUEST, printWorkingWhenSendingMessage)]);
}
