import { Story, Meta } from '@storybook/react'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller',
    color: 'primary',
    size: 'normal'
  },
  argTypes: {
    children: {
      type: 'string'
    },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    },
    size: {
      options: ['normal', 'small'],
      control: { type: 'radio' }
    }
  }
} as Meta

export const Basic: Story<RibbonProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args} />
  </div>
)
