import { IoPawOutline } from 'react-icons/io5';
import { Comment as S } from '../../styles/styles';

const CommentEditPawButton = ({
  onClick,
  id,
}: {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  id: string;
}) => {
  return (
    <S.CommentHeaderButton {...{ onClick }}>
      <IoPawOutline />
    </S.CommentHeaderButton>
  );
};

export default CommentEditPawButton;
