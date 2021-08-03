import { Comment as S } from '../../styles/styles';
import { getInfoDate, isAuth } from '../../utils/utils';
import CommentDisplayHeaderInfoBox from './CommentDisplayHeaderInfoBox';
import CommentDisplayHeaderButtonGroup from './CommentDisplayHeaderButtonGroup';
import { IoReturnUpBackOutline } from 'react-icons/io5';

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

  const handleClickCocommentButton = () => {
    console.log('cocomment');
  };

  return (
    <S.CommentDisplayHeader>
      <CommentDisplayHeaderInfoBox {...{ name, infoDate, updateDate }} />
      <S.CommentDisplayHeaderButtonBox>
        {userAuth && <CommentDisplayHeaderButtonGroup {...{ cid, date }} />}
        <S.CommentHeaderButton onClick={handleClickCocommentButton}>
          <IoReturnUpBackOutline />
        </S.CommentHeaderButton>
      </S.CommentDisplayHeaderButtonBox>
    </S.CommentDisplayHeader>
  );
};

export default CommentDisplayHeader;
