import { render } from '@redwoodjs/testing/web'

import ColorTiles from './ColorTiles'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ColorTiles', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ColorTiles colors={[]} />)
    }).not.toThrow()
  })
})
