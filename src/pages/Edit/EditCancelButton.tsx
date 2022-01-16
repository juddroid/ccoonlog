import { NAME } from '../../const';
import { Button } from '../../styles/CommonStyles';
import { useRecoilState } from 'recoil';
import { categoryListState } from '../../store/Recoil';
import { useLocation } from 'react-router-dom';
import { ArticleDetailState, CategoryProps } from '../../types/types';

const EditCancelButton = () => {
  const [categoryList, setCategoryList] =
    useRecoilState<CategoryProps[]>(categoryListState);
  const location = useLocation<ArticleDetailState>();

  const handleClickCancelButton = () => {
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

    window.history.back();
  };

  return (
    <Button.MenuButton onClick={handleClickCancelButton}>
      {NAME.CANCEL}
    </Button.MenuButton>
  );
};

export default EditCancelButton;
