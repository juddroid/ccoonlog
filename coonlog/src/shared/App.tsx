import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { Route } from 'react-router-dom';
import { Home } from '../pages';

function App() {
  return (
    <>
      <ThemeProvider {...{ theme }}>
        <GlobalStyles />
        <Route path="/" component={Home} />
      </ThemeProvider>
    </>
  );
}

export default App;
