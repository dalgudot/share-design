import { WaveClass } from './wave-class';

export class WaveGroupClass {
  totalWaves: number;
  totalPoints: number;
  color: string[];
  wave: any;
  waves: any;

  constructor() {
    this.totalWaves = 1;
    this.totalPoints = 6;

    this.color = [
      'rgba(255, 0, 0, 0.4)',
      'rgba(255, 255, 0, 0.4)',
      'rgba(0, 255, 255, 0.4)',
    ];

    this.wave = [];

    for (let i = 0; i < this.totalWaves; i++) {
      const wave = new WaveClass(i, this.totalPoints, this.color[i]);
      this.waves[i] = wave;
    }
  }

  resize(stageWidth: number, stageHeight: number) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.resize(stageWidth, stageHeight);
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
}
