import { useRecoilState } from 'recoil';
import CommentInput from '../../components/comment/CommentInput';
import { commentInputValueState } from '../../store/Recoil';
import { Comment as S } from '../../styles/styles';

const CommentDisplayBottomBox = () => {
  const [commentInputValue, setCommentInputValue] = useRecoilState(
    commentInputValueState
  );

  return (
    <S.CommentDisplayBottomBox>
      <CommentInput state={commentInputValue} setState={setCommentInputValue} />
    </S.CommentDisplayBottomBox>
  );
};

export default CommentDisplayBottomBox;
