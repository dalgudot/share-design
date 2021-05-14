import { useCanvas } from '../../../library/hooks/useCanvas';
import { WaveGroup } from './wave-group';

const WaveLoading = () => {
  const pixelRatio = window.devicePixelRatio; // Retina 대응
  // let stageWidth = window.innerWidth * 2;
  // let stageHeight = window.innerHeight * 2;
  let stageWidth = 100 * 2;
  let stageHeight = 100 * 2;
  const { waveGroupDraw } = WaveGroup(stageWidth, stageHeight);
  const canvasRef = useCanvas(waveGroupDraw, stageWidth, stageHeight);

  console.log('stageWidth', stageWidth, 'stageHeight', stageHeight);

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
};

export default WaveLoading;
