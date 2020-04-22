/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps, storeFactory } from '../../src/utils/testUtils';
import TestScreen from '../../src/screens/TestScreen/TestScreen';

const defaultProps = {
  messageReducer: {
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
    sendMessageRequest: jest.fn(),
    navigation: jest.fn(),
  },
};

const setup = (state = {}) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const store = storeFactory(state);
  const wrapper = shallow(<TestScreen store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('Test Screen', () => {
  describe('Rendering', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(defaultProps);
    });

    test('should render Test Screen', () => {
      const component = findByTestAttr(wrapper, 'component-test');
      expect(component.length).toBe(1);
    });

    test('should render text title', () => {
      const txtTitle = findByTestAttr(wrapper, 'text-title');
      expect(txtTitle.length).toBe(1);
    });

    test('should render flatlist', () => {
      const flMessages = findByTestAttr(wrapper, 'flatlist-messages');
      expect(flMessages.length).toBe(1);
    });

    test('should render button navigation to login', () => {
      const btNavigationLogin = findByTestAttr(wrapper, 'button-navigation-login');
      expect(btNavigationLogin.length).toBe(1);
    });

    test('should render error message', () => {
      const txtError = findByTestAttr(wrapper, 'text-error');
      expect(txtError.length).toBe(1);
    });
  });

  describe('Rendering error message', () => {
    let wrapper;
    const setupFakeStateForError = error => {
      return {
        messageReducer: {
          error,
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
          sendMessageRequest: jest.fn(),
          navigation: jest.fn(),
        },
      };
    };

    test('should render error message when error is true', () => {
      const fakeState = setupFakeStateForError(true);
      wrapper = setup(fakeState);
      const txtError = findByTestAttr(wrapper, 'text-error');
      expect(txtError.contains('There is an Error')).toBe(true);
    });

    test('should NOT render error message when error is false', () => {
      const fakeState = setupFakeStateForError(false);
      wrapper = setup(fakeState);
      const txtError = findByTestAttr(wrapper, 'text-error');
      expect(txtError.contains('There is not an Error')).toBe(true);
    });
  });

  describe('Props', () => {
    test('should not throw error with expected props', () => {
      checkProps(TestScreen, defaultProps);
    });
  });
});
