import { PointClass } from './point-class';

export class WaveClass {
  stageWidth: any = 100;
  stageHeight: any = 100;
  centerX: any = 100;
  centerY: any = 100;
  pointClass: any;

  constructor() {}

  resize(stageWidth: number, stageHeight: number) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;
  }

  init() {
    this.pointClass = new PointClass(this.centerX, this.centerY);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = '#ffffff';

    this.pointClass.update();

    ctx.arc(this.pointClass.x, this.pointClass.y, 30, 0, 2 * Math.PI);
    ctx.fill();
  }
}
