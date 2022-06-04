import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultButton } from '../Button';
import { DefaultFlex } from './index';

export default {
  title: 'Atomics/Flex',
  component: DefaultFlex,
  argTypes: {},
} as ComponentMeta<typeof DefaultFlex>;

const FlexTemplate: ComponentStory<typeof DefaultFlex> = (args) => <DefaultFlex {...args} />;

export const Default = FlexTemplate.bind({});
Default.args = {
  children: [<DefaultButton key={0}>Button1</DefaultButton>, <DefaultButton key={1}>Button2</DefaultButton>],
  flexDirection: 'column',
};
