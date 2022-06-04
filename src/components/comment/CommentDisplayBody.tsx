import { RecoilState, useRecoilValue } from 'recoil';
import CommonCommentDisplayBody from '../common/CommonCommentDisplayBody';

const CommentDisplayBody = ({
  comment,
  id,
  recoilValueState,
  recoilIDState,
}: {
  comment: string;
  id: string;
  recoilValueState: RecoilState<string>;
  recoilIDState: RecoilState<string>;
}) => {
  const editID = useRecoilValue(recoilIDState);

  return (
    <CommonCommentDisplayBody {...{ comment, recoilValueState, id, editID }} />
  );
};

export default CommentDisplayBody;
