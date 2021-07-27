import { About as S } from '../styles/styles';
import { Viewer } from '@toast-ui/react-editor';
import about from '../store/about';

const About = () => {
  return (
    <S.About>
      <Viewer initialValue={about} />
    </S.About>
  );
};

export default About;
