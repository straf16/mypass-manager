import React from 'react'

import PasswordList from './index'

import { render } from '@testing-library/react'

describe('Testing: Password List component', () => {
  test('render without crash', () => {
    const { debug } = render(
      <PasswordList />
    )

    // debug()
  })
})