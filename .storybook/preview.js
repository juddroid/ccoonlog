import React from 'react';
import GlobalStyles from '../src/styles/GlobalStyles';
import lightTheme from '../src/styles/theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { StylesProvider, ThemeProvider as MUIThemeProvider } from '@mui/styles';
import { CssBaseline } from '@mui/material';

export const decorators = [
  (Story) => (
    <StylesProvider injectFirst>
      <MUIThemeProvider theme={lightTheme}>
        <StyledThemeProvider theme={lightTheme}>
          <GlobalStyles />
          <CssBaseline />
          <Story />
        </StyledThemeProvider>
      </MUIThemeProvider>
    </StylesProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
