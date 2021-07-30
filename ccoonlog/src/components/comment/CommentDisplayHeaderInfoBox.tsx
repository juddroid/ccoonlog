import { Comment as S } from '../../styles/styles';

const CommentDisplayHeaderInfoBox = ({
  name,
  infoDate,
  updateDate,
}: {
  name: string;
  infoDate: string;
  updateDate?: string;
}) => {
  return (
    <S.CommentDisplayHeaderInfoBox>
      <S.CommentDisplayHeaderInfoName>{name}</S.CommentDisplayHeaderInfoName>
      <S.CommentDisplayHeaderInfoDate>
        <S.CommentDisplayHeaderTime>{infoDate}</S.CommentDisplayHeaderTime>
        {updateDate && (
          <S.CommentDisplayHeaderUpdateTime>
            edited {updateDate}
          </S.CommentDisplayHeaderUpdateTime>
        )}
      </S.CommentDisplayHeaderInfoDate>
    </S.CommentDisplayHeaderInfoBox>
  );
};

export default CommentDisplayHeaderInfoBox;
