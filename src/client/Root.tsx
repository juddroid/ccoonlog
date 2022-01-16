import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from '../shared/App';

const Root = () => (
  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>
);

export default Root;
