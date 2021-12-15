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
      case 0:
      case 1:
        return articleList.filter(
          (article) =>
            (article.category && article.category.map((category) => category.id).includes(0)) ||
            (article.category && article.category.map((category) => category.id).includes(1))
        );
      case 2:
        return articleList.filter(
          (article) => article.category && article.category.map((category) => category.id).includes(2)
        );
      case 3:
        return articleList.filter(
          (article) => article.category && article.category.map((category) => category.id).includes(3)
        );
      case 4:
        return articleList.filter(
          (article) => article.category && article.category.map((category) => category.id).includes(4)
        );

      default:
        return articleList;
    }
  },
});

export const categoryListState = atom<CategoryProps[]>({
  key: 'categoryListState',
  default: [
    { id: C.PERSONAL_PROJECT.id, item: C.PERSONAL_PROJECT.name, state: false },
    { id: C.TEAM_PROJECT.id, item: C.TEAM_PROJECT.name, state: false },
    { id: C.PORTFOLIO.id, item: C.PORTFOLIO.name, state: false },
    { id: C.INTERESTING.id, item: C.INTERESTING.name, state: false },
    { id: C.THINKING.id, item: C.THINKING.name, state: false },
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

export const isLoggedInState = atom({
  key: 'isLoggedInState',
  default: false,
});

// dark mode: default = false = light
export const displayState = atom({
  key: 'displayState',
  default: false,
});

export const commentInputValueState = atom({
  key: 'commentInputValueState',
  default: ``,
});

export const commentEditIDState = atom<string>({
  key: 'commentEditIDState',
  default: ``,
});

export const commentEditInputValueState = atom({
  key: 'commentEditInputValueState',
  default: ``,
});

export const cocommentEditIDState = atom<string>({
  key: 'cocommentEditIDState',
  default: ``,
});

export const cocommentInputValueState = atom({
  key: 'cocommentInputValueState',
  default: ``,
});

export const cocommentEditInputValueState = atom({
  key: 'cocommentEditInputValueState',
  default: ``,
});
