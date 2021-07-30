import { useRecoilState } from 'recoil';
import { commentEditIDState } from '../../store/Recoil';
import { Comment as S } from '../../styles/styles';
import CommentEdit from './CommentEdit';
import { Viewer } from '@toast-ui/react-editor';
import { useEffect } from 'react';

const CommentDisplayBody = ({
  comment,
  cid,
}: {
  comment: string;
  cid: string;
}) => {
  const [commentEditID, setCommentEditID] = useRecoilState(commentEditIDState);

  useEffect(() => {
    setCommentEditID(null);
  }, []);

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
