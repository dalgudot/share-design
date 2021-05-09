import styled from 'styled-components';
import Canvas from '../../canvas/canvas';
import { useThemeContext } from '../../../library/hooks/useThemeContext';
import { useRef } from 'react';

const CircleLoadingCanvas = () => {
  const color = useThemeContext('gray1');
  const ContainerRef = useRef<HTMLDivElement>(null);

  const draw = (ctx: CanvasRenderingContext2D) => {
    const x = ContainerRef.current?.offsetWidth! / 2;
    const y = ContainerRef.current?.offsetHeight! / 2;
    // let radius = 20 * Math.sin(frameCount * 0.05) ** 2;
    let radius = 20;
    let startAngle = 0;
    let endAngle = 2 * Math.PI;

    // clearRect()로 기존 drawing 지워줌.
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = color!;
    ctx.beginPath();
    // **는 지수 연산
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.fill();
  };

  return (
    <>
      {/* <Container ref={ContainerRef}>
        <Canvas draw={draw} />
      </Container> */}
    </>
  );
};

export default CircleLoadingCanvas;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  margin: 200px auto 0;
  position: relative;
  overflow-x: hidden;

  canvas {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
