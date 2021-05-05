import { useCanvasWithOptions } from '../../library/hooks/useCanvasWithOptions';

// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
const Canvas = ({ draw, options }: { draw: Function; options?: any }) => {
  // options는 webgl context 쓸 때 활용 가능
  const canvasRef = useCanvasWithOptions(draw, { options });

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
};

export default Canvas;
