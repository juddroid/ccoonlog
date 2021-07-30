import { useRecoilValue } from 'recoil';
import { commentEditIDState } from '../../store/Recoil';
import { Comment as S } from '../../styles/styles';
import CommentEdit from './CommentEdit';

const CommentDisplayBody = ({
  comment,
  cid,
}: {
  comment: string;
  cid: string;
}) => {
  const commentEditID = useRecoilValue(commentEditIDState);
  return (
    <S.CommentDisplayBody>
      {commentEditID === cid ? (
        <CommentEdit {...{ comment }} />
      ) : (
        <S.CommentDisplayContent>{comment}</S.CommentDisplayContent>
      )}
    </S.CommentDisplayBody>
  );
};

export default CommentDisplayBody;
