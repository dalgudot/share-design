import { Point } from './point';

export const Wave = (
  index: number,
  totalPoints: number,
  color: string,
  stageWidth: number,
  stageHeight: number
) => {
  // const color = 'rgba(255, 0, 0, 0.4)';
  let points: {
    x: number;
    y: number;
    pointUpdate: Function;
  }[] = []; // 각 점을 담는 핵심 배열
  // const totalPoints = 6;

  const init = () => {
    const pointGap = stageWidth / (totalPoints - 1);

    for (let i = 0; i < totalPoints; i++) {
      // Point 첫 번째 인자에 WaveGroup에서 받아온 index 더해줌
      // stageHeight는 왜 2를 나눠야 하는지 고민 필요
      const point = Point(index + i, pointGap * i, stageHeight / 2);
      points[i] = point;
    }
  };
  init();

  const waveDraw = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.strokeStyle = color;

    let prevX = points[0].x;
    let prevY = points[0].y;

    ctx.moveTo(prevX, prevY);

    // 첫 번째 좌표는 prevX와 prevY로, 마지막 좌표는 if문으로 정지한 점 만듦.
    // for문에서 totalPoints - 1 만드는 것도 하나의 방법
    for (let i = 1; i < totalPoints; i++) {
      if (i < totalPoints - 1) {
        // 문제점: y가 update되지 않는다
        // update한 pointUpdate()에서 y return해 를 y에 업데이트시켜준다,
        points[i].y = points[i].pointUpdate();
      }

      let x = points[i].x;
      let y = points[i].y;

      const centerX = (prevX + x) / 2;
      const centerY = (prevY + y) / 2;
      // ctx.lineTo(centerX, centerY);
      ctx.quadraticCurveTo(prevX, prevY, centerX, centerY);

      prevX = x;
      prevY = y;
    }

    // for문 돌리고 난 뒤 가장 마지막 점으로 연결
    ctx.lineTo(prevX, prevY);
    // 화면 가장 오른쪽 아래 좌표와 연결
    ctx.lineTo(stageWidth, stageHeight);
    // 화면 가장 왼쪽 아래 좌표와 연결
    ctx.lineTo(points[0].x, stageHeight);
    ctx.fill();
    // 화면 가장 왼쪽 아래 좌표(현재 좌표)와 시작 좌표 연결
    // fill() 메소드는 작동으로 닫힘.
    // ctx.closePath();
  };

  return { waveDraw };
};
