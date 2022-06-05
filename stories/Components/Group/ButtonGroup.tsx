import { DefaultButton } from '../../Atomics/Button';
import Group from './Group';

interface ButtonGroupProps {
  buttonNameList: string[];
  style?: React.CSSProperties;
}

const ButtonGroup = ({ buttonNameList, style, ...props }: ButtonGroupProps) => {
  return (
    <Group direction={'column'} gap={16} style={{ width: 'fit-content', ...style }} {...props}>
      {buttonNameList.map((buttonName) => (
        <DefaultButton style={{ minWidth: 300 }}>{buttonName}</DefaultButton>
      ))}
    </Group>
  );
};

export default ButtonGroup;
