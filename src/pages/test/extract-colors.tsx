import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import H1Title700 from '../../foundation/typography/h1-title-700';
import { usePalette } from 'react-palette';
import React from 'react';
import StaggerDots from '../../foundation/framer-motion/stagger-dots';

// 컴포넌트로 옮겨야 함
// 아웃풋은 color palette
// 로딩을 pixel 단위로
const ExtractColors = ({ image, imageRef }: { image: any; imageRef: any }) => {
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [count, setCount] = useState(0);
  const [rgbDistance, setRgbDistance] = useState<number[]>([0, 0, 0]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const { data, loading, error } = usePalette(image[0]);

  const dataArray = Object.values(data);
  // console.log(data);
  console.log(dataArray);

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

  const canvas: any = canvasRef.current;

  console.log(window.devicePixelRatio);

  // retina 대응
  const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

  useEffect(() => {
    if (img && canvasRef) {
      // naturalWidth, naturalHeight
      const width = img?.width * 0.1;
      const height = img?.height * 0.1;
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
    }
  }, [img, canvasRef]);

  const [palette, setPalette] = useState<Object[]>([]);

  const extractColor = () => {
    const canvas: any = canvasRef.current;
    const width = canvas.width * 0.1;
    const height = canvas.height * 0.1;

    if (img && canvasRef) {
      const ctx = canvas.getContext('2d');
      const imgData = ctx.getImageData(0, 0, width, height);
      const imgDataArray = imgData.data;
      // console.log(imgDataArray.length);
      // console.log(imgDataArray);

      setPalette([]);
      for (let i = 0; i < imgDataArray.length; i++) {
        // index 0부터 시작해 4만큼 뒤부터 시작
        let adjustIndex = i * 4;
        const red = imgDataArray[adjustIndex + 0];
        const green = imgDataArray[adjustIndex + 1];
        const blue = imgDataArray[adjustIndex + 2];
        // const alpha = imgDataArray[adjustIndex + 3];
        // alpha도 255단계로 표현 (0-255, 0은 0.0, 255는 1.0)

        // const colorObj = { red: red, green: green, blue: blue, alpha: alpha };
        // setPalette((prevPalette) => prevPalette.concat(colorObj));
        const colorArray = [[red, green, blue]];
        setPalette((prevPalette) => prevPalette.concat(colorArray));

        if (i !== 0) {
        }
      }
    }
    setCount(Math.floor(Math.random() * width * height));
  };

  // console.log(palette);

  // https://towardsdatascience.com/extracting-colours-from-an-image-using-k-means-clustering-9616348712be
  // https://en.wikipedia.org/wiki/K-means_clustering
  // https://en.wikipedia.org/wiki/Lloyd%27s_algorithm
  const euclideanDistance = (a: number[], b: number[]) => {
    let sum = 0;

    // n차원까지 확장 가능. a와 b의 length는 같아야 함. 다시 말해 같은 차원의 좌표여야 함.
    for (let i = 0; i < a.length; i++) {
      // Math.pow(x,y), x의 y 제곱을 반환.
      sum += Math.pow(b[i] - a[i], 2);
    }

    // Math.sqrt(x) x:number의 제곱근을 반환.
    const distance = Math.sqrt(sum);

    return distance;
  };

  // console.log(euclideanDistance([0, 0, 0], [127, 127, 127]));
  // console.log(euclideanDistance([0, 0, 0], [255, 255, 255]));

  const test = true;
  return (
    <>
      {/* https://stackoverflow.com/questions/54633690/how-can-i-use-multiple-refs-for-an-array-of-elements-with-hooks */}

      <Canvas ref={canvasRef} />
      {/* <button onClick={extractColor}>
          <H1Title700
            text={{ k: '버튼', e: '버튼' }}
            color="gray1"
          ></H1Title700>
        </button> */}
      {loading ? (
        <StaggerDots />
      ) : (
        <Wrap>
          {dataArray.map((hex?: string, idx?: number) => (
            <ColorChip key={hex} hex={hex} />
          ))}
        </Wrap>
      )}
    </>
  );
};

export default React.memo(ExtractColors);

const Canvas = styled(motion.canvas)`
  width: 100%;
  max-width: 300px;
  overflow-y: auto;
`;

const Wrap = styled.div`
  /* overflow-y: scroll; */
  height: 100%;
  display: flex;
`;

const ColorChip = styled.div<{ hex?: string }>`
  background-color: ${({ hex }) => hex};
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;
