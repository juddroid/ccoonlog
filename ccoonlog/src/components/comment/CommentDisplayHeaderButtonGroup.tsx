import { useRecoilValue } from 'recoil';
import { commentEditIDState } from '../../store/Recoil';
import { Comment as S } from '../../styles/styles';
import CommentDisplayHeaderButtonDefault from './CommentDisplayHeaderButtonDefault';
import CommentDisplayHeaderButtonEdit from './CommentDisplayHeaderButtonEdit';

const CommenDisplayHeaderButtonGroup = ({
  cid,
  date,
}: {
  cid: string;
  date: string;
}) => {
  const commentEditID = useRecoilValue(commentEditIDState);
  return (
    <>
      {commentEditID === cid ? (
        <CommentDisplayHeaderButtonDefault {...{ cid, date }} />
      ) : (
        <CommentDisplayHeaderButtonEdit {...{ cid }} />
      )}
    </>
  );
};

export default CommenDisplayHeaderButtonGroup;
