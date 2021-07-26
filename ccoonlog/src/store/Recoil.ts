import { atom, selector } from 'recoil';
import { CATEGORY_LIST as C } from '../const';
import { CategoryProps } from '../types/types';

export const articleData = atom({
  key: 'airticleData',
  default: [],
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
