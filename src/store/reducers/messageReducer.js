import produce from 'immer';

import { GET_MESSAGES, SEND_MESSAGE, GET_MESSAGES_ERROR } from '../actions/ActionTypes';

const initialState = {
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

export default (state = initialState, action) =>
  produce(state, draft => {
    /* eslint-disable indent */
    switch (action.type) {
      case GET_MESSAGES:
        break;
      case GET_MESSAGES_ERROR:
        // eslint-disable-next-line no-param-reassign
        draft.error = true;
        break;
      case SEND_MESSAGE:
        draft.messages.push(action.payload);
        break;
      default:
        break;
    }
  });
