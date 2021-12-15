import styled from 'styled-components';
import BasicText from './BasicText';

const PointText = styled(BasicText)`
  color: ${({ theme }) => theme.colors.hotPink};
`;

export default PointText;
