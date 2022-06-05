import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalStyles from '../../../styles/GlobalStyles';
import { Flex } from './';

export default {
  title: 'Atomics/Layout',
  component: Flex,
  argTypes: {
    direction: { control: { type: 'radio' }, options: ['column', 'row'] },
    mainAlign: {
      options: ['start', 'center', 'end', 'space-between', 'space-around', 'flex-start', 'flex-end'],
      control: { type: 'radio' },
    },
    crossAlign: {
      options: ['start', 'center', 'end', 'space-between', 'space-around', 'flex-start', 'flex-end'],
      control: { type: 'radio' },
    },
    fullY: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    ),
  ],
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const FlexStory = Template.bind({});

FlexStory.args = {
  children: 'Flex',
  style: {
    border: '1px solid',
  },
};
