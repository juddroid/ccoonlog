import { IoMoon, IoSunny } from 'react-icons/io5';
import { ReactToggle as S } from '../../styles/styles';

const ReactToggleTrack = () => {
  return (
    <S.ReactToggleTrack>
      <IoMoon size={14} color="yellow" />
      <IoSunny size={16} color="yellow" />
    </S.ReactToggleTrack>
  );
};

export default ReactToggleTrack;
