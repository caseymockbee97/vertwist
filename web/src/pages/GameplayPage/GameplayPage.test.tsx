import { render } from '@redwoodjs/testing/web'

import GameplayPage from './GameplayPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GameplayPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GameplayPage />)
    }).not.toThrow()
  })
})
