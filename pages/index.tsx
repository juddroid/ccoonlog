import type { NextPage } from 'next';
import { Button, DefaultButton } from '../stories/Atomics/Button';

import Text from '../stories/Atomics/Text/Text';

const Index: NextPage = () => {
  return <DefaultButton block>Text</DefaultButton>;
};

export default Index;
