import * as materialColors from '@mui/material/colors';
import _ from 'lodash';

interface IColor {
  [key: string]: any;
}

const colors: IColor = _.merge(materialColors, {
  hotPink: '#d23669',
});

export default colors;
