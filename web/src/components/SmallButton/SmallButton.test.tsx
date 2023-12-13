import { render } from '@redwoodjs/testing/web'

import SmallButton from './SmallButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SmallButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SmallButton children={'howdy'} />)
    }).not.toThrow()
  })
})
