import styled from 'styled-components';
import { usePalette } from 'react-palette';
import React from 'react';
import WaveLoading from '../../../canvas-components/wave-loading/wave-loading';
import { useSetLanguage } from '../../../../lib/hooks/useSetLanguage';
import PLarge from '../../../../foundation/typography/p-large';
import PMedium from '../../../../foundation/typography/p-medium';
import { mediaBreakPoint } from '../../../../styles/common';
import CopyToClipboard from 'react-copy-to-clipboard';

const ExtractColors = ({
  image,
  showToast,
}: {
  image: string[];
  showToast: Function;
}) => {
  const { data, loading, error } = usePalette(image[0]);
  const colorsDataArray = Object.values(data);
  const altTextUploadedImage = useSetLanguage({
    k: '팔레트 공유하기에 업로드된 이미지',
    e: 'Image uploaded to SHARE PALETTE',
  });
  const copyPaletteToastText = useSetLanguage({
    k: '🎨 팔레트를 복사했습니다',
    e: '🎨 Copied palette',
  });
  const copyPaletteButton = { k: '팔레트 복사', e: 'Copy Palette' };

  const paletteString = colorsDataArray.toString();
  const organizedPaletteString = paletteString.replace(/,/gi, ' '); // /찾을 문자열/gi 라는 정규식 이용해 ',' 모두를 '\n'으로 교체

  console.log(organizedPaletteString);

  if (loading === true && image[0]) {
    return <WaveLoading marginTop="48px" />;
  } else if (loading === false && image[0]) {
    return (
      <>
        <UploadedImage src={image[0]} alt={altTextUploadedImage} />

        <WrapColorChip>
          {colorsDataArray.map((hex?: string, idx?: number) => (
            <ColorChip key={`${hex}${idx}`} hex={hex} />
          ))}
        </WrapColorChip>

        <CopyToClipboard
          text={organizedPaletteString}
          onCopy={() => showToast(copyPaletteToastText)}
        >
          <ButtonCopyPalette>
            <PMedium
              text={copyPaletteButton}
              color="gray2"
              weight={700}
              // lineHeight={{ desktop: '28px', mobile: '23px' }}
            />
          </ButtonCopyPalette>
        </CopyToClipboard>
      </>
    );
  } else {
    return <></>;
  }
};

export default ExtractColors;

const UploadedImage = styled.img`
  width: 100%;
  max-width: 480px;
`;

const ColorChip = styled.div<{ hex?: string }>`
  background-color: ${({ hex }) => hex};
  width: 100%;
  height: calc(480px / 6);

  @media all and (max-width: 480px) {
    height: calc(91vw / 6); // 양옆 4.5vw * 2 뺀 나머지
  }
`;

const WrapColorChip = styled.div`
  display: flex;
  width: 100%;
  max-width: 480px;
`;

const ButtonCopyPalette = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.gray7};
  padding: 16px 28px;
  max-width: 240px;
  border-radius: 21px;
  margin-top: 36px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 24px;
  }
`;
