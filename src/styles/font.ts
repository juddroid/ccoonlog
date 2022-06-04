type TextTagNameObjectType = {
  [key: string]: {
    tagName: string;
    'font-size'?: string;
    'font-weight'?: string;
    'line-height'?: string;
  };
};
export interface DefaultTextTagNameProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  small?: boolean;
  body1?: boolean;
  body2?: boolean;
}

export const FONTS_STYLE: TextTagNameObjectType = {
  h1: {
    tagName: 'h1',
    'font-size': '2rem',
    'font-weight': '900',
    'line-height': '2.625rem',
  },
  h2: {
    tagName: 'h2',
    'font-size': '1.75rem',
    'font-weight': '900',
    'line-height': '1.1',
  },
  h3: {
    tagName: 'h3',
    'font-weight': '900',
    'font-size': '1rem',
  },
  small: {
    tagName: 'small',
    'font-weight': '500',
    'font-size': '0.7rem',
  },
  body1: {
    tagName: 'p',
  },
  body2: {
    tagName: 'span',
    'font-size': '80%',
  },
};
