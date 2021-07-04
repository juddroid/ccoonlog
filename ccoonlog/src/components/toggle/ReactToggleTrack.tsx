import styled from 'styled-components';
import { IoMoon, IoSunny } from 'react-icons/io5';

const ReactToggleTrack = () => {
  return (
    <ReactToggleTrackStyle>
      <IoMoon size={14} color="yellow" />
      <IoSunny size={16} color="yellow" />
    </ReactToggleTrackStyle>
  );
};

export default ReactToggleTrack;

const ReactToggleTrackStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50px;
  height: 24px;
  padding: 0;
  border-radius: 30px;
  background-color: #0f1114;
  transition: all 0.2s ease;
`;
