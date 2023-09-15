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

import SmallButton from './SmallButton'

const meta: Meta<typeof SmallButton> = {
  component: SmallButton,
}

export default meta

type Story = StoryObj<typeof SmallButton>

export const Primary: Story = {
  args: {
    children: 'Howdy',
    variant: 'primary',
  },
}
export const PrimaryDisabled: Story = {
  args: {
    children: 'Howdy',
    variant: 'primary',
    disabled: true,
  },
}
export const Secondary: Story = {
  args: {
    children: 'Howdy',
    variant: 'secondary',
  },
}
export const SecondaryDisabled: Story = {
  args: {
    children: 'Howdy',
    variant: 'secondary',
    disabled: true,
  },
}
