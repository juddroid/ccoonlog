import { SetterOrUpdater } from 'recoil';
import { LOCAL_STORAGE as LOCAL } from '../const';

export const calcRem = (size: number) => `${size / 16}rem`;

export const getFormatDate = (currentDate: string) => {
  let date = new Date(currentDate);
  let year = date.getFullYear(); //yyyy
  let month = 1 + date.getMonth(); //M
  month = month >= 10 ? month : +('0' + month); //month 두자리로 저장
  let day = date.getDate(); //d
  day = day >= 10 ? day : +('0' + day); //day 두자리로 저장
  return year + month + day;
};

export const getInfoDate = (currentDate: string) => {
  const date = new Date(currentDate);
  const infoDateList = date.toString().split(' ');
  return `${infoDateList[1]} ${infoDateList[2]}, ${infoDateList[3]}`;
};

export const isAuth = (currentUID?: string) => {
  const UID = `${process.env.REACT_APP_AUTH_ID}`;
  const user = getLocalStorageData(LOCAL.USER);
  const uid = user && user.uid;
  const auth = UID === uid;
  const userAuth = currentUID === uid;

  return currentUID ? userAuth : auth;
};

export const handleClickFilteringButton = (
  e: React.MouseEvent,
  callback: SetterOrUpdater<number | null>
) => {
  const id = e.currentTarget.id === 'null' ? null : +e.currentTarget.id;
  callback(id);
};

export const getWordCount = (content: string): number =>
  content.split(' ').length;

export const getReadingTime = (content: string) => {
  const avgWordsPerMin = 250;
  const wordCount = getWordCount(content);
  const time = Math.ceil(wordCount / avgWordsPerMin);
  return time;
};

export const getCoffee = (time: number) => {
  const read = Math.ceil(time / 5);
  let coffee = ``;

  if (time <= 5) coffee = '☕️'.repeat(1);
  else if (time <= 10) coffee = '☕️'.repeat(read);
  else if (time <= 15) coffee = '☕️'.repeat(read);
  else if (time <= 20) coffee = '☕️'.repeat(read);
  else if (time <= 25) coffee = '☕️'.repeat(read);
  else if (time <= 30) coffee = '🍱'.repeat(read % 5);
  else if (time <= 35) coffee = '🍱'.repeat(read % 5);
  else if (time <= 40) coffee = '🍱'.repeat(read % 5);
  else if (time <= 45) coffee = '🍱'.repeat(read % 5);
  else if (time <= 50) coffee = '🍱'.repeat(read % 5);
  else coffee = '🥵';

  return coffee;
};

export const getLocalStorageData = (key: string) => {
  const thisData = localStorage.getItem(key);
  const data = thisData && JSON.parse(thisData);
  return data;
};

// Cookie

export const getCookie = (name: string) => {
  let matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        // eslint-disable-next-line no-useless-escape
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const setCookie = (name: string, value: string, options: any = {}) => {
  options = {
    path: '/',
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + '=' + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += '; ' + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue;
    }
  }

  document.cookie = updatedCookie;
};

export const deleteCookie = (name: string) => {
  setCookie(name, '', {
    'max-age': -1,
  });
};
