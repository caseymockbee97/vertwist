import { render } from '@redwoodjs/testing/web'

import NewsletterSignUpPage from './NewsletterSignUpPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewsletterSignUpPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewsletterSignUpPage />)
    }).not.toThrow()
  })
})
