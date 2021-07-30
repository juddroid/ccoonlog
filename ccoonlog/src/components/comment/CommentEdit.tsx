import { ChangeEvent, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { commentEditInputValueState } from '../../store/Recoil';
import { Comment as S } from '../../styles/styles';

const CommentEdit = ({ comment }: { comment: string }) => {
  const [commentEditInputValue, setCommentEditInputValue] = useRecoilState(
    commentEditInputValueState
  );
  const handleChangeCommentEditTextArea = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => setCommentEditInputValue(e.target.value);

  useEffect(() => {
    setCommentEditInputValue(comment);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.CommentEditTextArea
      value={commentEditInputValue}
      onChange={handleChangeCommentEditTextArea}
    />
  );
};

export default CommentEdit;
