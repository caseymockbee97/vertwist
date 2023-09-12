import { render } from '@redwoodjs/testing/web'

import ColorSample from './ColorSample'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ColorSample', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ColorSample color="#0048AB" />)
    }).not.toThrow()
  })
})
