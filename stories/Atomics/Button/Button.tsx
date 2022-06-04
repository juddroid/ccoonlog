import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  point?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Button = ({ point, children, style, ...props }: ButtonProps) => {
  return (
    <StyledButton type={'button'} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
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
