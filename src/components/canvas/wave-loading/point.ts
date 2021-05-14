export const Point = (
  index: number,
  stageWidth: number,
  stageHeight: number
) => {
  let x = stageWidth / 2;
  let y = stageHeight / 2;
  let fixedY = y;
  let speed = 0.05;
  let 초기위치 = index;
  let max = Math.random() * 50 + 15;

  const pointUpdate = () => {
    초기위치 += speed;
    y = fixedY + Math.sin(초기위치) * max;

    return y;
  };

  return { x, y, pointUpdate };
};
