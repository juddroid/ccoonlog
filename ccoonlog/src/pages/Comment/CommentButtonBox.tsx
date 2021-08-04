import CommentCancelButton from '../../components/comment/CommentCancelButton';
import CommentPawButton from '../../components/comment/CommentPawButton';
import { Comment as S } from '../../styles/styles';

const CommentButtonBox = () => {
  return (
    <S.CommentButtonBox>
      <CommentCancelButton />
      <CommentPawButton />
    </S.CommentButtonBox>
  );
};

export default CommentButtonBox;
