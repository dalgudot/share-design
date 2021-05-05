import styled from 'styled-components';
import Canvas from '../../../components/canvas/canvas';
import { useThemeContext } from '../../../library/hooks/useThemeContext';

const CircleLoading = () => {
  const color = useThemeContext('gray1');

  const draw = (ctx: any, frameCount: number) => {
    // clearRect()로 기존 drawing 지워줌.
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = color;
    ctx.beginPath();
    // **는 지수 연산
    ctx.arc(100, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  return (
    <Container>
      <Canvas draw={draw} />
    </Container>
  );
};

export default CircleLoading;

const Container = styled.div`
  canvas {
    width: 100%;
    height: 100%;
  }
`;
