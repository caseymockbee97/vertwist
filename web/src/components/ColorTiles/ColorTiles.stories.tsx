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

import {
  HOLD_BLACK,
  HOLD_BLUE,
  HOLD_GREEN,
  HOLD_WHITE,
} from 'src/design/Colors'

import ColorTiles from './ColorTiles'

const meta: Meta<typeof ColorTiles> = {
  component: ColorTiles,
}

export default meta

type Story = StoryObj<typeof ColorTiles>

export const Primary: Story = {
  args: {
    colors: [HOLD_BLACK, HOLD_BLUE, HOLD_GREEN, HOLD_WHITE],
  },
}
