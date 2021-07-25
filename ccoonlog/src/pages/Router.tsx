import { Route, Redirect } from 'react-router-dom';
import Main from './Main';
import Post from './Post';
import ArticleDetail from './Article/ArticleDetail';
import Edit from './Edit';
import LogIn from './LogIn';

const Router = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <>
      <Route exact path="/">
        <Main />
      </Route>

      <Route exact path="/login">
        <LogIn {...{ isLoggedIn }} />
      </Route>

      <Route exact path="/pages/post">
        {isLoggedIn ? <Post /> : <Redirect from="*" to="/login" />}
      </Route>

      <Route exact path="/pages/post/:title">
        <ArticleDetail />
      </Route>

      <Route exact path="/pages/post/edit/:id">
        {isLoggedIn ? <Edit /> : <Redirect from="*" to="/login" />}
      </Route>

      <Redirect from="*" to="/" />
    </>
  );
};

export default Router;
