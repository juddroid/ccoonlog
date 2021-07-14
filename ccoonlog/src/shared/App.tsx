import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { Route } from 'react-router-dom';
import { Home, LogIn } from '../pages';
import { App as S } from '../styles/styles';
import AsideSticky from '../components/aside/AsideSticky';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider {...{ theme }}>
        <GlobalStyles />
        <S.App>
          <AsideSticky />
          <S.HomeContainer>
            <Route path="/" component={Home} />
            <Route path="/login" component={LogIn} />
          </S.HomeContainer>
        </S.App>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
