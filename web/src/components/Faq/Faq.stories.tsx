// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Faq from './Faq'

const meta: Meta<typeof Faq> = {
  component: Faq,
}

export default meta

type Story = StoryObj<typeof Faq>

export const Primary: Story = {}
