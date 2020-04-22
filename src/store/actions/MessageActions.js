import { GET_MESSAGES, SEND_MESSAGE, SEND_MESSAGE_REQUEST } from './ActionTypes';

export const getMessages = () => {
  return {
    type: GET_MESSAGES,
  };
};

export const sendMessageRequest = newMessage => {
  return {
    type: SEND_MESSAGE_REQUEST,
    payload: newMessage,
  };
};

export const sendMessage = newMessage => {
  return {
    type: SEND_MESSAGE,
    payload: newMessage,
  };
};
