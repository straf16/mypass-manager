import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'

import Navbar from './index'
import store from '../../../../store'

describe('Testing: Navbar component', () => {
  test('render without crash', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    )

    expect(queryByTestId('title')).toBeInTheDocument()
  })
})