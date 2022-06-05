import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalStyles from '../../../styles/GlobalStyles';
import Group from './Group';
import ButtonGroup from './ButtonGroup';

export default {
  title: 'Components/Group',
  component: Group,
  argTypes: {},
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    ),
  ],
} as ComponentMeta<typeof Group>;

const Template: ComponentStory<typeof Group> = (args) => <Group {...args} />;

export const GroupStory = Template.bind({});

GroupStory.args = {
  children: 'Group',
  style: {
    border: '1px solid',
  },
};

const ButtonGroupTemplate: ComponentStory<typeof ButtonGroup> = (args) => <ButtonGroup {...args} />;

export const Buttons = ButtonGroupTemplate.bind({});

Buttons.args = {
  buttonNameList: ['button1', 'button2', 'button3'],
};
