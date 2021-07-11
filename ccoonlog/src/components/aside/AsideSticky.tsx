import { Link } from 'react-router-dom';
import { AsideSticky as S } from '../../styles/styles';
import { Button as CS } from '../../styles/CommonStyles';

const AsideSticky = () => {
  return (
    <S.AsideSticky>
      <S.AsideStickyBox>
        <Link to="/">
          <CS.AsideButton>Algorithm</CS.AsideButton>
        </Link>
        <Link to="/">
          <CS.AsideButton>Think</CS.AsideButton>
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
