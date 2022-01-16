import { Comment as S } from '../../styles/styles';
import { CommentProps } from '../../types/types';
import CommentDisplayBottomBox from './CommentDisplayBottomBox';
import CommentDisplayUpperBox from './CommentDisplayUpperBox';

const CommentDisplayBox = ({
  commentList,
}: {
  commentList: CommentProps[];
}) => {
  return (
    <S.CommentDisplayBox>
      <CommentDisplayUpperBox {...{ commentList }} />
      <CommentDisplayBottomBox />
    </S.CommentDisplayBox>
  );
};

export default CommentDisplayBox;
