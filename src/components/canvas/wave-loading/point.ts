export const Point = (
  index: number,
  stageWidth: number,
  stageHeight: number
) => {
  let x = stageWidth;
  let y = stageHeight / 2;
  let fixedY = y;
  let speed = 0.06;
  let radian = index;
  let amplitude = Math.random() * 18;

  console.log(amplitude);

  const pointUpdate = () => {
    radian += speed;
    y = amplitude * Math.sin(radian) + fixedY;

    return y;
  };

  return { x, y, pointUpdate };
};

// y는 세로에서 중간으로 오도록 만들기

// Math.random() 메소드는 0 이상 1 미만의 부동소숫점 의사 난수를 반환
// amplitude는 렌더될 때 고정됨. 새로운 렌더마다 바뀜.

// Math.sin() 메소드는 라디안인 각도의 사인 값인 -1과 1 사이의 수를 반환
