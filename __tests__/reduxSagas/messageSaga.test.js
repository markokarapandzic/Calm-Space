/* eslint-disable max-len */
/* eslint-disable no-undef */
import { put } from 'redux-saga/effects';

import { printWorkingWhenSendingMessage } from '../../src/store/sagas/MessageSagas';
import { GET_MESSAGES_ERROR } from '../../src/store/actions/ActionTypes';
import { sendMessage } from '../../src/store/actions/MessageActions';

describe('Redux - Message Saga', () => {
  let action;
  beforeEach(() => {
    action = {
      payload: {
        error: false,
      },
    };
  });

  test('should dispatch sendMessage action in printWorkingWhenSendingMessage when error false', () => {
    const gen = printWorkingWhenSendingMessage(action);
    expect(gen.next().value).toEqual(put(sendMessage(action.payload)));
  });

  test('should dispatch GET_MESSAGE_ERROR action in printWorkingWhenSendingMessage when error true', () => {
    action.payload.error = true;
    const gen = printWorkingWhenSendingMessage(action);
    expect(gen.next().value).toEqual(put({ type: GET_MESSAGES_ERROR }));
  });
});
