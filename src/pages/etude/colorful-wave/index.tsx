import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useCanvas } from '../../../library/hooks/useCanvas';

const ColorfulWave = () => {
  // [중요 - 왜 useState를 쓰지 않아도 되는가?] Ref를 이용해 가상 돔이 아닌 실제 돔에 접근하기 때문에 useState 훅을 활용하지 않고 let으로 정의한 변수의 값을 바꿀 수 있다.
  // -> 이는 가상 돔을 쓰는 리액트의 성능에 영향을 끼치기 때문에 고민이 필요
  // init

  let x = 1000;
  let y = 1000;
  let speed = 0.05;
  let cur = 0;
  let fixedY = y;
  let max = Math.random() * 100 + 150;

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();
    ctx.fillStyle = '#ff0000';
    // update();
    ctx.arc(ctx.canvas.width / 4, y / 2, 20, 0, 2 * Math.PI);

    // ctx.closePath();
    ctx.fill();
  };

  const update = () => {
    cur += speed;
    y = fixedY + Math.sin(cur) * max;
  };

  const canvasRef = useCanvas(draw, update, x, y);

  return (
    <>
      <Wrap>
        <Container x={x} y={y}>
          <canvas ref={canvasRef} />
        </Container>
      </Wrap>
    </>
  );
};

export default ColorfulWave;

// 가운데 정렬 위해
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; // 실제 활용 시에는 필요 없음
`;

const Container = styled.div<{ x: number; y: number }>`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: ${({ x }) => x / 2}px;
  height: ${({ y }) => y / 2}px;
  margin: 0 auto;

  canvas {
  }
`;
