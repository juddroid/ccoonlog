import { useRecoilValue } from 'recoil';
import { commentEditIDState } from '../../store/Recoil';
import { Comment as S } from '../../styles/styles';
import CommentEdit from './CommentEdit';
import { Viewer } from '@toast-ui/react-editor';

const CommentDisplayBody = ({
  comment,
  cid,
}: {
  comment: string;
  cid: string;
}) => {
  const commentEditID = useRecoilValue(commentEditIDState);

  console.log(comment);
  return (
    <S.CommentDisplayBody>
      {commentEditID === cid ? (
        <CommentEdit {...{ comment }} />
      ) : (
        <S.CommentDisplayContent>
          <Viewer initialValue={comment} />
        </S.CommentDisplayContent>
      )}
    </S.CommentDisplayBody>
  );
};

export default CommentDisplayBody;
