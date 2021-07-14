import { Link } from 'react-router-dom';
import { AsideSticky as S } from '../../styles/styles';
import { Button as CS } from '../../styles/CommonStyles';
import firebase from 'firebase';

const AsideSticky = () => {
  const userLogOut = () => firebase.auth().signOut();

  const handleClickLogOutButton = () => userLogOut();

  return (
    <S.AsideSticky>
      <S.AsideStickyBox>
        <Link to="/login">
          <CS.AsideButton>LogIn</CS.AsideButton>
        </Link>
        <Link to="/">
          <CS.AsideButton onClick={handleClickLogOutButton}>
            LogOut
          </CS.AsideButton>
        </Link>
        <Link to="/">
          <CS.AsideButton>Project</CS.AsideButton>
        </Link>
        <Link to="/">
          <CS.AsideButton>About</CS.AsideButton>
        </Link>
      </S.AsideStickyBox>
    </S.AsideSticky>
  );
};

export default AsideSticky;
