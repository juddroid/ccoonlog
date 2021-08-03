import { ChangeEvent, useEffect } from 'react';
import { SetterOrUpdater } from 'recoil';
import { Comment as S } from '../../styles/styles';

const CommentEdit = ({
  comment,
  state,
  setState,
}: {
  comment: string;
  state: string;
  setState: SetterOrUpdater<string>;
}) => {
  const handleChangeCommentEditTextArea = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => setState(e.target.value);

  useEffect(() => {
    setState(comment);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.CommentEditTextArea
      value={state}
      onChange={handleChangeCommentEditTextArea}
    />
  );
};

export default CommentEdit;
