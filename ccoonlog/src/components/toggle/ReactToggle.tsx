import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { displayState } from '../../store/Recoil';
import { ReactToggle as S } from '../../styles/styles';
import ReactToggleThumb from './ReactToggleThumb';
import ReactToggleTrack from './ReactToggleTrack';

const ReactToggle = () => {
  const [modePosition, setModePosition] = useState(0);
  const setDisplayState = useSetRecoilState(displayState);

  const onToggleModeButton = () => {
    setModePosition(modePosition === 0 ? 26 : 0);
    setDisplayState((prev) => !prev);
  };
  return (
    <S.ReactToggle onClick={onToggleModeButton}>
      <ReactToggleTrack />
      <S.ReactToggleTrackCheck />
      <ReactToggleThumb {...{ modePosition }} />
    </S.ReactToggle>
  );
};

export default ReactToggle;
