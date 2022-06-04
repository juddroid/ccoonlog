import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { NAME } from '../../const';
import { editTitleState } from '../../store/Recoil';
import { ArticleDetailState } from '../../types/types';
import { Post as S } from '../../styles/styles';

const EditTitle = () => {
  const [editTitle, setEditTitle] = useRecoilState(editTitleState);
  const location = useLocation<ArticleDetailState>();
  const { title } = location.state.articleDetail;

  const handleChangeInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  useEffect(() => {
    setEditTitle(title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.PostBox>
      <S.PostTitle>{NAME.TITLE}</S.PostTitle>
      <S.PostInput
        placeholder={NAME.TITLE}
        value={editTitle}
        onChange={handleChangeInputTitle}
      />
    </S.PostBox>
  );
};

export default EditTitle;
