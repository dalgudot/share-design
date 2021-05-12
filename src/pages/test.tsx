import styled from 'styled-components';
import {
  draw,
  WaveGroupResize,
  WaveGroup,
} from '../components/canvas/wave-group';

const Test = () => {
  WaveGroup();
  WaveGroupResize();
  //   draw();

  return (
    <>
      <Canvas />
    </>
  );
};

export default Test;

const Canvas = styled.canvas`
  width: 100vw;
  height: 100vh;
`;
