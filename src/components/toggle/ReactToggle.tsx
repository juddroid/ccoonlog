import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { displayState } from '../../store/Recoil';
import { ReactToggle as S } from '../../styles/styles';
import ReactToggleThumb from './ReactToggleThumb';
import ReactToggleTrack from './ReactToggleTrack';
import { LOCAL_STORAGE as LOCAL } from '../../const';

const ReactToggle = () => {
  const [modePosition, setModePosition] = useState(0);
  const [display, setDisplay] = useRecoilState(displayState);

  const onToggleModeButton = () => {
    setModePosition(modePosition === 0 ? 26 : 0);
    setDisplay((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL.DISPLAY, JSON.stringify(display));
  }, [display]);

  return (
    <S.ReactToggle onClick={onToggleModeButton}>
      <ReactToggleTrack />
      <S.ReactToggleTrackCheck />
      <ReactToggleThumb {...{ modePosition }} />
    </S.ReactToggle>
  );
};

export default ReactToggle;
