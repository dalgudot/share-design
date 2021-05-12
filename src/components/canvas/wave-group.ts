import { Wave } from './wave';

const totalWaves = 3;
let waves: object[] = [];

export const WaveGroup = () => {
  const totalPoints = 6;
  const color = [
    'rgba(255, 0, 0, 0.4)',
    'rgba(255, 255, 0, 0.4)',
    'rgba(0, 255, 255, 0.4)',
  ];

  for (let i = 0; i < totalWaves; i++) {
    const wave = Wave(i, totalPoints, color[i]);
    waves[i] = wave;
    // console.log(waves[i]);
  }
};

export const WaveGroupResize = (stageWidth: number, stageHeight: number) => {
  for (let i = 0; i < totalWaves; i++) {
    const wave = waves[i];
    console.log(waves[i]);
    // wave().WaveResize(stageWidth, stageHeight);
  }
};

export const draw = () => {
  console.log('draw');
};
