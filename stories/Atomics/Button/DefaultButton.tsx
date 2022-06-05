import React from 'react';
import styled from 'styled-components';
import colors from '../../../constants/colors';
import { DefaultText } from '../Text';
import Button, { ButtonProps } from './Button';

export interface DefaultButtonProps extends ButtonProps {
  point?: boolean;
  block?: boolean;
}

const DefaultButton = ({ point, children, ...props }: DefaultButtonProps) => {
  return (
    <StyldDefaultButton {...props}>
      <DefaultText point={point} className={'default__text'}>
        {children}
      </DefaultText>
    </StyldDefaultButton>
  );
};

export default DefaultButton;

const StyldDefaultButton = styled(Button)<DefaultButtonProps>`
  width: ${({ block }) => block && '100%'};
  padding: 16px;
  background: transparent;
  border-radius: 10px;
  border: 1px solid ${colors.hotPink};
  transition: all 0.4s;
  cursor: pointer;
  -webkit-transition: all 0.4s;

  :hover {
    .default__text {
      font-size: 1.1rem;
    }
  }

  :active {
    .default__text {
      font-size: 0.9rem;
      opacity: 0.8;
    }
  }
`;
