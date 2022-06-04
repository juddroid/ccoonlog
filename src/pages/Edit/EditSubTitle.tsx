import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { NAME } from '../../const';
import { editSubTitleState } from '../../store/Recoil';
import { ArticleDetailState } from '../../types/types';
import { Post as S } from '../../styles/styles';

const EditSubTitle = () => {
  const [editSubTitle, setEditSubTitle] =
    useRecoilState<string | undefined>(editSubTitleState);
  const location = useLocation<ArticleDetailState>();
  const { subTitle } = location.state.articleDetail;

  const handleChangeInputSubTitle = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditSubTitle(e.target.value);
  };

  useEffect(() => {
    setEditSubTitle(subTitle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.PostBox>
      <S.PostTitle>{NAME.SUB_TITLE}</S.PostTitle>
      <S.PostInput
        placeholder={NAME.SUB_TITLE}
        value={editSubTitle}
        onChange={handleChangeInputSubTitle}
      />
    </S.PostBox>
  );
};

export default EditSubTitle;
