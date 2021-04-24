import { motion } from 'framer-motion';
import { createRef, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// 아웃풋은 color palette
// 로딩을 pixel 단위로
const ExtractColors = ({ image, imageRef }: { image: any; imageRef: any }) => {
  const [img, setImg] = useState<HTMLImageElement>();

  // console.log(image);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (image.length > 0) {
      const undateImage = new Image(); // 임시 사이즈
      undateImage.src = image[0];
      // undateImage.onload = () => setImg(undateImage);
      // setState 함수에서 기본 인수(prevImg)는 기존 state data
      // undateImage.onload = () =>
      //   setImg((prevImg) => prevImg?.concat(undateImage));
      undateImage.onload = () => setImg(undateImage);
    }
  }, [image]);

  useEffect(() => {
    if (img && canvasRef) {
      const canvas: any = canvasRef.current;
      const width = img?.width * 0.1;
      const height = img?.height * 0.1;

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      const currentPixelData = ctx.getImageData(0, 0, width, height).data;
      console.log(currentPixelData);

      // for (let i = 0; i < currentPixelData.length; i += 4) {
      //   currentPixelData[i] = 255 - currentPixelData[i];
      //   currentPixelData[i + 1] = 255 - currentPixelData[i + 1];
      //   currentPixelData[i + 2] = 255 - currentPixelData[i + 2];
      //   currentPixelData[i + 3] = 255;
      // }

      // ctx.drawImage(img, 0, 0, width, height);

      // setImg(ctx.putImageData(currentPixelData, 0, 0, width, height));
    }
  }, [img, canvasRef]);

  return (
    <>
      {/* https://stackoverflow.com/questions/54633690/how-can-i-use-multiple-refs-for-an-array-of-elements-with-hooks */}
      <Canvas ref={canvasRef} />
    </>
  );
};

export default ExtractColors;

const Canvas = styled(motion.canvas)`
  width: 100%;
  max-width: 480px;
`;
