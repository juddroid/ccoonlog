import type { AppProps } from 'next/app';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MUIThemeProvider } from '@mui/styles';
import useDarkMode from '../src/hooks/useDarkMode';
import GlobalStyles from '../src/styles/GlobalStyles';
import { StylesProvider } from '@mui/styles';
import lightTheme from '../src/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <StylesProvider injectFirst>
        <StyledThemeProvider theme={isDarkMode ? lightTheme : lightTheme}>
          <MUIThemeProvider theme={isDarkMode ? lightTheme : lightTheme}>
            <GlobalStyles />
            <Component {...pageProps} />
          </MUIThemeProvider>
        </StyledThemeProvider>
      </StylesProvider>
    </>
  );
}

export default MyApp;
