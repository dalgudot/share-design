import { PointClass } from './point-class';

export class WaveClass {
  index: number;
  totalPoints: number;
  color: string;
  points: any;
  stageWidth: number;
  stageHeight: number;
  centerX: number;
  centerY: number;
  pointGap: number;
  pointClass: any;

  constructor(index: number, totalPoints: number, color: string) {
    this.index = index;
    this.totalPoints = totalPoints;
    this.color = color;
    this.points = [];
    this.stageWidth = 0;
    this.stageHeight = 0;
    this.centerX = 0;
    this.centerY = 0;
    this.pointGap = 0;
    this.pointClass = {};
  }

  resize(stageWidth: number, stageHeight: number) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    // 어떤 계산
    this.pointGap = this.stageWidth / (this.totalPoints - 1);

    this.init();
  }

  init() {
    this.points = [];

    for (let i = 0; i < this.totalPoints; i++) {
      const point = new PointClass(
        this.index + i,
        this.pointGap * i,
        this.centerY
      );
      this.points[i] = point;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = this.color;

    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    ctx.moveTo(prevX, prevY);

    for (let i = 1; i < this.totalPoints; i++) {
      if (i < this.totalPoints - 1) {
        this.points[i].update();
      }

      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;

      ctx.quadraticCurveTo(prevX, prevY, cx, cy);

      prevX = this.points[i].x;
      prevY = this.points[i].y;
    }

    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.stageHeight);
    ctx.fill();
    ctx.closePath();
  }
}
