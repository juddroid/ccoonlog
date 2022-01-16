import { useRecoilState } from 'recoil';
import { cocommentInputValueState } from '../../store/Recoil';
import { Cocomment as S } from '../../styles/styles';
import CommentInput from '../comment/CommentInput';

const CocommentInput = () => {
  const [cocommentInputValue, setCocommentInputValue] = useRecoilState(
    cocommentInputValueState
  );

  return (
    <S.CocommentInput>
      <CommentInput
        state={cocommentInputValue}
        setState={setCocommentInputValue}
      />
    </S.CocommentInput>
  );
};

export default CocommentInput;
