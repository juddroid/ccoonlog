// Title
export const TITLE = `Starry Night Coding`;

// Aside
export const ASIDE = {
  PROFILE: `https://avatars.githubusercontent.com/u/70361152?v=4`,
  INSTAGRAM: `https://www.instagram.com/juddroid_raccoon/`,
};

// Size
export const SIZE = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
  SIZE_DEFAULT_WIDTH: 100,
  SIZE_DEFAULT_HEIGHT: 50,
};

// Button Name
export const NAME = {
  POST: 'Post',
  DELETE: 'Delete',
  EDIT: 'Edit',
  CANCEL: 'Cancel',
  TITLE: 'Title',
  SUB_TITLE: 'SubTitle',
  CATEGORY: 'Category',
};

export const OAUTH_BUTTON_NAME = {
  KAKAO: 'Log in with Kakao',
  NAVER: 'Log in with Naver',
  FACEBOOK: 'Log in with Facebook',
  GOOGLE: 'Log in with Google',
  GITHUB: 'Log in with GitHub',
};

export const URL = {
  GITHUB: `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`,
  GITHUB_POST: `https://github.com/login/oauth/access_token`,
};

export const LOADING_MESSAGE = 'Loading...';

export const LOCAL_STORAGE = {
  TOKEN: 'token',
  USER: 'user',
  DISPLAY: 'display',
};

// Text
export const TEXT = {
  NO_DATA: 'There is no Article...😅',
};

export const CATEGORY_LIST = {
  PERSONAL_PROJECT: {
    id: 0,
    name: 'Personal',
  },
  TEAM_PROJECT: {
    id: 1,
    name: 'Team',
  },
  PORTFOLIO: {
    id: 2,
    name: 'Portfolio',
  },
  INTERESTING: {
    id: 3,
    name: 'Interesting',
  },
  THINKING: {
    id: 4,
    name: 'Thinking',
  },
};
