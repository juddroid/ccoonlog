import { Comment as S } from '../../styles/styles';
import { AiOutlineEdit } from 'react-icons/ai';

const CommentEditButton = ({
  onClick,
  id,
}: {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  id: string;
}) => {
  return (
    <S.CommentHeaderButton {...{ id, onClick }}>
      <AiOutlineEdit />
    </S.CommentHeaderButton>
  );
};

export default CommentEditButton;
