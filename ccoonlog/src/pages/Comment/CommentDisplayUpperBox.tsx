import { CommentProps } from '../../types/types';
import CommentDisplay from '../../components/comment/CommentDisplay';
import CommentProfileImageBox from '../../components/comment/CommentProfileImageBox';
import { v4 as uuidv4 } from 'uuid';
import { Comment as S } from '../../styles/styles';

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
            <CommentProfileImageBox {...{ articleComment }} />
            <CommentDisplay {...{ articleComment }} />
          </S.CommentDisplayUpperBox>
        ))}
    </>
  );
};

export default CommentDisplayUpperBox;
