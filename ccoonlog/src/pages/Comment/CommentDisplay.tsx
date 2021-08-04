import {
  cocommentEditIDState,
  cocommentEditInputValueState,
  commentEditIDState,
  commentEditInputValueState,
} from '../../store/Recoil';
import { Comment as S } from '../../styles/styles';
import { CommentProps } from '../../types/types';
import CommonCommentDisplayHeader from '../../components/common/CommonCommentDisplayHeader';
import CommentDisplayBody from '../../components/comment/CommentDisplayBody';

const CommentDisplay = ({
  articleComment,
}: {
  articleComment: CommentProps;
}) => {
  const { comment, date, cid, ccid, uid, name, updateTime } = articleComment;
  const id = ccid ? ccid : cid;
  const recoilValueState = ccid
    ? cocommentEditInputValueState
    : commentEditInputValueState;

  const recoilIDState = ccid ? cocommentEditIDState : commentEditIDState;

  return (
    <S.CommentDisplay>
      <CommonCommentDisplayHeader
        {...{ date, cid, ccid, name, uid, updateTime }}
      />
      <CommentDisplayBody
        {...{ comment, id, recoilValueState, recoilIDState }}
      />
    </S.CommentDisplay>
  );
};

export default CommentDisplay;
