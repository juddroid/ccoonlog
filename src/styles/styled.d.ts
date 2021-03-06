import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: DefaultSize;
    colors: ColorsTheme;
    paddings: DefaultSize;
    margins: DefaultSize;
    sizes: DefaultSize;
    boxSizes: DefaultSize;
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
