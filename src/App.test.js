import React from 'react';
import App from './App';
import {fireEvent, render} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

const store = configureMockStore([])({
  games: {
    "someGame": {
      "title": "Game",
      "avatar": "CallOfDuty.jpeg",
      "description": "Lorem ipsum dolor sit amet",
      "rating": 0,
      "uuid": "someGame"
    }
  }
});

describe('App', () => {
  test('should start and stop random rating on button click', () => {
    const { container } = render(<Provider store={store}>
      <App />
    </Provider>);
    const countValue = container.querySelector("#start-rating");
    fireEvent.click(countValue);
    expect(countValue.textContent).toBe('Stop Rating');
    fireEvent.click(countValue);
    expect(countValue.textContent).toBe('Start Rating');
  });
});
