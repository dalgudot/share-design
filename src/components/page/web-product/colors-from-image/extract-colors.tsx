import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import H1Title700 from '../../../../foundation/typography/h1-title-700';
import { usePalette } from 'react-palette';
import React from 'react';
import StaggerDots from '../../../../foundation/framer-motion/stagger-dots';

// 아웃풋은 color palette
// 로딩을 pixel 단위로
const ExtractColors = ({ image }: { image: any }) => {
  const { data, loading, error } = usePalette(image[0]);
  const dataArray = Object.values(data);

  return (
    <>
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
    </>
  );
};

export default React.memo(ExtractColors);

const UploadImage = styled.img`
  width: 100%;
  max-width: 300px;
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
