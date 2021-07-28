import { DefaultTheme } from 'styled-components';
import { calcRem } from '../utils/utils';

const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(32),
  xxxl: calcRem(40),
  titleSize: calcRem(50),
};

const paddings = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(42),
};

const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(18),
  xl: calcRem(28),
  xxl: calcRem(32),
  xxxl: calcRem(60),
};

const sizes = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(32),
  xxxl: calcRem(42),
};

const boxSizes = {
  small: calcRem(40),
  base: calcRem(60),
  lg: calcRem(80),
  xl: calcRem(100),
  xxl: calcRem(200),
  xxxl: calcRem(300),
};

const colors = {
  black: '#fff',
  white: '#011627', //'#1C2020'
  dark: '#fff',
  pink: '#ffa7c4',
  hotPink: '#ffa7c4',
  yellow: 'yellow',
  facebook: '#3B5A98',
  naver: '#1DCE60',
  kakao: '#FFEF00',
  gray: '#555',
  back: 'transparent',
};

const dark = {
  fontSizes,
  colors,
  sizes,
  paddings,
  margins,
  boxSizes,
};

export default dark;
