import AsideMain from '../components/aside/AsideMain';
import Header from './Header';
import Main from './Main';
import { Route } from 'react-router-dom';
import { Home as S } from '../styles/styles';

const Home = () => {
  return (
    <S.Home>
      <Header />
      <AsideMain />
      <Route exact path="/" component={Main} />
    </S.Home>
  );
};

export default Home;
