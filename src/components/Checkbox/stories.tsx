import { Story, Meta } from '@storybook/react'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        {...args}
        name="category"
        label="Action"
        labelFor="action"
        isChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        {...args}
        name="category"
        label="Adventure"
        labelFor="adventure"
        isChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        {...args}
        name="category"
        label="Strategy"
        labelFor="strategy"
        isChecked
        {...args}
      />
    </div>
  </>
)
