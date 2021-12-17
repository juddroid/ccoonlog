import { ReactProps } from '../../../../types/types';
import PointText from '../Text/PointText';
import { StyledBasicButton } from './BasicButton';

const PointButton = ({ children }: ReactProps) => {
  return (
    <StyledBasicButton>
      <PointText>{children}</PointText>
    </StyledBasicButton>
  );
};

export default PointButton;
