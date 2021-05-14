export const Point = (
  index: number,
  stageWidth: number,
  stageHeight: number
) => {
  let x = stageWidth / 2;
  let y = stageHeight / 2;
  let fixedY = y;
  let speed = 0.1;
  let 초기위치 = index;
  let max = Math.random() * 100 + 150;

  const pointDraw = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    // ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = '#ff0000';
    ctx.fill();

    // pointUpdate();
  };

  const pointUpdate = () => {
    초기위치 += speed;
    y = fixedY + Math.sin(초기위치) * max;
  };

  return { x, y, pointDraw, pointUpdate };
};
