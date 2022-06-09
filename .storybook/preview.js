import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { StylesProvider, ThemeProvider as MUIThemeProvider } from '@mui/styles';
import GlobalStyles from '../src/styles/GlobalStyles';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';
import { createTheme } from '@mui/material';
import { lightTheme } from '../src/styles/theme';

const providerFn = ({ theme, children }) => {
  const muiTheme = createTheme(theme);
  return (
    <StylesProvider injectFirst>
      <StyledThemeProvider theme={muiTheme}>
        <MUIThemeProvider theme={muiTheme}>
          <GlobalStyles />
          {children}
        </MUIThemeProvider>
      </StyledThemeProvider>
    </StylesProvider>
  );
};

// addDecorator(withThemes(null, [lightTheme], { providerFn }));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
