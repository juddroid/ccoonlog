import React from 'react';
import styled from 'styled-components';
import { TextPropsTagNames, FONTS_STYLE } from '../../../constants/font';

export interface TextProps extends TextPropsTagNames {
  bold?: 300 | 400 | 500 | 600 | 700 | 800 | 900 | boolean;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const getActiveTagName = (props: TextPropsTagNames) => {
  return ['h1', 'h2', 'h3', 'h4', 'body1', 'body2', 'body3', 'body4'].find((tagName) => (props as any)[tagName]);
};

export const Text = ({ children, ...props }: TextProps) => {
  const tagName: string = getActiveTagName(props) || 'body1';
  const tag = FONTS_STYLE[tagName];

  return (
    <StyledText {...props} as={tag.tagName as React.ElementType} tagName={tagName}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.div<TextProps & { tagName: string }>`
  ${({ tagName }) => FONTS_STYLE[tagName]};
  color: ${({ color }) => color};
  font-weight: ${({ bold = 400 }) => (bold === true ? 'bold' : bold)};
  font-family: 'Noto Sans KR';
`;
