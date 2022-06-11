import type { NextPage } from 'next';
import { useTheme } from 'styled-components';
import { FormGroup, FormControlLabel } from '@mui/material';
import { DarkModeMUISwitch, MUISwitch } from '../stories/Atomics/Input';

const Index: NextPage = () => {
  const theme = useTheme();

  return (
    <FormGroup>
      <FormControlLabel control={<MUISwitch sx={{ m: 2 }} defaultChecked />} label="switch" />
      <FormControlLabel control={<DarkModeMUISwitch sx={{ m: 2 }} defaultChecked />} label="darkmode_switch" />
    </FormGroup>
  );
};

export default Index;
