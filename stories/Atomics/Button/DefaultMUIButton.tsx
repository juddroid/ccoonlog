import { DefaultText } from '../Text';
import MUIButton, { MUIButtonProps } from './MUIButton';

const DefaultMUIButton = ({ children, ...props }: MUIButtonProps) => {
  return (
    <MUIButton variant={'outlined'} style={{ textTransform: 'none', borderRadius: 10 }} {...props}>
      <DefaultText>{children}</DefaultText>
    </MUIButton>
  );
};

export default DefaultMUIButton;
