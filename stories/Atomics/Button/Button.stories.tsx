import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalStyles from '../../../styles/GlobalStyles';
import { Button, DefaultButton } from './';

export default {
  title: 'Atomics/Button',
  component: Button,
  argTypes: {
    point: { control: 'boolean' },
    block: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonStory = Template.bind({});

ButtonStory.args = {
  children: 'Button',
};

const DefaultTemplate: ComponentStory<typeof DefaultButton> = (args) => <DefaultButton {...args} />;

export const Default = DefaultTemplate.bind({});

Default.args = {
  point: true,
  children: 'DefaultButton',
};
