import type { NextPage } from 'next';
import MUIButton from '../stories/Atomics/Button/MUIButton';
import MUIStack from '../stories/Atomics/Layout/MUIStack';
import { useTheme } from 'styled-components';

const Index: NextPage = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <MUIStack spacing={2}>
      <MUIButton variant={'outlined'} style={{ textTransform: 'none', color: theme.point }}>
        MUIButton
      </MUIButton>
      <MUIButton variant={'outlined'} style={{ textTransform: 'none' }}>
        MUIButton
      </MUIButton>
      <MUIButton variant={'outlined'} style={{ textTransform: 'none' }}>
        MUIButton
      </MUIButton>
    </MUIStack>
  );
};

export default Index;
