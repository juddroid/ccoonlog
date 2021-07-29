import { Comment as S } from '../../styles/styles';
import { AiOutlineEdit } from 'react-icons/ai';

const CommentEditButton = () => {
  return (
    <S.CommentHeaderButton>
      <AiOutlineEdit />
    </S.CommentHeaderButton>
  );
};

export default CommentEditButton;
