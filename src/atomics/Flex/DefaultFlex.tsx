import React from 'react';
import styled from 'styled-components';

interface DefaultFlexProps {
  flexDirection?: 'row' | 'column';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  center?: boolean;
}

const DefaultFlex: React.FC<DefaultFlexProps> = ({
  children,
  flexDirection = 'row',
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  center = false,
}) => {
  justifyContent = center ? 'center' : 'flex-start';
  alignItems = center ? 'center' : 'flex-start';

  return <StyledDefaultFlex {...{ flexDirection, justifyContent, alignItems }}>{children}</StyledDefaultFlex>;
};

export default DefaultFlex;

const StyledDefaultFlex = styled.div<DefaultFlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;
