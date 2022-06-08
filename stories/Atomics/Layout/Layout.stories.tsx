import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalStyles from '../../../src/styles/GlobalStyles';
import { Flex, MUIStack } from './';
import { DefaultMUIButton } from '../Button';

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

const StackTemplate: ComponentStory<typeof MUIStack> = (args) => <MUIStack {...args} />;

export const StackStory = StackTemplate.bind({});

StackStory.args = {
  spacing: 1,
  children: (
    <>
      <DefaultMUIButton variant={'outlined'}>DefaultMUIButton</DefaultMUIButton>
      <DefaultMUIButton variant={'outlined'}>DefaultMUIButton</DefaultMUIButton>
      <DefaultMUIButton variant={'outlined'}>DefaultMUIButton</DefaultMUIButton>
    </>
  ),
};
