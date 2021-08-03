import { useRecoilState, useRecoilValue } from 'recoil';
import {
  cocommentEditIDState,
  cocommentEditInputValueState,
  commentEditIDState,
  commentEditInputValueState,
} from '../../store/Recoil';
import { Comment as S } from '../../styles/styles';
import CommentEdit from './CommentEdit';
import { Viewer } from '@toast-ui/react-editor';

const CommentDisplayBody = ({
  comment,
  cid,
  ccid,
}: {
  comment: string;
  cid: string;
  ccid?: string;
}) => {
  const commentEditID = useRecoilValue(commentEditIDState);
  const cocommentEditID = useRecoilValue(cocommentEditIDState);
  const [commentEditInputValue, setCommentEditInputValue] = useRecoilState(
    commentEditInputValueState
  );
  const [cocommentEditInputValue, setCocommentEditInputValue] = useRecoilState(
    cocommentEditInputValueState
  );

  const id = ccid ? ccid : cid;
  const editID = ccid ? cocommentEditID : commentEditID;
  const editInputValue = ccid ? cocommentEditInputValue : commentEditInputValue;
  const setEditInputValue = ccid
    ? setCocommentEditInputValue
    : setCommentEditInputValue;

  return (
    <S.CommentDisplayBody>
      {editID === id ? (
        <CommentEdit
          {...{ comment }}
          state={editInputValue}
          setState={setEditInputValue}
        />
      ) : (
        <S.CommentDisplayContent>
          <Viewer initialValue={comment} />
        </S.CommentDisplayContent>
      )}
    </S.CommentDisplayBody>
  );
};

export default CommentDisplayBody;
