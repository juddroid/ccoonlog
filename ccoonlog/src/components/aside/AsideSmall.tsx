import { Link } from 'react-router-dom';
import { AsideSmall as S } from '../../styles/styles';
import firebase from '../../firebase';
import { LOCAL_STORAGE as LOCAL, CATEGORY_LIST as CATEGORY } from '../../const';
import { useSetRecoilState } from 'recoil';
import { categoryIDState } from '../../store/Recoil';
import { handleClickFilteringButton } from '../../utils/utils';

const AsideSmall = () => {
  const setCategoryID = useSetRecoilState(categoryIDState);

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
        <S.AsideSmallFilterBox>
          <Link to="/">
            <S.AsideSmallButton
              id={`${null}`}
              onClick={(e) => handleClickFilteringButton(e, setCategoryID)}
            >
              Return
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
              id={`${CATEGORY.ALGORITHM.id}`}
              onClick={(e) => handleClickFilteringButton(e, setCategoryID)}
            >
              Algorithm
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
        </S.AsideSmallFilterBox>
        <S.AsideSmallLogInBox>
          <Link to="/login">
            <S.LogInButton>LogIn</S.LogInButton>
          </Link>
          <Link to="/">
            <S.LogInButton onClick={handleClickLogOutButton}>
              LogOut
            </S.LogInButton>
          </Link>
        </S.AsideSmallLogInBox>
      </S.AsideSmallBox>
    </S.AsideSmall>
  );
};

export default AsideSmall;
