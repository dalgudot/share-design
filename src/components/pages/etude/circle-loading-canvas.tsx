import styled from 'styled-components';
import Canvas from '../../canvas/canvas';
import { useThemeContext } from '../../../library/hooks/useThemeContext';

const CircleLoadingCanvas = () => {
  const color = useThemeContext('gray1');

  let stageWidth = window.innerWidth;
  let stageHeight = window.innerHeight;

  const draw = (ctx: any, frameCount: number) => {
    let x = stageWidth / 2; // x coordinate
    let y = stageHeight / 2; // y coordinate
    let radius = 20 * Math.sin(frameCount * 0.05) ** 2; // Arc radius
    let startAngle = 0; // Starting point on circle
    let endAngle = 2 * Math.PI; // End point on circle
    // let counterclockwise =            Draw counterclockwise

    // clearRect()로 기존 drawing 지워줌.
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = color;
    ctx.beginPath();
    // **는 지수 연산
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.fill();
  };

  return (
    // <Container>
    <Canvas draw={draw} />
    // </Container>
  );
};

export default CircleLoadingCanvas;

const Container = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  position: relative;

  canvas {
    position: absolute;
    top: 20%;
  }
`;
