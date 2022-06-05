import React from 'react';
import styled from 'styled-components';
import colors from '../../../constants/colors';
import { TextPropsTagNames, FONTS_STYLE } from '../../../constants/font';

export interface TextProps extends TextPropsTagNames {
  bold?: 300 | 400 | 500 | 600 | 700 | 800 | 900 | boolean;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  point?: boolean;
}

const getActiveTagName = (props: TextPropsTagNames) => {
  return ['h1', 'h2', 'h3', 'h4', 'body1', 'body2', 'body3', 'body4'].find((tagName) => (props as any)[tagName]);
};

const Text = ({ children, ...props }: TextProps) => {
  const tagName: string = getActiveTagName(props) || 'body1';
  const tag = FONTS_STYLE[tagName];

  return (
    <StyledText as={tag.tagName as React.ElementType} tagName={tagName} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;

const StyledText = styled.div<TextProps & { tagName: string }>`
  ${({ tagName }) => FONTS_STYLE[tagName]};
  font-weight: ${({ bold = 400 }) => (bold === true ? 'bold' : bold)};
  color: ${({ point, color }) => (point ? `${colors.hotPink}` : color)};
`;
