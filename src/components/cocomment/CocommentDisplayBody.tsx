import { useRecoilValue } from 'recoil';
import { cocommentEditIDState } from '../../store/Recoil';
import CommonCommentDisplayBody from '../common/CommonCommentDisplayBody';

const CocommentDisplayBody = ({
  comment,
  ccid,
}: {
  comment: string;
  ccid: string;
}) => {
  const cocommentEditID = useRecoilValue(cocommentEditIDState);

  const id = ccid;
  const editID = cocommentEditID;
  const recoilValueState = cocommentEditIDState;
  return (
    <CommonCommentDisplayBody {...{ comment, recoilValueState, id, editID }} />
  );
};

export default CocommentDisplayBody;
