import { ComponentStory, ComponentMeta } from '@storybook/react';
import DefaultText from './DefaultText';

export default {
  title: 'Atomics/Text',
  component: DefaultText,
  argTypes: {},
} as ComponentMeta<typeof DefaultText>;

const TextTemplate: ComponentStory<typeof DefaultText> = (args) => <DefaultText {...args} />;

export const Default = TextTemplate.bind({});
Default.args = {
  children: 'text',
};
