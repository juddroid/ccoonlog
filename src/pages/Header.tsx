import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import ReactToggle from '../components/toggle/ReactToggle';
import { TITLE } from '../const';
import { categoryIDState } from '../store/Recoil';
import { Header as S } from '../styles/styles';

const Header = () => {
  const setCategoryID = useSetRecoilState(categoryIDState);
  const handleClickTitleButton = () => setCategoryID(null);

  return (
    <S.Header>
      <Link to="/">
        <S.Title onClick={handleClickTitleButton}>{TITLE}</S.Title>
      </Link>
      <ReactToggle />
    </S.Header>
  );
};

export default Header;
