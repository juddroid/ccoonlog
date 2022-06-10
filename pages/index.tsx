import type { NextPage } from 'next';
import MUIStack from '../stories/Atomics/Layout/MUIStack';
import { useTheme } from 'styled-components';
import { DefaultMUIButton } from '../stories/Atomics/Button';
import MUISwitch from '../stories/Atomics/Input/MUISwitch';
import { FormGroup, FormControlLabel } from '@mui/material';

const Index: NextPage = () => {
  const theme = useTheme();

  return (
    <FormGroup>
      <FormControlLabel control={<MUISwitch sx={{ m: 1 }} defaultChecked />} label="iOS style" />
    </FormGroup>
  );
};

export default Index;
