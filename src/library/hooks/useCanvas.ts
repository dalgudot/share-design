import { useEffect, useRef, useState } from 'react';

// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
export const useCanvas = (
  draw: Function,
  stageWidth: number,
  stageHeight: number
) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // console.log('component', canvasRef);

  // canvas가 렌더링되기 전에는 canvasRef.current, document.body.clientWidth, document.body.clientHeight가 존재하지 않음.  -> component가 마운트될 때까지 기다려야 함(componentDidMount) -> useEffect로 처리
  useEffect(() => {
    // console.log('useEffect', canvasRef);
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d', {
      alpha: false,
    })!;
    let requestId: number;

    // 내가 쓰려고 하는 형태에서는 Resize 함수가 필요없음. 초기화만 있으면 됨.
    // 크기를 고정하기 때문에.
    const Resize = () => {
      // 미리 pixelRatio 곱해서 옴
      canvas.width = stageWidth;
      canvas.height = stageHeight;

      // Retina 대응
      // const pixelRatio = window.devicePixelRatio;
      // ctx.scale(pixelRatio, pixelRatio);
      ctx.scale(2, 2);

      // pixelRatio로 나눠줘 지정한 크기로 돌아오도록 하기
      // https://webglfundamentals.org/webgl/lessons/ko/webgl-resizing-the-canvas.html
      // canvas.style.width = stageWidth + 'px';
      // canvas.style.height = stageHeight + 'px';
    };
    Resize(); // 초기화
    // window.addEventListener('resize', Resize, false);

    const animate = () => {
      // clearRect 영향으로 검정 지워지고 뒤에 다른 배경색 나오는 듯(?)
      ctx.clearRect(0, 0, stageWidth / 2, stageHeight / 2);
      draw(ctx);
      requestId = window.requestAnimationFrame(animate);
    };
    animate();
    // console.log('mount', requestId);

    // clean-up function
    // 이 컴포넌트가 unmount됐을 때 AnimationFrame 취소
    return () => {
      window.cancelAnimationFrame(requestId);
      // window.removeEventListener('resize', Resize, false);
    };
  }, []);
  // [] 빈 배열은 컴포넌트가 마운트된 후 1번만 실행된다고 useEffect에 전달
  // [] 없이 첫 번째 인수 {...}만 전달하면 업데이트할 때마다 호출
  // draw 함수 바뀔 때마다 호출하도록

  // canvas Ref 받아오기 위해 return
  return canvasRef;
};

// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html
// 느낌표(!)는 non-null assertion, 특정 코드가 null, undefined가 아니다라는 것을 사용자가 타입스크립트에게 얘기해주는 것
// const canvas = canvasRef.current!;
