/* eslint-disable no-undef */
import {
  getMessages,
  sendMessage,
  sendMessageRequest,
} from '../../src/store/actions/MessageActions';
import {
  GET_MESSAGES,
  SEND_MESSAGE,
  SEND_MESSAGE_REQUEST,
} from '../../src/store/actions/ActionTypes';

describe('Redux - Message Actions', () => {
  test('should return getMessage action object', () => {
    const expectedAction = {
      type: GET_MESSAGES,
    };
    expect(getMessages()).toEqual(expectedAction);
  });

  test('should return sendMessageRequest action object', () => {
    const newFakeMessage = {
      title: 'Fake Message',
      body: 'Fake Body',
    };
    const expectedAction = {
      type: SEND_MESSAGE_REQUEST,
      payload: newFakeMessage,
    };
    expect(sendMessageRequest(newFakeMessage)).toEqual(expectedAction);
  });

  test('should return getMessage action object', () => {
    const newFakeMessage = {
      title: 'Fake Message',
      body: 'Fake Body',
    };
    const expectedAction = {
      type: SEND_MESSAGE,
      payload: newFakeMessage,
    };
    expect(sendMessage(newFakeMessage)).toEqual(expectedAction);
  });
});
