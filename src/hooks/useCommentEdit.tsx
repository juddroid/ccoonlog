import { ChangeEvent, useEffect } from 'react';
import { RecoilState, useRecoilState } from 'recoil';
import { Comment as S } from '../styles/styles';

const useCommentEdit = (comment: string, recoilState: RecoilState<string>) => {
  const [state, setState] = useRecoilState<string>(recoilState);

  const handleChangeCommentEditTextArea = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => setState(e.target.value);

  const renderCommentEdit = () => {
    return (
      <S.CommentEditTextArea
        value={state}
        onChange={handleChangeCommentEditTextArea}
      />
    );
  };

  useEffect(() => {
    setState(comment);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { renderCommentEdit };
};

export default useCommentEdit;
