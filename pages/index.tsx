import type { NextPage } from 'next';
import { DefaultButton } from '../stories/Atomics/Button';
import MUIButton from '../stories/Atomics/Button/MUIButton';

import Text from '../stories/Atomics/Text/Text';

const Index: NextPage = () => {
  return (
    <MUIButton variant={'outlined'} style={{ textTransform: 'none' }}>
      MUIButton
    </MUIButton>
  );
};

export default Index;
