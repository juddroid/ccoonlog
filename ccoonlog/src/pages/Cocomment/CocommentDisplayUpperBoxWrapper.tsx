import CommentDisplay from '../../components/comment/CommentDisplay';
import CommentProfileImageBox from '../../components/comment/CommentProfileImageBox';
import { Cocomment as S } from '../../styles/styles';
import { CommentProps } from '../../types/types';

const CocommentDisplayUpperBoxWrapper = ({
  cocomment,
}: {
  cocomment: CommentProps;
}) => {
  return (
    <S.CocommentDisplayUpperBoxWrapper>
      <CommentProfileImageBox articleComment={cocomment} />
      <CommentDisplay articleComment={cocomment} />
    </S.CocommentDisplayUpperBoxWrapper>
  );
};

export default CocommentDisplayUpperBoxWrapper;
