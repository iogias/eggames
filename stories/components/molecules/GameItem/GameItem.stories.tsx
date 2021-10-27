// import { Meta } from '@storybook/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameItem from '../../../../components/molecules/GameItem'

export default {
  title: 'Components/Molecules/GameItem',
  component: GameItem,
} as ComponentMeta<typeof GameItem>

// const Template = (args: InputProps) => <Input {...args} />
const Template: ComponentStory<typeof GameItem> = (args) => (
  <GameItem {...args} />
)
export const Default = Template.bind({})

Default.args = {
  title: 'Game Title',
  platform: 'Mobile',
  thumbnail: '/img/Thumbnail-1.png',
}
