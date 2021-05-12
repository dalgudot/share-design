import { useEffect, useRef } from 'react';

// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
// 로직만 훅으로 구현
export const useCanvas = (
  draw: Function,
  update: Function,
  x: number,
  y: number
) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // canvas가 렌더링되기 전에는 canvasRef.current가 존재하지 않음.  -> component가 마운트될 때까지 기다려야 함(componentDidMount) -> useEffect로 처리
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d', { alpha: false })!;
    const pixelRatio = window.devicePixelRatio;
    let animationFrameId: number;

    const onResize = () => {
      // Retina 대응
      let stageWidth = x;
      let stageHeight = y;
      canvas.width = stageWidth * pixelRatio;
      canvas.height = stageHeight * pixelRatio;
      ctx.scale(pixelRatio, pixelRatio);

      // pixelRatio로 나눠줘 지정한 크기로 돌아오도록 하기
      canvas.style.width = stageWidth / pixelRatio + 'px';
      canvas.style.height = stageHeight / pixelRatio + 'px';
    };
    onResize();
    window.addEventListener('resize', onResize, false);

    const animate = () => {
      update();
      draw(ctx);
      // requestAnimationFrame라는 재귀 함수로 애니메이션 반복
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // clean-up function
    // 이 컴포넌트가 unmount됐을 때 AnimationFrame 취소
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onResize, false);
    };
  }, []);
  // [] 빈 배열은 컴포넌트가 마운트된 후 1번만 실행된다고 useEffect에 전달
  // [] 없이 첫 번째 인수 {...}만 전달하면 업데이트할 때마다 호출
  // draw 함수 바뀔 때마다 호출하도록

  // canvas Ref 받아오기 위해 return
  return canvasRef;
};

// 캔버스 중앙 정렬
// let stageWidth = window.innerWidth;
// let stageHeight = window.innerHeight;
// let x = stageWidth / 2;
// let y = stageHeight / 2;

// let stageWidth = document.body.clientWidth;
// let stageHeight = document.body.clientHeight;

// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html
// 느낌표(!)는 non-null assertion, 특정 코드가 null, undefined가 아니다라는 것을 사용자가 타입스크립트에게 얘기해주는 것
// const canvas = canvasRef.current!;
