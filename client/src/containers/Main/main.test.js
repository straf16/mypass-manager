import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import '../../test/matchMedia.mock'
import Main from './index';
import store from '../../store'

describe('Testing: Main container', () => {
  test('render without crash', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <Router>
          <Main />
        </Router>
      </Provider>
    )

    expect(queryByTestId('main-container')).toBeInTheDocument()
    expect(queryByTestId('sidebar')).toBeInTheDocument()
    expect(queryByTestId('navbar')).toBeInTheDocument()
    fireEvent.click(queryByTestId('link-to-my-password'))
    expect(queryByTestId('password-list-section')).toBeInTheDocument()
    fireEvent.click(queryByTestId('link-to-form-add'))
    expect(queryByTestId('form-add-section')).toBeInTheDocument()

  })
})