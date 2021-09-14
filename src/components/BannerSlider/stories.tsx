import { Story, Meta } from '@storybook/react'
import BannerSlider from '.'

export default {
  title: 'BannerSlider',
  component: BannerSlider
} as Meta

export const Basic: Story = (args) => <BannerSlider {...args} />
