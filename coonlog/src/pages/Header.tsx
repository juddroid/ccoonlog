import { Link } from 'react-router-dom';
import ReactToggle from '../components/toggle/ReactToggle';
import { TITLE } from '../const';
import { Header as S } from '../styles/styles';

const Header = () => {
  return (
    <S.Header>
      <S.Title>
        <Link to="/">{TITLE}</Link>
      </S.Title>
      <ReactToggle />
    </S.Header>
  );
};

export default Header;
