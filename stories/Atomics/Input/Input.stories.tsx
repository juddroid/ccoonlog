import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DarkModeMUISwitch, MUISwitch } from './';

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

const DarkModeTemplate: ComponentStory<typeof DarkModeMUISwitch> = (args) => {
  return <DarkModeMUISwitch {...args} />;
};

export const DarkModeMUISwitchStory = DarkModeTemplate.bind({});

DarkModeMUISwitchStory.args = {};
