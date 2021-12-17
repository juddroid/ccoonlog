import { BasicText, BasicButton } from '../Atoms';
import PointText from '../Atoms/Text/PointText';

type AsideButtonType = {
  id?: string;
  name: string;
  point?: boolean;
  onClick?: any;
};

const AsideButton = ({ id, name, point, onClick }: AsideButtonType) => {
  return (
    <BasicButton {...{ id, onClick }}>
      {point ? <PointText>{name}</PointText> : <BasicText>{name}</BasicText>}
    </BasicButton>
  );
};

export default AsideButton;
