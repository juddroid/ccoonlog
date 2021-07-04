import { Link } from 'react-router-dom';
import { AsideMain as S } from '../../styles/styles';
import { ASIDE } from '../../const';
import firebase from '../../firebase';

const AsideMain = () => {
  const handleClick = async () => {
    // const auth = firebase.auth();
    // await auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  };

  return (
    <S.AsideMain>
      <Link to="/pages/post" onClick={handleClick}>
        <S.ProfileImageBox>
          <S.ProfileImage src={ASIDE.PROFILE} alt="aside" />
        </S.ProfileImageBox>
      </Link>
      <p>
        Personal blog by <a href={ASIDE.INSTAGRAM}>Raccoon</a>. <br />I explain
        with words and code.
      </p>
    </S.AsideMain>
  );
};

export default AsideMain;
