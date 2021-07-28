import GlobalStyles from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import light from '../styles/lightTheme';
import dark from '../styles/darkTheme';
import { Home } from '../pages';
import { App as S } from '../styles/styles';
import AsideSticky from '../components/aside/AsideSticky';
import { useRecoilValue } from 'recoil';
import { displayState } from '../store/Recoil';

function App() {
  const display = useRecoilValue(displayState);
  const theme = display ? dark : light;
  return (
    <ThemeProvider {...{ theme }}>
      <GlobalStyles />
      <S.App>
        <AsideSticky />
        <Home />
      </S.App>
    </ThemeProvider>
  );
}

export default App;
