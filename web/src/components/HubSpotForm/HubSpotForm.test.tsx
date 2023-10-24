import { render } from '@redwoodjs/testing/web'

import HubSpotForm from './HubSpotForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HubSpotForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HubSpotForm />)
    }).not.toThrow()
  })
})
