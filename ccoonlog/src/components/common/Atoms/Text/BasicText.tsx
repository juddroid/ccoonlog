import styled from 'styled-components';
import { ReactProps } from '../../../../types/types';

const BasicText = ({ children }: ReactProps) => {
  return <StyledBasicText>{children}</StyledBasicText>;
};

export default BasicText;

export const StyledBasicText = styled.span`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;
