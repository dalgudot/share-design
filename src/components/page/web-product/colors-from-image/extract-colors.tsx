import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import H1Title700 from '../../../../foundation/typography/h1-title-700';
import { usePalette } from 'react-palette';
import React from 'react';
import StaggerDots from '../../../../foundation/framer-motion/stagger-dots';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { saveAs } from 'file-saver';
import { isMobile, isAndroid } from 'react-device-detect';

// 아웃풋은 color palette
// 로딩을 pixel 단위로
const ExtractColors = ({ image }: { image: any }) => {
  const { data, loading, error } = usePalette(image[0]);
  const dataArray = Object.values(data);

  // Download
  const downloadRef = useRef<HTMLDivElement>(null);
  const downloadImageAndPalette = (): void => {
    Boolean(dataArray[0]) &&
      toBlob(downloadRef.current as any).then(function (blob) {
        saveAs(blob as any, 'palette.png');
      });
  };

  if (loading === true) {
    return (
      <>
        <StaggerDots />
      </>
    );
  } else {
    return (
      <>
        <Container>
          <DownloadWrap ref={downloadRef}>
            <UploadImage src={image[0]} />
            {/* <Canvas ref={canvasRef} /> */}
            <Wrap>
              {dataArray.map((hex?: string) => (
                <ColorChip key={hex} hex={hex} />
              ))}
            </Wrap>
          </DownloadWrap>

          {/* iOS에서는 문제가 많아서 모바일 전체에서 다운로드 버튼 숨기기 */}
          {/* isMobile -> returns true if device type is mobile or tablet */}
          {/* 데스크톱과 안드로이드 기기에서만 다운로드 가능 */}
          {(!isMobile || isAndroid) && (
            <motion.button
              onClick={downloadImageAndPalette}
              whileTap={{ scale: 0.8 }}
            >
              <H1Title700
                text={{ k: '다운로드', e: 'Download' }}
                color="gray1"
              />
            </motion.button>
          )}
        </Container>
      </>
    );
  }
};

export default ExtractColors;

const Container = styled.div`
  margin: 0 auto;
  width: 300px;

  button {
    margin-bottom: 240px;
  }
`;

const DownloadWrap = styled.div`
  padding: 36px;
`;

const UploadImage = styled.img`
  width: 100%;
  max-width: 300px;
`;

const Wrap = styled.div`
  height: 100%;
  display: flex;
`;

const ColorChip = styled.div<{ hex?: string }>`
  background-color: ${({ hex }) => hex};
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

// jpeg 다운로드
// const downloadImageAndPalette = (): void => {
//   Boolean(dataArray[0]) &&
//     toJpeg(downloadRef.current as any, { quality: 0.95 }).then(function (
//       dataUrl
//     ) {
//       const link = document.createElement('a');
//       link.download = 'my-image-name.jpeg';
//       link.href = dataUrl;
//       link.click();
//     });
// };

// canvas로 이미지 그리기

const Canvas = styled.canvas`
  width: 100%;
  max-width: 300px;
  overflow-y: auto;
`;

// const [img, setImg] = useState<HTMLImageElement | null>(null);
// const canvasRef = useRef<HTMLCanvasElement | null>(null);
// const canvas: any = canvasRef.current;
// const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1; // retina 대응

// useEffect(() => {
//   if (image.length > 0) {
//     const undateImage = new Image();
//     undateImage.src = image[0];
//     undateImage.onload = () => setImg(undateImage);
//   }
// }, [image]);

// useEffect(() => {
//   if (img && canvasRef) {
//     const width = img?.naturalWidth * pixelRatio;
//     const height = img?.naturalHeight * pixelRatio;
//     canvas.width = width;
//     canvas.height = height;
//     const ctx = canvas.getContext('2d');
//     ctx.drawImage(img, 0, 0, width, height);
//   }
// }, [img, canvasRef]);
