import type { Meta, StoryObj } from '@storybook/react'

import FaqPage from './FaqPage'

const meta: Meta<typeof FaqPage> = {
  component: FaqPage,
}

export default meta

type Story = StoryObj<typeof FaqPage>

export const Primary: Story = {}
