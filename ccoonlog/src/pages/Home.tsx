import AsideMain from '../components/aside/AsideMain';
import Header from './Header';
import { Home as S } from '../styles/styles';
import { useState, useEffect } from 'react';
import firebase from '../firebase';
import Router from './Router';
import Loader from './Loader';
import { LOCAL_STORAGE as LOCAL } from '../const';
import { useRecoilState } from 'recoil';
import { isLoggedInState } from '../store/Recoil';

const Home = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  useEffect(() => {
    const checkRedirectResult = () => {
      firebase
        .auth()
        .getRedirectResult()
        .then((res) => {
          res.credential && console.log('로그인 성공');
        })
        .catch((error) => {
          const { code, message, email, credential } = error;
          console.table({
            code: code,
            message: message,
            email: email,
            credential: credential,
          });
        });
    };

    const off = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        localStorage.setItem(LOCAL.USER, JSON.stringify(user));
        console.log('로그인되었습니다.');
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });

    checkRedirectResult();
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
