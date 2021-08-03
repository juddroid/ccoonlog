import { Link } from 'react-router-dom';
import { AsideSmall as S } from '../../styles/styles';
import firebase from '../../firebase';
import { LOCAL_STORAGE as LOCAL, CATEGORY_LIST as CATEGORY } from '../../const';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryIDState, isLoggedInState } from '../../store/Recoil';
import { handleClickFilteringButton } from '../../utils/utils';

const AsideSmall = () => {
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
    <S.AsideSmall>
      <S.AsideSmallBox>
        <Link to="/">
          <S.AsideSmallButton
            id={`${null}`}
            onClick={(e) => handleClickFilteringButton(e, setCategoryID)}
          >
            Home
          </S.AsideSmallButton>
        </Link>
        <Link to="/">
          <S.AsideSmallButton
            id={`${CATEGORY.PORTFOLIO.id}`}
            onClick={(e) => handleClickFilteringButton(e, setCategoryID)}
          >
            Portfolio
          </S.AsideSmallButton>
        </Link>
        <Link to="/">
          <S.AsideSmallButton
            id={`${CATEGORY.PERSONAL_PROJECT.id}`}
            onClick={(e) => handleClickFilteringButton(e, setCategoryID)}
          >
            Project
          </S.AsideSmallButton>
        </Link>
        <Link to="/">
          <S.AsideSmallButton
            id={`${CATEGORY.THINKING.id}`}
            onClick={(e) => handleClickFilteringButton(e, setCategoryID)}
          >
            Thinking
          </S.AsideSmallButton>
        </Link>

        <Link to="/about">
          <S.AsideSmallButton>About</S.AsideSmallButton>
        </Link>
        {isLoggedIn ? (
          <Link to="/">
            <S.LogInButton onClick={handleClickLogOutButton}>
              LogOut
            </S.LogInButton>
          </Link>
        ) : (
          <Link to="/login">
            <S.LogInButton>LogIn</S.LogInButton>
          </Link>
        )}
      </S.AsideSmallBox>
    </S.AsideSmall>
  );
};

export default AsideSmall;
