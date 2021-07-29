import { Comment as S } from '../../styles/styles';
import CommentDeleteButton from './CommentDeleteButton';
import CommentDisplay from './CommentDisplay';
import CommentEditButton from './CommentEditButton';
import CommentInput from './CommentInput';
import CommentPawButton from './CommentPawButton';

const Comment = () => {
  return (
    <S.Comment>
      <S.CommentDisplayBox>
        <CommentDisplay />
        <CommentInput />
      </S.CommentDisplayBox>
      <S.CommentButtonBox>
        <CommentDeleteButton />
        <CommentEditButton />
        <CommentPawButton />
      </S.CommentButtonBox>
    </S.Comment>
  );
};

export default Comment;
