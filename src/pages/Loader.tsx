import { CircularProgress } from '@material-ui/core';
import { Loader as S } from '../styles/styles';
import { LOADING_MESSAGE } from '../const';
import light from '../styles/lightTheme';

const Loader = () => {
  return (
    <S.Loader>
      <S.LoaderContent>{LOADING_MESSAGE}</S.LoaderContent>
      <CircularProgress
        style={{ color: `${light.colors.hotPink}` }}
        size={100}
      />
    </S.Loader>
  );
};

export default Loader;
