import { SwitchProps, Switch } from '@mui/material';

const MUISwitch = (props: SwitchProps) => {
  return <Switch focusVisibleClassName=".Mui-focusVisible" {...props} />;
};

export default MUISwitch;
