import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalStyles from '../../../src/styles/GlobalStyles';
import { MUISwitch } from './';
import lightTheme from '../../../src/styles/theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { StylesProvider, ThemeProvider as MUIThemeProvider } from '@mui/styles';

export default {
  title: 'Atomics/Input',
  component: MUISwitch,
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <StylesProvider injectFirst>
          <StyledThemeProvider theme={lightTheme}>
            <MUIThemeProvider theme={lightTheme}>
              <GlobalStyles />
              <Story />
            </MUIThemeProvider>
          </StyledThemeProvider>
        </StylesProvider>
      );
    },
  ],
} as ComponentMeta<typeof MUISwitch>;

const Template: ComponentStory<typeof MUISwitch> = (args) => <MUISwitch {...args} />;

export const MUISwitchStory = Template.bind({});

MUISwitchStory.args = {};
