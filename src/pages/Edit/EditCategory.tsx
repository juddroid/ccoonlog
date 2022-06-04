import { NAME } from '../../const';
import { useRecoilState } from 'recoil';
import { categoryListState } from '../../store/Recoil';
import { v4 as uuidv4 } from 'uuid';
import { Post as S } from '../../styles/styles';
import { useLocation } from 'react-router-dom';
import { ArticleDetailState, CategoryProps } from '../../types/types';
import { useEffect } from 'react';

const EditCategory = () => {
  const [categoryList, setCategoryList] =
    useRecoilState<CategoryProps[]>(categoryListState);
  const location = useLocation<ArticleDetailState>();

  const handleClickCategoryButton = (e: React.MouseEvent) => {
    const id = +e.currentTarget.id;

    setCategoryList(
      categoryList.map((category: CategoryProps) =>
        id === category.id ? { ...category, state: !category.state } : category
      )
    );
  };

  useEffect(() => {
    const categoryListData = location.state.articleDetail.category;
    const activeCategoryIDList = categoryListData?.map((list) => list.id);

    activeCategoryIDList &&
      setCategoryList(
        categoryList.map((category) =>
          activeCategoryIDList.includes(category.id)
            ? { ...category, state: true }
            : { ...category, state: false }
        )
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.PostBox>
      <S.PostTitle>{NAME.CATEGORY}</S.PostTitle>
      {categoryList &&
        categoryList.map((category) => (
          <S.PostCategory
            key={uuidv4()}
            id={category.id}
            onClick={handleClickCategoryButton}
            state={category.state}
          >
            {category.item}
          </S.PostCategory>
        ))}
    </S.PostBox>
  );
};

export default EditCategory;
