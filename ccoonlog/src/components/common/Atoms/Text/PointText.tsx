import styled from 'styled-components';
import { ReactProps } from '../../../../types/types';
import { StyledBasicText } from './BasicText';

const PointText = ({ children }: ReactProps) => {
  return <StyledPointText>{children}</StyledPointText>;
};

export default PointText;

const StyledPointText = styled(StyledBasicText)`
  color: ${({ theme }) => theme.colors.hotPink};
`;
