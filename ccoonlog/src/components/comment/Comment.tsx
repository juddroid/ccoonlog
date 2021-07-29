import { Comment as S } from '../../styles/styles';
import CommentCancelButton from './CommentCancelButton';
import CommentDeleteButton from './CommentDeleteButton';
import CommentDisplay from './CommentDisplay';
import CommentEditButton from './CommentEditButton';
import CommentInput from './CommentInput';
import CommentPawButton from './CommentPawButton';
import CommentProfileImageBox from './CommentProfileImageBox';

const Comment = () => {
  return (
    <S.Comment>
      <S.CommentDisplayBox>
        <S.CommentDisplayUpperBox>
          <CommentProfileImageBox />
          <CommentDisplay />
        </S.CommentDisplayUpperBox>
        <S.CommentDisplayBottomBox>
          <CommentInput />
        </S.CommentDisplayBottomBox>
      </S.CommentDisplayBox>
      <S.CommentButtonBox>
        <CommentDeleteButton />
        <CommentCancelButton />
        <CommentEditButton />
        <CommentPawButton />
      </S.CommentButtonBox>
    </S.Comment>
  );
};

export default Comment;
