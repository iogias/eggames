// import { Meta } from '@storybook/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import StepItem from '../../../../components/molecules/StepItem'

export default {
  title: 'Components/Molecules/StepItem',
  component: StepItem,
} as ComponentMeta<typeof StepItem>

// const Template = (args: InputProps) => <Input {...args} />
const Template: ComponentStory<typeof StepItem> = (args) => (
  <StepItem {...args} />
)
export const Default = Template.bind({})

Default.args = {
  icon: 'step-1',
  title: '1. Step',
  desc1: 'Desc1',
  desc2: 'Desc2',
}
