import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useCanvas } from '../../../library/hooks/useCanvas';

const ColorfulWave = () => {
  // [중요 - 왜 useState를 쓰지 않아도 되는가?] Ref를 이용해 가상 돔이 아닌 실제 돔에 접근하기 때문에 useState 훅을 활용하지 않고 let으로 정의한 변수의 값을 바꿀 수 있다.
  // -> 이는 가상 돔을 쓰는 리액트의 성능에 영향을 끼치기 때문에 고민이 필요
  // init
  let x = window.innerWidth / 2; // x좌표
  let y = window.innerWidth / 2; // y좌표
  let speed = 0.1;
  let cur = 0;
  let fixedY = y;
  let max = Math.random() * 100 + 150;

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    update();
    let pixelRatio = window.devicePixelRatio;

    ctx.beginPath();
    ctx.fillStyle = '#ff0000';
    ctx.arc(ctx.canvas.width / pixelRatio / 2, y, 10, 0, 2 * Math.PI);
    ctx.fill();
  };

  const update = () => {
    cur += speed;
    y = fixedY + Math.sin(cur) * max;
  };

  const canvasRef = useCanvas(draw);

  return (
    // <Wrap>
    //  canvas는 부모 무시
    <Container>
      <canvas ref={canvasRef} />
    </Container>
    // </Wrap>
  );
};

export default ColorfulWave;

const Wrap = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

const Container = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh; */

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  canvas {
    /* position: absolute; */
  }
`;
