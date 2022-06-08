import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    default: string;
    point: string;
  }
}

interface DefaultSize {
  small: string;
  base: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
  titleSize?: string;
}

interface ColorsTheme {
  [key: string];
}
