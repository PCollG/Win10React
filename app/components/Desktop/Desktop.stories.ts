import type { Meta, StoryObj } from '@storybook/react'

import { Desktop } from './Desktop'

const meta = {
    title: 'Desktop/Desktop',
    component: Desktop,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Desktop>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}
