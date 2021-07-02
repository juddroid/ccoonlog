import { DefaultTheme } from 'styled-components';
import { calcRem } from './../utils/utils';

const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(32),
  titleSize: calcRem(50),
};

const paddings = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(32),
  xxxl: calcRem(42),
};

const gap = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(32),
  xxxl: calcRem(42),
};

const colors = {
  black: '#000',
  white: '#FFF',
  dark: '#222',
  pink: '#ffa7c4',
  yellow: 'yellow',
};

const theme: DefaultTheme = {
  fontSizes,
  colors,
  gap,
  paddings,
  margins,
};

export default theme;
