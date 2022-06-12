import type { NextPage } from 'next';
import { useTheme } from 'styled-components';
import { FormGroup, FormControlLabel } from '@mui/material';
import { DarkModeMUISwitch, MUISwitch } from '../stories/Atomics/Input';
import MUIContainer from '../stories/Atomics/Layout/MUIContainer';

const Index: NextPage = () => {
  const theme = useTheme();

  return (
    <MUIContainer style={{ background: 'red' }}>
      <FormGroup>
        <FormControlLabel control={<MUISwitch sx={{ m: 2 }} defaultChecked />} label="switch" />
        <FormControlLabel control={<DarkModeMUISwitch sx={{ m: 2 }} defaultChecked />} label="darkmode_switch" />
      </FormGroup>
    </MUIContainer>
  );
};

export default Index;
