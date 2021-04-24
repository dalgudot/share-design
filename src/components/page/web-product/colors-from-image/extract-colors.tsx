import { motion } from 'framer-motion';
import { createRef, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import H1Title700 from '../../../../foundation/typography/h1-title-700';

// 아웃풋은 color palette
// 로딩을 pixel 단위로
const ExtractColors = ({ image, imageRef }: { image: any; imageRef: any }) => {
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [count, setCount] = useState(0);
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

      const imgData = ctx.getImageData(0, 0, width, height).data;
    }
  }, [img, canvasRef]);

  const [palette, setPalette] = useState<Object[]>([]);

  const extractColor = () => {
    const canvas: any = canvasRef.current;
    const width = canvas.width * 0.1;
    const height = canvas.height * 0.1;
    const ctx = canvas.getContext('2d');
    const imgData = ctx.getImageData(0, 0, width, height).data;
    // console.log(imgData);

    if (img && canvasRef) {
      setPalette([]);
      for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
          let adjustIndex = j * 4;

          const red = imgData[adjustIndex + 0];
          const green = imgData[adjustIndex + 1];
          const blue = imgData[adjustIndex + 2];
          const alpha = imgData[adjustIndex + 3];

          const colorObj = { red: red, green: green, blue: blue, alpha: alpha };

          setPalette((prevPalette) => prevPalette.concat(colorObj));
        }
      }
    }

    setCount(Math.floor(Math.random() * width * height));
  };

  // console.log(palette);

  // let color = `rgb(${palette[count]?.red}, ${palette[count]?.green}, ${palette[count]?.blue})`;

  let color = `rgb(255, 255, 255)`; // 임시

  console.log(count);
  // console.log(palette[count]?.red);
  console.log(color);

  return (
    <>
      {/* https://stackoverflow.com/questions/54633690/how-can-i-use-multiple-refs-for-an-array-of-elements-with-hooks */}
      <Wrap>
        <Canvas ref={canvasRef} />
        <button onClick={extractColor}>
          <H1Title700
            text={{ k: '버튼', e: '버튼' }}
            color="gray1"
          ></H1Title700>
        </button>
        <ColorChip color={color} />
      </Wrap>
    </>
  );
};

export default ExtractColors;

const Canvas = styled(motion.canvas)`
  width: 100%;
  max-width: 300px;
  overflow-y: auto;
`;

const Wrap = styled.div`
  /* overflow-y: scroll; */
  height: 100%;
`;

const ColorChip = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  width: 100px;
  height: 100px;
`;
