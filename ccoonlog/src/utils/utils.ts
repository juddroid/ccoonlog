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

export const isAuth = () => {
  const UID = 'w7M03TM5niOM8aAwmxYgrhOdOjf1';
  const user = localStorage.getItem(LOCAL.USER);
  const uid = user && JSON.parse(user).uid;

  return UID === uid;
};
