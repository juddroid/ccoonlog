type TextTagNameObjectType = {
  [key: string]: {
    tagName: string;
    'font-size': string;
    'line-height': string;
    'font-weight': string;
  };
};
export interface TextPropsTagNames {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  body1?: boolean;
  body2?: boolean;
  body3?: boolean;
  body4?: boolean;
}

export const FONTS_STYLE: TextTagNameObjectType = {
  h1: {
    tagName: 'h1',
    'font-size': '26px',
    'line-height': '39px',
    'font-weight': '400',
  },
  h2: {
    tagName: 'h2',
    'font-size': '22px',
    'line-height': '34px',
    'font-weight': '700',
  },
  h3: {
    tagName: 'h3',
    'font-size': '20px',
    'line-height': '30px',
    'font-weight': '400',
  },
  h4: {
    tagName: 'h4',
    'font-size': '17px',
    'line-height': '26px',
    'font-weight': '400',
  },
  body1: {
    tagName: 'span',
    'font-size': '16px',
    'line-height': '23.17px',
    'font-weight': '400',
  },
  body2: {
    tagName: 'span',
    'font-size': '14px',
    'line-height': '20.27px',
    'font-weight': '400',
  },
  body3: {
    tagName: 'span',
    'font-size': '13px',
    'line-height': '19.5px',
    'font-weight': '400',
  },
  body4: {
    tagName: 'span',
    'font-size': '12px',
    'line-height': '18px',
    'font-weight': '400',
  },
};
