import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Navbar from './index'

describe('Testing: Navbar component', () => {
  test('render without crash', () => {
    const { queryByTestId } = render(
      <Navbar />
    )

    expect(queryByTestId('title')).toBeInTheDocument()
  })
})