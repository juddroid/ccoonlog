import { Container, ContainerProps } from '@mui/material';
import MUIBox from './MUIBox';

export interface MUIContainerProps extends ContainerProps {
  children: React.ReactNode;
}

const MUIContainer = ({ children, ...props }: MUIContainerProps) => {
  return (
    <Container disableGutters {...props}>
      <MUIBox sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>{children}</MUIBox>
    </Container>
  );
};

export default MUIContainer;
