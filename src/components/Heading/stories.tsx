import { Story, Meta } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    },
    lineColor: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  }
} as Meta

export const Basic: Story<HeadingProps> = (args) => (
  <Heading {...args} color="black" />
)

Basic.args = {
  children: 'Most Populars',
  color: 'black'
}
