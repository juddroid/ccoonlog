import { Link } from 'react-router-dom';
import { AsideSticky as S } from '../../styles/styles';
import { Button as CS } from '../../styles/CommonStyles';
import firebase from '../../firebase';
import { LOCAL_STORAGE as LOCAL } from '../../const';

const AsideSticky = () => {
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
          <CS.AsideButton>Return</CS.AsideButton>
        </Link>
        <Link to="/">
          <CS.AsideButton>Project</CS.AsideButton>
        </Link>
        <Link to="/">
          <CS.AsideButton>Algorithm</CS.AsideButton>
        </Link>
        <Link to="/">
          <CS.AsideButton>Thinking</CS.AsideButton>
        </Link>
        <Link to="/about">
          <CS.AsideButton>About</CS.AsideButton>
        </Link>

        <Link to="/login">
          <S.LogInButton>LogIn</S.LogInButton>
        </Link>
        <Link to="/">
          <S.LogInButton onClick={handleClickLogOutButton}>
            LogOut
          </S.LogInButton>
        </Link>
      </S.AsideStickyBox>
    </S.AsideSticky>
  );
};

export default AsideSticky;
