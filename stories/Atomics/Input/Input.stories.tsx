import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MUISwitch } from './';

export default {
  title: 'Atomics/Input',
  component: MUISwitch,
  argTypes: {},
} as ComponentMeta<typeof MUISwitch>;

const Template: ComponentStory<typeof MUISwitch> = (args) => {
  return <MUISwitch {...args} />;
};

export const MUISwitchStory = Template.bind({});

MUISwitchStory.args = {};
