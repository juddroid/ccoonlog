import { Comment as S } from '../../styles/styles';
import { getInfoDate, isAuth } from '../../utils/utils';
import CommentDisplayHeaderInfoBox from './CommentDisplayHeaderInfoBox';
import CommentDisplayHeaderButtonBox from './CommentDisplayHeaderButtonBox';

const CommentDisplayHeader = ({
  date,
  cid,
  name,
  uid,
  updateTime,
}: {
  date: string;
  cid: string;
  name: string;
  uid: string;
  updateTime?: string;
}) => {
  const infoDate = getInfoDate(date);
  const updateDate = updateTime && getInfoDate(updateTime);

  const userAuth = isAuth(uid);

  return (
    <S.CommentDisplayHeader>
      <CommentDisplayHeaderInfoBox {...{ name, infoDate, updateDate }} />
      {userAuth && <CommentDisplayHeaderButtonBox {...{ cid, date }} />}
    </S.CommentDisplayHeader>
  );
};

export default CommentDisplayHeader;
