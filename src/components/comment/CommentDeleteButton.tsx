import { Comment as S } from '../../styles/styles';
import { IoIosClose } from 'react-icons/io';

const CommentDeleteButton = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <S.CommentHeaderButton {...{ onClick }}>
      <IoIosClose />
    </S.CommentHeaderButton>
  );
};

export default CommentDeleteButton;
