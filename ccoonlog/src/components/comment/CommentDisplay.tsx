import { Comment as S } from '../../styles/styles';
import { CommentProps } from '../../types/types';
import CommentDisplayBody from './CommentDisplayBody';
import CommentDisplayHeader from './CommentDisplayHeader';

const CommentDisplay = ({
  articleComment,
}: {
  articleComment: CommentProps;
}) => {
  const { comment, date, cid, ccid, uid, name, updateTime } = articleComment;

  return (
    <S.CommentDisplay>
      <CommentDisplayHeader {...{ date, cid, ccid, name, uid, updateTime }} />
      <CommentDisplayBody {...{ comment, cid }} />
    </S.CommentDisplay>
  );
};

export default CommentDisplay;
