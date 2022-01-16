import CocommentCancelButton from '../../components/cocomment/CocommentCancelButton';
import CocommentPawButton from '../../components/cocomment/CocommentPawButton';
import { Cocomment as S } from '../../styles/styles';

const CocommentEditButtonBox = ({ cid }: { cid: string }) => {
  return (
    <S.CocommentEditButtonBox>
      <CocommentCancelButton />
      <CocommentPawButton {...{ cid }} />
    </S.CocommentEditButtonBox>
  );
};

export default CocommentEditButtonBox;
