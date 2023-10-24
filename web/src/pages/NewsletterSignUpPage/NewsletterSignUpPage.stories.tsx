import type { Meta, StoryObj } from '@storybook/react'

import NewsletterSignUpPage from './NewsletterSignUpPage'

const meta: Meta<typeof NewsletterSignUpPage> = {
  component: NewsletterSignUpPage,
}

export default meta

type Story = StoryObj<typeof NewsletterSignUpPage>

export const Primary: Story = {}
