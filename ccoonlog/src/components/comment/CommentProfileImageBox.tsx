import { ASIDE } from '../../const';
import { Comment as S } from '../../styles/styles';

const CommentProfileImageBox = () => {
  return (
    <S.CommentProfileImageBox>
      <S.CommentProfileImageWrapper>
        <S.CommentProfileImage src={ASIDE.PROFILE} alt="aside" />
      </S.CommentProfileImageWrapper>
    </S.CommentProfileImageBox>
  );
};

export default CommentProfileImageBox;
