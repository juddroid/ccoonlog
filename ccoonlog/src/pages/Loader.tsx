import { CircularProgress } from '@material-ui/core';
import { Loader as S } from '../styles/styles';
import { LOADING_MESSAGE } from '../const';
import theme from '../styles/theme';

const Loader = () => {
  return (
    <S.Loader>
      <S.LoaderContent>{LOADING_MESSAGE}</S.LoaderContent>
      <CircularProgress
        style={{ color: `${theme.colors.hotPink}` }}
        size={100}
      />
    </S.Loader>
  );
};

export default Loader;
