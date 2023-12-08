import type { Meta, StoryObj } from '@storybook/react'

import GameplayPage from './GameplayPage'

const meta: Meta<typeof GameplayPage> = {
  component: GameplayPage,
}

export default meta

type Story = StoryObj<typeof GameplayPage>

export const Primary: Story = {}
