import { CommentProps } from '../../types/types';
import CommentDisplayUpperBoxWrapper from '../../pages/Comment/CommenDisplayUpperBoxWrapper';
import { v4 as uuidv4 } from 'uuid';
import { Comment as S } from '../../styles/styles';
import Cocomment from '../Cocomment';

const CommentDisplayUpperBox = ({
  commentList,
}: {
  commentList: CommentProps[];
}) => {
  return (
    <>
      {[...commentList]
        .sort((a: any, b: any) => +new Date(a.date) - +new Date(b.date))
        .map((articleComment) => (
          <S.CommentDisplayUpperBox key={uuidv4()}>
            <CommentDisplayUpperBoxWrapper {...{ articleComment }} />
            <Cocomment cid={articleComment.cid} />
          </S.CommentDisplayUpperBox>
        ))}
    </>
  );
};

export default CommentDisplayUpperBox;
