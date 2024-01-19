import type { Meta, StoryObj } from '@storybook/react'

import { Taskbar } from './Taskbar'

const meta = {
    title: 'Taskbar/Taskbar',
    component: Taskbar,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Taskbar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}
