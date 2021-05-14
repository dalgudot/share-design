import { Point } from './point';

export const Wave = (stageWidth: number, stageHeight: number) => {
  const color = '#ff0000';
  const points: {
    x: number;
    y: number;
    pointDraw: Function;
    pointUpdate: Function;
  }[] = []; // 각 점을 담는 핵심 배열
  const totalPoints = 6;

  const init = () => {
    const pointGap = stageWidth / (totalPoints - 1);

    for (let i = 0; i < totalPoints; i++) {
      // stageHeight는 왜 2를 나눠야 하는지 고민 필요
      const point = Point(i, pointGap * i, stageHeight / 2);
      points[i] = point;
    }
  };
  init();

  const waveDraw = (ctx: CanvasRenderingContext2D) => {
    // console.log(points);
    // 1개만 그릴 때
    // pointDraw(ctx);
    let prevX = points[0].x;
    let prevY = points[0].y;
    // console.log('prevX', prevX, 'prevY', prevY);

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.strokeStyle = color;

    // ctx.moveTo(x, y) Begin first sub-path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo
    // points[1].pointDraw(ctx);
    // ctx.moveTo(points[0].x, points[0].y);
    // console.log('points[1].x', points[1].x, 'points[1].y', points[1].y);

    // points[3].pointDraw(ctx);
    // ctx.lineTo(points[3].x, points[3].y);
    // console.log('points[3].x', points[3].x, 'points[3].y', points[3].y);

    ctx.beginPath(); // Start a new path
    ctx.moveTo(points[1].x, points[1].y); // Move the pen to (30, 50)
    ctx.lineTo(points[3].x, points[3].y); // Draw a line to (150, 100)

    ctx.stroke();
    ctx.closePath();

    // for (let i = 0; i < totalPoints; i++) {
    //   points[i].pointUpdate(ctx);
    // }

    // 첫 번째 좌표는 prevX와 prevY로, 마지막 좌표는 if문으로 정지한 점 만듦.
    // for문에서 totalPoints - 1 만드는 것도 하나의 방법
    // for (let i = 1; i < totalPoints; i++) {
    //   if (i < totalPoints - 1) {
    //     points[i].pointDraw(ctx);
    //   }

    //   let x = points[i].x;
    //   let y = points[i].y;
    //   console.log('x', x, 'y', y);

    //   const cx = (prevX + x) / 2;
    //   const cy = (prevY + y) / 2;
    //   console.log('cx', cx, 'cy', cy);

    //   // ctx.moveTo(prevX, prevY)로 만든 최초 점의 위치에서 lineTo(x, y)로 각 중간 점을 이어준다.
    //   ctx.lineTo(cx, cy);
    //   // ctx.lineTo(x, y);

    //   prevX = x;
    //   prevY = y;

    //   // console.log('NewPrevX', prevX, 'NewPrevY', prevY);
    // }

    // points[totalPoints - 1].pointDraw(ctx);

    // console.log('lastPrevX', prevX, 'lastPrevY', prevY);
    // for문 돌리고 난 뒤 가장 마지막 점으로 연결
    // ctx.lineTo(prevX, prevY);
    // ctx.lineTo(stageWidth, stageHeight);
    // ctx.lineTo(points[0].x, stageHeight);
    // ctx.fill();
    // ctx.closePath();
  };

  // const waveUpdate = () => {
  //   pointUpdate();
  // };

  return { waveDraw };
};
