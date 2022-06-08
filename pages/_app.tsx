import type { AppProps } from 'next/app';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MUIThemeProvider } from '@mui/styles';
import useDarkMode from '../src/hooks/useDarkMode';
import GlobalStyles from '../src/styles/GlobalStyles';
import { lightTheme } from '../src/styles/theme';
import { StylesProvider } from '@mui/styles';

function MyApp({ Component, pageProps }: AppProps) {
  const { isDarkMode } = useDarkMode();
  console.log(isDarkMode);

  return (
    <>
      <StylesProvider injectFirst>
        <StyledThemeProvider theme={isDarkMode ? lightTheme : {}}>
          <MUIThemeProvider theme={isDarkMode ? lightTheme : {}}>
            <GlobalStyles />
            <Component {...pageProps} />
          </MUIThemeProvider>
        </StyledThemeProvider>
      </StylesProvider>
    </>
  );
}

export default MyApp;
