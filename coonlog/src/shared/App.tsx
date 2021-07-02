import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { Route } from 'react-router-dom';
import { Home } from '../pages';
import { App as S } from '../styles/styles';

function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <GlobalStyles />
      <S.App>
        <Route path="/" component={Home} />
      </S.App>
    </ThemeProvider>
  );
}

export default App;
