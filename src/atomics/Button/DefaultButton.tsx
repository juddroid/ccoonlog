import React from 'react';
import styled from 'styled-components';
import { DefaultText } from '../Text/index';

interface DefaultButtonProps {
  point?: boolean;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({ children, point, ...restProps }) => {
  return (
    <StyledDefaultButton {...restProps} {...{ point }}>
      <DefaultText body2>{children}</DefaultText>
    </StyledDefaultButton>
  );
};

export default DefaultButton;

const StyledDefaultButton = styled.button<DefaultButtonProps>`
  width: 120px;
  height: 50px;
  outline: none;
  background: transparent;
  border-radius: 10px;
  border: 1px solid #d23669;
  -webkit-text-decoration: none;
  text-decoration: none;
  margin: 5px 0;
  padding: 10px;
  cursor: pointer;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  color: ${({ point }) => (point ? '#d23669' : '#000')};
`;
