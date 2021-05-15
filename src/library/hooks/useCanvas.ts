import { useEffect, useRef } from 'react';

// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
export const useCanvas = (
  draw: Function,
  stageWidth: number,
  stageHeight: number
) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
    let requestId: number;

    // 내가 쓰려고 하는 형태에서는 Resize 함수가 필요없음. 초기화만 있으면 됨.
    const Resize = () => {
      const pixelRatio = window.devicePixelRatio;
      canvas.width = stageWidth * pixelRatio;
      canvas.height = stageHeight * pixelRatio;

      ctx.scale(pixelRatio, pixelRatio); // Retina 대응

      canvas.style.width = stageWidth + 'px';
      canvas.style.height = stageHeight + 'px';
    };
    Resize(); // 초기화
    // window.addEventListener('resize', Resize, false);

    const animate = () => {
      ctx.clearRect(0, 0, stageWidth, stageHeight);
      draw(ctx);
      requestId = window.requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(requestId);
      // window.removeEventListener('resize', Resize, false);
    };
  }, []);

  return canvasRef;
};

// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html
// 느낌표(!)는 non-null assertion, 특정 코드가 null, undefined가 아니다라는 것을 사용자가 타입스크립트에게 얘기해주는 것
// const canvas = canvasRef.current!;
