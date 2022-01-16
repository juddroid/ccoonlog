import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultIcon } from './index';

export default {
  title: 'Atomics/Icon',
  component: DefaultIcon,
  argTypes: {},
} as ComponentMeta<typeof DefaultIcon>;

const IconTemplate: ComponentStory<typeof DefaultIcon> = (args) => <DefaultIcon {...args} />;

export const Default = IconTemplate.bind({});
Default.args = {};
