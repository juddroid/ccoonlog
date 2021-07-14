import AsideMain from '../components/aside/AsideMain';
import Header from './Header';
import Main from './Main';
import Post from './Post';
import LogIn from './LogIn';
import ArticleDetail from './Article/ArticleDetail';
import { Route } from 'react-router-dom';
import { Home as S } from '../styles/styles';
import Edit from './Edit';
import { useState, useEffect } from 'react';
import firebase from 'firebase';
import Router from './Router';
import Loader from './Loader';

const Home = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      user ? setIsLoggedIn(true) : setIsLoggedIn(false);
      setInit(true);
    });
  }, []);

  return (
    <S.Home>
      <Header />
      <AsideMain />
      {init ? <Router {...{ isLoggedIn }} /> : <Loader />}
      <Route exact path="/login" component={LogIn} />
    </S.Home>
  );
};

export default Home;
