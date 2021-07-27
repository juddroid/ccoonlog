import AsideMain from '../components/aside/AsideMain';
import Header from './Header';
import { Home as S } from '../styles/styles';
import { useState, useEffect } from 'react';
import firebase from '../firebase';
import Router from './Router';
import Loader from './Loader';
import { LOCAL_STORAGE as LOCAL } from '../const';

const Home = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getToken = () => {
      firebase
        .auth()
        .getRedirectResult()
        .then((res) => {
          if (res.credential) {
            const credential = res.credential as firebase.auth.OAuthCredential;
            const token = credential.accessToken;
            const user = res.user;

            localStorage.setItem(LOCAL.TOKEN, JSON.stringify(token));
            localStorage.setItem(LOCAL.USER, JSON.stringify(user));

            console.log('로그인되었습니다.');
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = error.credential;
          console.table({
            errorCode: errorCode,
            errorMessage: errorMessage,
            email: email,
            credential: credential,
          });
        });
    };

    const off = firebase.auth().onAuthStateChanged((user) => {
      // console.log(user);
      user ? setIsLoggedIn(true) : setIsLoggedIn(false);
      setInit(true);
    });

    getToken();
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
