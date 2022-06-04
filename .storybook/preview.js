import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/GlobalStyles';
import light from '../src/styles/lightTheme';

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </>
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
