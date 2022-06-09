import { Box, BoxProps } from '@mui/material';

interface MUIBoxProps extends BoxProps {
  children: React.ReactNode;
}

const MUIBox = ({ children, ...props }: MUIBoxProps) => {
  return <Box {...props}>{children}</Box>;
};

export default MUIBox;
