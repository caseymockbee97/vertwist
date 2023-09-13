import { render } from '@redwoodjs/testing/web'

import ColorTile from './ColorTile'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ColorTile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ColorTile />)
    }).not.toThrow()
  })
})
