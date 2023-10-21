import { render } from '@redwoodjs/testing/web'

import PlayingCard from './PlayingCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlayingCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlayingCard />)
    }).not.toThrow()
  })
})
