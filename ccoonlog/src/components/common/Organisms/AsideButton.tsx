import { BasicText, StyledButton } from '../Atoms';
import PointText from '../Atoms/Text/PointText';

type AsideButtonType = {
  id?: string;
  name: string;
  point?: boolean;
  onClick?: any;
};

const AsideButton = ({ id, name, point, onClick }: AsideButtonType) => {
  return (
    <StyledButton {...{ id, onClick }}>
      {point ? <PointText>{name}</PointText> : <BasicText>{name}</BasicText>}
    </StyledButton>
  );
};

export default AsideButton;
