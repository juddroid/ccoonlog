import AsideMain from '../components/aside/AsideMain';
import Header from './Header';
import { Home as S } from '../styles/styles';
import { useState, useEffect } from 'react';
import firebase from '../firebase';
import Router from './Router';
import Loader from './Loader';

const Home = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const off = firebase.auth().onAuthStateChanged((user) => {
      // console.log(user);
      user ? setIsLoggedIn(true) : setIsLoggedIn(false);
      setInit(true);
    });

    return () => off();
  }, []);

  console.log('init', init, 'isloggedin', isLoggedIn);

  return (
    <S.Home>
      <Header />
      <AsideMain />
      {init ? <Router {...{ isLoggedIn }} /> : <Loader />}
    </S.Home>
  );
};

export default Home;
