import styled from 'styled-components';
import { useCanvas } from '../useCanvas';
import { WaveGroup } from './wave-group';

const WaveLoading = ({ marginTop }: { marginTop?: string }) => {
  const stageWidth = 48;
  const stageHeight = 48;
  const draw = WaveGroup(stageWidth, stageHeight);
  const canvasRef = useCanvas(draw, stageWidth, stageHeight);

  return (
    <Wrap width={stageWidth} height={stageHeight} marginTop={marginTop}>
      <canvas ref={canvasRef} />
    </Wrap>
  );
};

export default WaveLoading;

const Wrap = styled.div<{ width: number; height: number; marginTop?: string }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin: ${({ marginTop }) => marginTop ?? 0} auto 0;

  canvas {
    border-radius: 50%;
    background-color: rgba(255, 0, 255, 0.1);
  }
`;
