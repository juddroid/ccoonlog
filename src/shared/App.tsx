import GlobalStyles from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import light from '../styles/lightTheme';
import dark from '../styles/darkTheme';
import { Home } from '../pages';
import { App as S } from '../styles/styles';
import AsideSticky from '../components/aside/AsideSticky';
import { useRecoilState } from 'recoil';
import { displayState } from '../store/Recoil';
import { getLocalStorageData } from '../utils/utils';
import { LOCAL_STORAGE as LOCAL } from '../const';
import { useEffect, useState } from 'react';

function App() {
  const [display, setDisplay] = useRecoilState(displayState);
  const localDisplayData = getLocalStorageData(LOCAL.DISPLAY);
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    const localDisplay =
      localDisplayData && localDisplayData === 'dark' ? dark : light;
    const currentDisplay = localDisplayData ? localDisplay : display;
    currentDisplay && setDisplay(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    display ? setTheme(dark) : setTheme(light);
  }, [display]);

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
