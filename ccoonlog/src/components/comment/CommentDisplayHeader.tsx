import { Comment as S } from '../../styles/styles';
import { getInfoDate, isAuth } from '../../utils/utils';
import CommentDisplayHeaderInfoBox from './CommentDisplayHeaderInfoBox';
import CommentDisplayHeaderButtonGroup from './CommentDisplayHeaderButtonGroup';
import CocommentButton from './CocommentButton';

const CommentDisplayHeader = ({
  date,
  cid,
  ccid,
  name,
  uid,
  updateTime,
}: {
  date: string;
  cid: string;
  name: string;
  uid: string;
  updateTime?: string;
  ccid?: string;
}) => {
  const infoDate = getInfoDate(date);
  const updateDate = updateTime && getInfoDate(updateTime);

  const userAuth = isAuth(uid);

  return (
    <S.CommentDisplayHeader>
      <CommentDisplayHeaderInfoBox {...{ name, infoDate, updateDate }} />
      <S.CommentDisplayHeaderButtonBox>
        {userAuth && (
          <CommentDisplayHeaderButtonGroup {...{ cid, ccid, date }} />
        )}
        {!ccid && <CocommentButton {...{ cid }} />}
      </S.CommentDisplayHeaderButtonBox>
    </S.CommentDisplayHeader>
  );
};

export default CommentDisplayHeader;
