import { Stack, StackProps } from '@mui/material';

interface MUIStackProps extends StackProps {
  children: React.ReactNode;
}

const MUIStack = ({ children, ...props }: MUIStackProps) => {
  return <Stack {...props}>{children}</Stack>;
};

export default MUIStack;
