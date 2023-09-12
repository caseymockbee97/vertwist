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

import ColorSample from './ColorSample'
import { HOLD_BLUE,  HOLD_PINK } from 'src/design/Colors'

const meta: Meta<typeof ColorSample> = {
  component: ColorSample,
}

export default meta

type Story = StoryObj<typeof ColorSample>

export const Primary: Story = {
  args: {
    color: HOLD_BLUE,

  }
}
export const Secondary: Story = {
  args: {
    color: HOLD_PINK,

  }
}
