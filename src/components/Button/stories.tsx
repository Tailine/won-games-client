import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from '.'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Basic: Story<ButtonProps> = (args) => <Button {...args} />

Basic.args = {
  children: 'Buy now'
}

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />

WithIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}

export const AsLink: Story<ButtonProps> = (args) => <Button {...args} />

AsLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link'
}
