import { Link } from 'react-router-dom';
import { AsideSticky as S } from '../../styles/styles';
import { Button as CS } from '../../styles/CommonStyles';
import firebase from '../../firebase';
import { LOCAL_STORAGE as LOCAL, CATEGORY_LIST as CATEGORY } from '../../const';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryIDState, isLoggedInState } from '../../store/Recoil';
import { handleClickFilteringButton } from '../../utils/utils';
import AsideButton from '../common/Organisms/AsideButton';
import React, { MouseEventHandler } from 'react';

const AsideSticky = () => {
  const setCategoryID = useSetRecoilState(categoryIDState);
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const userLogOut = () =>
    firebase
      .auth()
      .signOut()
      .then(() => console.log('로그아웃되었습니다.'))
      .catch((error) => console.error(error));

  const handleClickLogOutButton = () => {
    userLogOut();
    localStorage.removeItem(LOCAL.TOKEN);
    localStorage.removeItem(LOCAL.USER);
  };

  return (
    <S.AsideSticky>
      <S.AsideStickyBox>
        <Link to="/">
          <AsideButton
            name={'Home'}
            id={`${null}`}
            onClick={(e: React.MouseEvent) => handleClickFilteringButton(e, setCategoryID)}
          />
        </Link>
        <Link to="/">
          <AsideButton
            name={'Portfolio'}
            id={`${CATEGORY.PORTFOLIO.id}`}
            onClick={(e: React.MouseEvent) => handleClickFilteringButton(e, setCategoryID)}
          />
        </Link>
        <Link to="/">
          <AsideButton
            name={'Project'}
            id={`${CATEGORY.PERSONAL_PROJECT.id}`}
            onClick={(e: React.MouseEvent) => handleClickFilteringButton(e, setCategoryID)}
          />
        </Link>
        <Link to="/">
          <AsideButton
            name={'Thinking'}
            id={`${CATEGORY.THINKING.id}`}
            onClick={(e: React.MouseEvent) => handleClickFilteringButton(e, setCategoryID)}
          />
        </Link>
        <Link to="/about">
          <AsideButton name={'About'} />
        </Link>
        {isLoggedIn ? (
          <Link to="/">
            <AsideButton name={'LogOut'} onClick={handleClickLogOutButton} point />
          </Link>
        ) : (
          <Link to="/login">
            <AsideButton name={'LogIn'} point />
          </Link>
        )}
      </S.AsideStickyBox>
    </S.AsideSticky>
  );
};

export default AsideSticky;
