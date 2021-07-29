import { Comment as S } from '../../styles/styles';
import { CommentProps } from '../../types/types';
import CommentDisplayBody from './CommentDisplayBody';
import CommentDisplayHeader from './CommentDisplayHeader';

const CommentDisplay = ({
  articleComment,
}: {
  articleComment: CommentProps;
}) => {
  const { comment, date } = articleComment;

  return (
    <S.CommentDisplay>
      <CommentDisplayHeader {...{ date }} />
      <CommentDisplayBody {...{ comment }} />
    </S.CommentDisplay>
  );
};

export default CommentDisplay;
