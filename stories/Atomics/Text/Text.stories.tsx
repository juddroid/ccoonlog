import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from './Text';

export default {
  title: 'Atomics/Text',
  component: Text,
  argTypes: {
    bold: {
      options: [300, 400, 500, 600, 700, 800, 900],
      control: { type: 'radio' },
    },
    color: {
      control: 'color',
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextStory = Template.bind({});

TextStory.args = {
  h1: true,
  children: 'Text',
};
