import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <StyledButton type={'button'} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<ButtonProps>`
  text-decoration: none;
  -webkit-text-decoration: none;
  outline: none;
`;
