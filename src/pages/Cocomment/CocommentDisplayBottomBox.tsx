import CocommentInput from '../../components/cocomment/CocommentInput';
import { Comment as S } from '../../styles/styles';
import CocommentEditButtonBox from './CocommentEditButtonBox';

const CocommentDisplayBottomBox = ({ cid }: { cid: string }) => {
  return (
    <S.CommentDisplayBottomBox>
      <CocommentInput />
      <CocommentEditButtonBox {...{ cid }} />
    </S.CommentDisplayBottomBox>
  );
};

export default CocommentDisplayBottomBox;
