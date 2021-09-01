import { Wave } from './wave';

export const WaveGroup = (stageWidth: number, stageHeight: number) => {
  const totalWaves = 3;
  const totalPoints = 6;
  const color = [
    'rgba(255, 0, 255, 0.2)',
    'rgba(255, 0, 255, 0.3)',
    'rgba(255, 0, 255, 0.4)',
  ];
  const waves: ((ctx: CanvasRenderingContext2D) => void)[] = [];

  const init = () => {
    for (let i = 0; i < totalWaves; i++) {
      const wave = Wave(i, totalPoints, color[i], stageWidth, stageHeight);
      waves[i] = wave;
    }
  };
  init();

  const waveGroupDraw = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < totalWaves; i++) {
      waves[i](ctx);
    }
  };

  return waveGroupDraw;
};
