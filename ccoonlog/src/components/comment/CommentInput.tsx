import { ChangeEvent } from 'react';
import { SetterOrUpdater } from 'recoil';
import { Comment as S } from '../../styles/styles';

const CommentInput = ({
  state,
  setState,
}: {
  state: string;
  setState: SetterOrUpdater<string>;
}) => {
  const handleClickCommentInput = () => {};
  const handleChangeCommentInputValue = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setState(e.target.value);
  };

  return (
    <S.CommentInput
      placeholder={`Comment`}
      onClick={handleClickCommentInput}
      value={state}
      onChange={handleChangeCommentInputValue}
    />
  );
};

export default CommentInput;
