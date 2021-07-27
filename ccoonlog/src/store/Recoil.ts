import { atom, selector } from 'recoil';
import { CATEGORY_LIST as C } from '../const';
import { ArticleProps, CategoryProps } from '../types/types';

export const articleDataState = atom<ArticleProps[] | null>({
  key: 'airticleDataState',
  default: null,
});

export const categoryIDState = atom<number | null>({
  key: 'categoryIDState',
  default: null,
});

export const articleDataForRender = selector({
  key: 'articleDataForRender',
  get: ({ get }) => {
    const articleList = get(articleDataState);
    const categoryID = get(categoryIDState);

    if (!articleList) return;

    switch (categoryID) {
      case 0 || 1:
        return articleList.filter(
          (article) =>
            (article.category &&
              article.category.map((category) => category.id).includes(0)) ||
            (article.category &&
              article.category.map((category) => category.id).includes(1))
        );
      case 2:
        return articleList.filter(
          (article) =>
            article.category &&
            article.category.map((category) => category.id).includes(2)
        );
      case 3:
        return articleList.filter(
          (article) =>
            article.category &&
            article.category.map((category) => category.id).includes(3)
        );
      case 4:
        return articleList.filter(
          (article) =>
            article.category &&
            article.category.map((category) => category.id).includes(4)
        );

      default:
        return articleList;
    }
  },
});

export const categoryListState = atom<CategoryProps[]>({
  key: 'categoryListState',
  default: [
    { item: C.PERSONAL_PROJECT, state: false, id: 0 },
    { item: C.TEAM_PROJECT, state: false, id: 1 },
    { item: C.ALGORITHM, state: false, id: 2 },
    { item: C.INTERESTING, state: false, id: 3 },
    { item: C.THINKING, state: false, id: 4 },
  ],
});

export const selectedCategoryListState = selector({
  key: 'selectedCategoryListState',
  get: ({ get }) => {
    const categoryList = get(categoryListState);
    const selectedList = categoryList.filter((category) => category.state);
    return selectedList;
  },
});

export const postTitleState = atom({
  key: 'postTitleState',
  default: '',
});

export const postSubTitleState = atom({
  key: 'postSubTitleState',
  default: '',
});

export const editTitleState = atom({
  key: 'editTitleState',
  default: '',
});

export const editSubTitleState = atom<string | undefined>({
  key: 'editSubTitleState',
  default: '',
});
