import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalStyles from '../../../styles/GlobalStyles';
import Title from './Title';

export default {
  title: 'Components/Text',
  component: Title,
  argTypes: {},
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    ),
  ],
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const TitleStory = Template.bind({});

TitleStory.args = {
  children: 'Title',
};
