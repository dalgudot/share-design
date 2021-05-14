import { Wave } from './wave';

export const WaveGroup = (stageWidth: number, stageHeight: number) => {
  const totalWaves = 3;
  const totalPoints = 6;
  const color = [
    'rgba(255, 0, 0, 0.5)',
    'rgba(255, 255, 0, 0.5)',
    'rgba(0, 255, 255, 0.5)',
  ];
  const waves: {
    waveDraw: Function;
  }[] = []; // 각 wave를 담는 핵심 배열

  const init = () => {
    for (let i = 0; i < totalWaves; i++) {
      const wave = Wave(i, totalPoints, color[i], stageWidth, stageHeight);
      waves[i] = wave;
    }
  };
  init();

  const waveGroupDraw = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < totalWaves; i++) {
      const wave = waves[i];
      wave.waveDraw(ctx);
    }
  };

  return { waveGroupDraw };
};
