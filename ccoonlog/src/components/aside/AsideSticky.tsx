import { Link } from 'react-router-dom';
import { AsideSticky as S } from '../../styles/styles';
import { Button as CS } from '../../styles/CommonStyles';
import firebase from '../../firebase';
import { LOCAL_STORAGE as LOCAL, CATEGORY_LIST as CATEGORY } from '../../const';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { asideStickyBoxState, categoryIDState } from '../../store/Recoil';
import { handleClickFilteringButton } from '../../utils/utils';

const AsideSticky = () => {
  const setCategoryID = useSetRecoilState(categoryIDState);
  const [asideStickyBox, setAsideStickyBox] =
    useRecoilState(asideStickyBoxState);

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

  const handleTransitionEnd = () => {
    console.log('call');
    setAsideStickyBox(false);
  };

  console.log(asideStickyBox);
  return (
    <S.AsideSticky
      display={asideStickyBox}
      onTransitionEnd={handleTransitionEnd}
    >
      <S.AsideStickyBox>
        <Link to="/">
          <CS.AsideButton
            id={`${null}`}
            onClick={(e) => handleClickFilteringButton(e, setCategoryID)}
          >
            Return
          </CS.AsideButton>
        </Link>
        <Link to="/">
          <CS.AsideButton
            id={`${CATEGORY.PERSONAL_PROJECT.id}`}
            onClick={(e) => handleClickFilteringButton(e, setCategoryID)}
          >
            Project
          </CS.AsideButton>
        </Link>
        <Link to="/">
          <CS.AsideButton
            id={`${CATEGORY.ALGORITHM.id}`}
            onClick={(e) => handleClickFilteringButton(e, setCategoryID)}
          >
            Algorithm
          </CS.AsideButton>
        </Link>
        <Link to="/">
          <CS.AsideButton
            id={`${CATEGORY.THINKING.id}`}
            onClick={(e) => handleClickFilteringButton(e, setCategoryID)}
          >
            Thinking
          </CS.AsideButton>
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
