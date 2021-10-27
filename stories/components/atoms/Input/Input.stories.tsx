// import { Meta } from '@storybook/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Input from '../../../../components/atoms/Input'

export default {
  title: 'Components/Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>

// const Template = (args: InputProps) => <Input {...args} />
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />
export const Default = Template.bind({})

Default.args = {
  label: 'Nama Anda',
  type: 'text',
  name: 'nama',
}
