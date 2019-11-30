import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Main from './index';
import store from '../../store'

describe('Testing: Main component', () => {
  test('render without crash', () => {
    const { debug, queryByTestId } = render(
      <Provider store={store}>
        <Router>
          <Main />
        </Router>
      </Provider>
    )

    expect(queryByTestId('main-container')).toBeInTheDocument()
    fireEvent.click(queryByTestId('link-to-my-password'))
    expect(queryByTestId('password-list-section')).toBeInTheDocument()
    fireEvent.click(queryByTestId('link-to-form-add'))
    expect(queryByTestId('form-add-section')).toBeInTheDocument()
    
    debug()
  })
})