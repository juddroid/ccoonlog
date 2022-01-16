import { Link } from 'react-router-dom';
import { AsideMain as S } from '../../styles/styles';
import { ASIDE } from '../../const';
import AsideSmall from './AsideSmall';

const AsideMain = () => {
  return (
    <S.AsideMain>
      <S.AsideInfoWrapper>
        <Link to="/pages/post">
          <S.ProfileImageBox>
            <S.ProfileImage src={ASIDE.PROFILE} alt="aside" />
          </S.ProfileImageBox>
        </Link>
        <p>
          Personal blog by <a href={ASIDE.INSTAGRAM}>Raccoon</a>. <br />I
          explain with words and code.
        </p>
      </S.AsideInfoWrapper>
      <S.AsideSmallWrapper>
        <AsideSmall />
      </S.AsideSmallWrapper>
    </S.AsideMain>
  );
};

export default AsideMain;
