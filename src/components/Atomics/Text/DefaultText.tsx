import React from 'react';
import styled from 'styled-components';
import { DefaultTextTagNameProps, FONTS_STYLE } from '../../../styles/font';

export interface DefaultTextProps extends DefaultTextTagNameProps {
  bold?: 300 | 400 | 500 | 600 | 700 | 800 | 900 | boolean;
  color?: string;
  block?: boolean;
  style?: React.CSSProperties;
}

const getTagName = (props: DefaultTextTagNameProps) => {
  return ['h1', 'h2', 'h3'].find((tagName) => (props as any)[tagName]);
};

const DefaultText: React.FC<DefaultTextProps> = ({ children, bold = false, block = false, style, ...restProps }) => {
  const tagName: string = getTagName(restProps) || 'h3';
  const tag = FONTS_STYLE[tagName];

  return (
    <StyledDefaultText {...restProps} {...{ tagName, bold, block, style }} as={tag.tagName as React.ElementType}>
      {children}
    </StyledDefaultText>
  );
};

export default DefaultText;

const StyledDefaultText = styled.div<DefaultTextProps & { tagName: string }>`
  color: ${({ color }) => color};
  ${({ tagName }) => FONTS_STYLE[tagName]};
  font-weight: ${({ bold = 400 }) => (bold === true ? 'bold' : bold)};
  display: ${({ block }) => (block ? 'block' : null)};
`;
