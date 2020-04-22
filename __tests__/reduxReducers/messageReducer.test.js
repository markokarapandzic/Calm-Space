/* eslint-disable no-undef */
import {
  GET_MESSAGES,
  GET_MESSAGES_ERROR,
  SEND_MESSAGE,
} from '../../src/store/actions/ActionTypes';
import messageReducer from '../../src/store/reducers/messageReducer';

describe('Redux - message reducer', () => {
  let fakeDefaultState;
  beforeEach(() => {
    fakeDefaultState = {
      error: false,
      messages: [
        {
          title: 'Message 1',
          body: 'Body of the first message',
        },
        {
          title: 'Message 2',
          body: 'Body of the second message',
        },
        {
          title: 'Message 3',
          body: 'Body of the third message',
        },
        {
          title: 'Message 4',
          body: 'Body of the fourth message',
        },
      ],
    };
  });

  test('should return default state when no correct action type passed', () => {
    const newState = messageReducer(undefined, {});
    expect(newState).toEqual(fakeDefaultState);
  });

  test('should return state base on GET_MESSAGE action type', () => {
    const newState = messageReducer(undefined, { type: GET_MESSAGES });
    expect(newState).toEqual(fakeDefaultState);
  });

  test('should return state base on GET_MESSAGE_ERROR action type', () => {
    const newState = messageReducer(undefined, { type: GET_MESSAGES_ERROR });
    fakeDefaultState.error = true;
    expect(newState).toEqual(fakeDefaultState);
  });

  test('should return state base on SEND_MESSAGE action type', () => {
    const action = {
      type: SEND_MESSAGE,
      payload: {
        title: 'Fake Message',
        body: 'Fake Message',
      },
    };
    const newState = messageReducer(undefined, action);
    fakeDefaultState.messages.push(action.payload);
    expect(newState).toEqual(fakeDefaultState);
  });
});
