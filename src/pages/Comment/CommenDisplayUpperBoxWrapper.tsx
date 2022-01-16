import CommentDisplay from './CommentDisplay';
import CommentProfileImageBox from '../../components/comment/CommentProfileImageBox';
import { Comment as S } from '../../styles/styles';
import { CommentProps } from '../../types/types';

const CommenDisplayUpperBoxWrapper = ({
  articleComment,
}: {
  articleComment: CommentProps;
}) => {
  return (
    <S.CommentDisplayUpperBoxWrapper>
      <CommentProfileImageBox {...{ articleComment }} />
      <CommentDisplay {...{ articleComment }} />
    </S.CommentDisplayUpperBoxWrapper>
  );
};

export default CommenDisplayUpperBoxWrapper;
