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

import ColorTile from './ColorTile'
import { HOLD_BLUE } from 'src/design/Colors'

const meta: Meta<typeof ColorTile> = {
  component: ColorTile,
}

export default meta

type Story = StoryObj<typeof ColorTile>

export const Primary: Story = {
  args: {
    color: HOLD_BLUE,
  }
}
