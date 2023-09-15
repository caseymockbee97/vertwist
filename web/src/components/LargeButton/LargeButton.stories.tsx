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

import LargeButton from './LargeButton'

const meta: Meta<typeof LargeButton> = {
  component: LargeButton,
}

export default meta

type Story = StoryObj<typeof LargeButton>

export const Primary: Story = {
  args: {
    text: 'Howdy',
    variant: 'primary',
  },
}
export const PrimaryDisabled: Story = {
  args: {
    text: 'Howdy',
    variant: 'primary',
    disabled: true
  },
}
export const Secondary: Story = {
  args: {
    text: 'Howdy',
    variant: 'secondary',
  },
}
export const SecondaryDisabled: Story = {
  args: {
    text: 'Howdy',
    variant: 'secondary',
    disabled: true
  },
}
