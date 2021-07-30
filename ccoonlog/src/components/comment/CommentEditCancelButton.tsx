import { IoBackspaceOutline } from 'react-icons/io5';
import { Comment as S } from '../../styles/styles';

const CommentEditCancelButton = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <S.CommentHeaderButton {...{ onClick }}>
      <IoBackspaceOutline />
    </S.CommentHeaderButton>
  );
};

export default CommentEditCancelButton;
