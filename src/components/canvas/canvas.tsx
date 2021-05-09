import { useCanvas } from '../../library/hooks/useCanvas';

// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
const Canvas = ({ draw }: { draw: Function }) => {
  // options는 webgl context 쓸 때 활용 가능
  const canvasRef = useCanvas(draw);

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
};

export default Canvas;
