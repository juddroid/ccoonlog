import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { commentInputValueState } from '../../store/Recoil';
import { Comment as S } from '../../styles/styles';

const CommentInput = () => {
  const [commentInputValue, setCommentInputValue] = useRecoilState(
    commentInputValueState
  );

  const handleClickCommentInput = () => {};
  const handleChangeCommentInputValue = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCommentInputValue(e.target.value);
  };

  return (
    <S.CommentInput
      placeholder={`Comment`}
      onClick={handleClickCommentInput}
      value={commentInputValue}
      onChange={handleChangeCommentInputValue}
    />
  );
};

export default CommentInput;
