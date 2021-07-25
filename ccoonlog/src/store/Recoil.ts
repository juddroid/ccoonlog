import { atom, selector } from 'recoil';
import { CATEGORY_LIST as C } from '../const';

export const articleData = atom({
  key: 'airticleData',
  default: [],
});

// category id 가 필요할까?
export const categoryListState = atom({
  key: 'categoryListState',
  default: [
    { item: C.PERSONAL_PROJECT, state: false },
    { item: C.TEAM_PROJECT, state: false },
    { item: C.THINKING, state: false },
    { item: C.ALGORITHM, state: false },
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
