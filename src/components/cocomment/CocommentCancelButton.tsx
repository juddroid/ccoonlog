import { useSetRecoilState } from 'recoil';
import { cocommentInputValueState } from '../../store/Recoil';
import { Cocomment as S } from '../../styles/styles';

const CocommentCancelButton = () => {
  const setCocommentInputValue = useSetRecoilState(cocommentInputValueState);

  const handleClickCancelButton = () => setCocommentInputValue('');

  return (
    <S.CocommentButton onClick={handleClickCancelButton}>
      Cancel
    </S.CocommentButton>
  );
};

export default CocommentCancelButton;
