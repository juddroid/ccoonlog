import type { NextPage } from 'next';
import MUIStack from '../stories/Atomics/Layout/MUIStack';
import { useTheme } from 'styled-components';
import { DefaultMUIButton } from '../stories/Atomics/Button';
import MUISwitch from '../stories/Atomics/Input/MUISwitch';

const Index: NextPage = () => {
  const theme = useTheme();

  return (
    <MUIStack spacing={2}>
      <DefaultMUIButton
        variant={'outlined'}
        style={{ textTransform: 'none', color: theme.point, borderColor: theme.point }}
      >
        MUIButton
      </DefaultMUIButton>
      <DefaultMUIButton variant={'outlined'} style={{ textTransform: 'none' }}>
        MUIButton
      </DefaultMUIButton>
      <DefaultMUIButton variant={'outlined'} style={{ textTransform: 'none' }}>
        MUIButton
      </DefaultMUIButton>
      <MUISwitch />
    </MUIStack>
  );
};

export default Index;
