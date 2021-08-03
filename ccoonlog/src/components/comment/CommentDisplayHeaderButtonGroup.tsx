import { useRecoilState } from 'recoil';
import { cocommentEditIDState, commentEditIDState } from '../../store/Recoil';
import CommentDisplayHeaderButtonDefault from './CommentDisplayHeaderButtonDefault';
import CommentDisplayHeaderButtonEdit from './CommentDisplayHeaderButtonEdit';

const CommenDisplayHeaderButtonGroup = ({
  cid,
  date,
  ccid,
}: {
  cid: string;
  date: string;
  ccid?: string;
}) => {
  const [commentEditID, setCommentEditID] = useRecoilState(commentEditIDState);
  const [cocommentEditID, setCocommentEditID] =
    useRecoilState(cocommentEditIDState);

  const id = ccid ? ccid : cid;
  const callback = ccid ? setCocommentEditID : setCommentEditID;
  const editID = ccid ? cocommentEditID : commentEditID;
  const isComment = ccid ? false : true;

  return (
    <>
      {editID === id ? (
        <CommentDisplayHeaderButtonDefault {...{ cid, date }} />
      ) : (
        <CommentDisplayHeaderButtonEdit {...{ id, callback, cid, ccid }} />
      )}
    </>
  );
};

export default CommenDisplayHeaderButtonGroup;
