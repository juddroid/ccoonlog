import { About as S } from '../styles/styles';
import { Viewer } from '@toast-ui/react-editor';
import about from '../store/about';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

const About = () => {
  return (
    <S.About>
      <Viewer initialValue={about} />
    </S.About>
  );
};

export default About;
