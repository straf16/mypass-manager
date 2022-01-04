import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import './test/matchMedia.mock'
import App from './App';
import store from './store'

it('renders without crashing', () => {
  const div = document.createElement('div');

  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
  };
  
  global.localStorage = localStorageMock;

  ReactDOM.render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
