import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { Route } from 'react-router-dom';
import { Home } from '../pages';
import { App as S } from '../styles/styles';
import AsideSticky from '../components/aside/AsideSticky';

function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <GlobalStyles />
      <S.App>
        <AsideSticky />
        <Route path="/" component={Home} />
      </S.App>
    </ThemeProvider>
  );
}

export default App;
