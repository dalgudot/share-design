import { useEffect } from 'react';
import styled from 'styled-components';
import { useCanvas } from '../../../library/hooks/useCanvas';
import { Point } from './point';
import { Wave } from './wave';
import { WaveGroup } from './wave-group';

const WaveLoading = () => {
  const pixelRatio = window.devicePixelRatio; // Retina 대응
  let stageWidth = window.innerWidth * pixelRatio;
  let stageHeight = window.innerHeight * pixelRatio;
  //   console.log('stageWidth', stageWidth, 'stageHeight', stageHeight);

  // const { waveDraw } = Wave(stageWidth, stageHeight);
  const { waveGroupDraw } = WaveGroup(stageWidth, stageHeight);
  const canvasRef = useCanvas(waveGroupDraw, stageWidth, stageHeight);

  return (
    <>
      {/* <Div /> */}
      <canvas ref={canvasRef} />
    </>
  );
};

export default WaveLoading;

const Div = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ff0000;
`;
