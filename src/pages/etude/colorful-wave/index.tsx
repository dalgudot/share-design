import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { WaveClass } from '../../../components/pages/etude/colorful-wave/wave-class';

const wave = new WaveClass();

const ColorfulWave = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let canvas: any = canvasRef.current;
  const ctx = canvas?.getContext('2d');

  console.log('wave', wave);

  useEffect(() => {
    window.addEventListener('resize', () => resize(), false);
    canvas && resize();
    requestAnimationFrame(animate);
    console.log('실행');

    return () => {
      window.addEventListener('resize', () => resize(), false);
    };
  }, [canvas]);

  const stageWidth = document.body.clientWidth;
  const stageHeight = document.body.clientHeight;

  const resize = () => {
    if (canvas !== null) {
      // retina 대응
      canvas.width = stageWidth * 2;
      canvas.height = stageHeight * 2;
      ctx?.scale(2, 2);

      wave.resize(stageWidth, stageHeight);
    }
  };

  const animate = (t: any): any => {
    ctx?.clearRect(0, 0, stageWidth, stageHeight);

    ctx && wave.draw(ctx);

    canvas = requestAnimationFrame(animate);
  };

  return (
    <>
      <canvas ref={canvasRef}></canvas>
    </>
  );
};

export default ColorfulWave;
