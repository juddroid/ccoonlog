import React from 'react';
import AsideMain from '../components/aside/AsideMain';
import { Home as S } from '../styles/styles';
import Header from './Header';

const Home = () => {
  return (
    <S.Home>
      <Header />
      <AsideMain />
    </S.Home>
  );
};

export default Home;
