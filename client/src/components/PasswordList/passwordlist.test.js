import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect'

import PasswordList from './index'
import store from '../../store'

describe('Testing: Password List component', () => {
  test('render without crash', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <PasswordList />
      </Provider>
    )

    expect(queryByTestId('password-list-section')).toBeInTheDocument()
  })
})