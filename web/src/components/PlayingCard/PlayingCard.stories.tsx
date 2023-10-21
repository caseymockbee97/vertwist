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

import PlayingCard from './PlayingCard'

const meta: Meta<typeof PlayingCard> = {
  component: PlayingCard,
}

export default meta

type Story = StoryObj<typeof PlayingCard>

export const Primary: Story = {}
