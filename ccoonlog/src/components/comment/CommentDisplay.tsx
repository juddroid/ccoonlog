import { Comment as S } from '../../styles/styles';
import CommentDisplayBody from './CommentDisplayBody';
import CommentDisplayHeader from './CommentDisplayHeader';

const CommentDisplay = () => {
  return (
    <S.CommentDisplay>
      <CommentDisplayHeader />
      <CommentDisplayBody />
    </S.CommentDisplay>
  );
};

export default CommentDisplay;
