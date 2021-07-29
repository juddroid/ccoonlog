import { Comment as S } from '../../styles/styles';
import { getInfoDate } from '../../utils/utils';

const CommentDisplayHeader = ({ date }: { date: string }) => {
  const infoDate = getInfoDate(date);

  return <S.CommentDisplayHeader>{infoDate}</S.CommentDisplayHeader>;
};

export default CommentDisplayHeader;
