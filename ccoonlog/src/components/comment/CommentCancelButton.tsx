import { useSetRecoilState } from 'recoil';
import { commentInputValueState } from '../../store/Recoil';
import { Comment as S } from '../../styles/styles';

const CommentCancelButton = () => {
  const setCommentInputValue = useSetRecoilState(commentInputValueState);

  const handleClickCancelButton = () => setCommentInputValue('');

  return (
    <S.CommentButton onClick={handleClickCancelButton}>Cancel</S.CommentButton>
  );
};

export default CommentCancelButton;
