import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: DefaultSize;
    colors: ColorsTheme;
    paddings: DefaultSize;
    margins: DefaultSize;
    gap: DefaultSize;
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
  black: string;
  white: string;
  dark: string;
  pink: string;
  yellow: string;
}
