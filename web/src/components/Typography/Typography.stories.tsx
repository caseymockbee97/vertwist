// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Typography from './Typography'

const meta: Meta<typeof Typography> = {
  component: Typography,
}

export default meta

type Story = StoryObj<typeof Typography>

export const Primary: Story = {}
