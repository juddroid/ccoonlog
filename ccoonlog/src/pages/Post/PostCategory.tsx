import { NAME } from '../../const';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { categoryListState } from '../../store/Recoil';
import { v4 as uuidv4 } from 'uuid';
import { Post as S } from '../../styles/styles';

const PostCategory = () => {
  const [categoryList, setCategoryList] = useRecoilState(categoryListState);

  const handleClickCategoryButton = (e: React.MouseEvent) => {
    const id = +e.currentTarget.id;
    setCategoryList(
      categoryList.map((category) =>
        id === category.id ? { ...category, state: !category.state } : category
      )
    );
  };

  useEffect(() => {
    setCategoryList(
      categoryList.map((category) => ({ ...category, state: false }))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.PostBox>
      <S.PostTitle>{NAME.CATEGORY}</S.PostTitle>
      {categoryList.map((category) => (
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

export default PostCategory;
