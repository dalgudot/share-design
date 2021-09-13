import styled from 'styled-components';
import { usePalette } from 'react-palette';
import React from 'react';
import WaveLoading from '../../../canvas-components/wave-loading/wave-loading';

const ExtractColors = ({ image }: { image: any }) => {
  const { data, loading, error } = usePalette(image[0]);
  const dataArray = Object.values(data);

  if (loading === true) {
    return <WaveLoading marginTop="36px" />;
  } else {
    return (
      <>
        <UploadImage src={image[0]} />

        {dataArray.map((hex?: string) => (
          <ColorChip key={hex} hex={hex} />
        ))}
      </>
    );
  }
};

export default ExtractColors;

const UploadImage = styled.img`
  width: 100%;
  max-width: 480px;
`;

const ColorChip = styled.div<{ hex?: string }>`
  background-color: ${({ hex }) => hex};
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;
