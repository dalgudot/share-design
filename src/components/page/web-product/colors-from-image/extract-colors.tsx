import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import H1Title700 from '../../../../foundation/typography/h1-title-700';
import { usePalette } from 'react-palette';
import React from 'react';
import StaggerDots from '../../../../foundation/framer-motion/stagger-dots';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

// 아웃풋은 color palette
// 로딩을 pixel 단위로
const ExtractColors = ({ image }: { image: any }) => {
  const { data, loading, error } = usePalette(image[0]);
  const dataArray = Object.values(data);
  console.log(Boolean(dataArray[0]));

  const downloadRef = useRef<HTMLDivElement>(null);

  const downloadImageAndPalette = (): void => {
    Boolean(dataArray[0]) === false && console.log('no');
    Boolean(dataArray[0]) &&
      htmlToImage
        .toJpeg(downloadRef.current as any, { quality: 0.95 })
        .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = 'my-image-name.jpeg';
          link.href = dataUrl;
          link.click();
        });
  };

  return (
    <>
      <Container>
        <DownloadWrap ref={downloadRef}>
          <UploadImage src={image[0]} />
          {loading ? (
            <StaggerDots />
          ) : (
            <Wrap>
              {dataArray.map((hex?: string) => (
                <ColorChip key={hex} hex={hex} />
              ))}
            </Wrap>
          )}
        </DownloadWrap>
        <button onClick={downloadImageAndPalette}>
          <H1Title700 text={{ k: '버튼', e: '버튼' }} color="gray1" />
        </button>
      </Container>
    </>
  );
};

export default React.memo(ExtractColors);

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
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
