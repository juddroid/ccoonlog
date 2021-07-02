import React, { useState } from 'react';
import { ReactToggle as S } from '../../styles/styles';
import ReactToggleThumb from './ReactToggleThumb';
import ReactToggleTrack from './ReactToggleTrack';

const ReactToggle = () => {
  const [modePosition, setModePosition] = useState(0);

  const onToggleMode = () => {
    if (modePosition === 0) return setModePosition(26);
    setModePosition(0);
  };
  return (
    <S.ReactToggle onClick={onToggleMode}>
      <ReactToggleTrack />
      <S.ReactToggleTrackCheck />
      <ReactToggleThumb {...{ modePosition }} />
    </S.ReactToggle>
  );
};

export default ReactToggle;
