import { render } from '@redwoodjs/testing/web'

import DefaultInput from './DefaultInput'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DefaultInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DefaultInput />)
    }).not.toThrow()
  })
})
