import { useEffect, useRef } from 'react';

// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
// 로직만 훅으로 구현
export const useCanvasWithOptions = (draw: Function, options: any = {}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // canvas가 렌더링되기 전에는 canvasRef.current가 존재하지 않음.  -> component가 마운트될 때까지 기다려야 함(componentDidMount) -> useEffect로 처리
  useEffect(() => {
    // [중요] any를 해야 ctx.fillStyle에 타입 에러 안 남
    // https://stackoverflow.com/questions/13669404/typescript-problems-with-type-system
    const canvas: any = canvasRef.current;
    // console.log(canvas);
    const ctx = canvas.getContext(options?.context || '2d');
    let frameCount = 0;
    let animationFrameId: number;

    // Retina 대응 - 위치 바뀜
    // https://velog.io/@cjswoqkrwls/Canvas
    // 위 링크 참고해 변경 필요
    const pixelRatio = window.devicePixelRatio;
    let stageWidth = document.body.clientWidth;
    let stageHeight = document.body.clientHeight;
    canvas.width = stageWidth * pixelRatio;
    canvas.height = stageWidth * pixelRatio;
    ctx.scale(pixelRatio, pixelRatio);
    // canvas.width = stageWidth * 2;
    // canvas.height = stageHeight * 2;
    // ctx.scale(2, 2);
    // Retina 대응

    const resize = () => {
      stageWidth = document.body.clientWidth;
      stageHeight = document.body.clientHeight;

      canvas.width = stageWidth * pixelRatio;
      canvas.height = stageHeight * pixelRatio;

      ctx.scale(pixelRatio, pixelRatio);

      canvas.style.width = stageWidth + 'px';
      canvas.style.height = stageHeight + 'px';
    };

    window.addEventListener('resize', resize);

    const render = () => {
      frameCount++;
      draw(ctx, frameCount);
      // requestAnimationFrame라는 재귀 함수로 애니메이션 반복
      animationFrameId = window.requestAnimationFrame(render);
    };
    // 렌더 함수 실행
    render();

    // clean-up function
    // 이 컴포넌트가 unmount됐을 때 AnimationFrame 취소
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [draw]);
  // [] 빈 배열은 컴포넌트가 마운트된 후 1번만 실행된다고 useEffect에 전달
  // [] 없이 첫 번째 인수 {...}만 전달하면 업데이트할 때마다 호출
  // draw 함수 바뀔 때마다 호출하도록

  return canvasRef;
};

export function resizeCanvasToDisplaySize(canvas: any) {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return true; // here you can return some usefull information like delta width and delta height instead of just true
    // this information can be used in the next redraw...
  }

  return false;
}

export function resizeCanvas(canvas: any) {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window;
    const context = canvas.getContext('2d');
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.scale(ratio, ratio);
    return true;
  }

  return false;
}
