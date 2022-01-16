import React from 'react';
import styled from 'styled-components';
import { DefaultText } from '../Text';

const DefaultButton: React.FC = ({ children }) => {
  return (
    <StyledDefaultButton>
      <DefaultText body2>{children}</DefaultText>
    </StyledDefaultButton>
  );
};

export default DefaultButton;

const StyledDefaultButton = styled.button``;
