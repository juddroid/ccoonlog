import { Comment as S } from '../../styles/styles';
import { getInfoDate } from '../../utils/utils';
import CommentDeleteButton from './CommentDeleteButton';
import CommentEditButton from './CommentEditButton';

const CommentDisplayHeader = ({ date }: { date: string }) => {
  const infoDate = getInfoDate(date);

  const handleClickDeleteButton = () => console.log('delete');

  return (
    <S.CommentDisplayHeader>
      <S.CommentDisplayHeaderInfoBox>{infoDate}</S.CommentDisplayHeaderInfoBox>
      <S.CommentDisplayHeaderButtonBox>
        <CommentEditButton />
        <CommentDeleteButton onClick={handleClickDeleteButton} />
      </S.CommentDisplayHeaderButtonBox>
    </S.CommentDisplayHeader>
  );
};

export default CommentDisplayHeader;
