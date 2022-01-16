import { ComponentStory, ComponentMeta } from '@storybook/react';
import DefaultButton from './DefaultButton';

export default {
  title: 'Atomics/Button',
  component: DefaultButton,
  argTypes: {},
} as ComponentMeta<typeof DefaultButton>;

const ButtonTemplate: ComponentStory<typeof DefaultButton> = (args) => <DefaultButton {...args} />;

export const Default = ButtonTemplate.bind({});
Default.args = {
  children: 'Button',
};
