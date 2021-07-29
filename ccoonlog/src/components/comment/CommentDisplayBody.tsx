import { Comment as S } from '../../styles/styles';

const CommentDisplayBody = ({ comment }: { comment: string }) => {
  return <S.CommentDisplayBody>{comment}</S.CommentDisplayBody>;
};

export default CommentDisplayBody;
