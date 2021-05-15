import styled from 'styled-components';
import { useCanvas } from '../../../library/hooks/useCanvas';
import { WaveGroup } from './wave-group';

const WaveLoading = ({ marginTop }: { marginTop?: string }) => {
  const pixelRatio = window.devicePixelRatio; // Retina 대응
  // let stageWidth = window.innerWidth * 2;
  // let stageHeight = window.innerHeight * 2;
  let stageWidth = 48;
  let stageHeight = 48;
  const { waveGroupDraw } = WaveGroup(stageWidth, stageHeight);
  const canvasRef = useCanvas(waveGroupDraw, stageWidth, stageHeight);

  // console.log('stageWidth', stageWidth, 'stageHeight', stageHeight);

  return (
    <Wrap width={stageWidth} height={stageHeight} marginTop={marginTop}>
      <canvas ref={canvasRef} />
    </Wrap>
  );
};

export default WaveLoading;

const Wrap = styled.div<{ width: number; height: number; marginTop?: string }>`
  margin: 0 auto;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: transparent;
  border-radius: 50%;
  margin-top: ${({ marginTop }) => marginTop};

  canvas {
    border-radius: 50%;
  }
`;
