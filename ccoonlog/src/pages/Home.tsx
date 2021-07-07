import AsideMain from '../components/aside/AsideMain';
import Header from './Header';
import Main from './Main';
import Post from './Post';
import ArticleDetail from './Article/ArticleDetail';
import { Route } from 'react-router-dom';
import { Home as S } from '../styles/styles';

const Home = () => {
  return (
    <S.Home>
      <Header />
      <AsideMain />
      <Route exact path="/" component={Main} />
      <Route exact path="/pages/post" component={Post} />
      <Route exact path="/pages/post/:title" component={ArticleDetail} />
    </S.Home>
  );
};

export default Home;
