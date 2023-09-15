import { render } from '@redwoodjs/testing/web'

import LargeButton from './LargeButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LargeButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LargeButton text={'button'} variant='primary' />)
    }).not.toThrow()
  })
})
