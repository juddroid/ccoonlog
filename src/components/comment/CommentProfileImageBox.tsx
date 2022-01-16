import { ASIDE } from '../../const';
import { Comment as S } from '../../styles/styles';
import { CommentProps } from '../../types/types';

const CommentProfileImageBox = ({
  articleComment,
}: {
  articleComment: CommentProps;
}) => {
  const { userImageURL } = articleComment;
  const src = userImageURL || ASIDE.PROFILE;
  return (
    <S.CommentProfileImageBox>
      <S.CommentProfileImageWrapper>
        <S.CommentProfileImage src={src} alt="aside" />
      </S.CommentProfileImageWrapper>
    </S.CommentProfileImageBox>
  );
};

export default CommentProfileImageBox;
