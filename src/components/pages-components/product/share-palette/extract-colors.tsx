import styled from 'styled-components';
import { usePalette } from 'react-palette';
import React from 'react';
import WaveLoading from '../../../canvas-components/wave-loading/wave-loading';
import { useSetLanguage } from '../../../../lib/hooks/useSetLanguage';
import PMedium from '../../../../foundation/typography/p-medium';
import { mediaBreakPoint } from '../../../../styles/common';
import CopyToClipboard from 'react-copy-to-clipboard';
import PSmall from '../../../../foundation/typography/p-small';
import { motion } from 'framer-motion';
import { buttonVariants } from '../../../../foundation/framer-motion/variants';
import { useToast } from '../../../common-components/toast/useToast';

const ExtractColors = ({ image }: { image: string[] }) => {
  const { showToast } = useToast();
  const { data, loading, error } = usePalette(image[0]);
  const colorsDataArray = Object.values(data);
  const altTextUploadedImage = useSetLanguage({
    k: '팔레트 공유하기에 업로드된 이미지',
    e: 'Image uploaded to SHARE PALETTE',
  });
  const textCopyPaletteToast = useSetLanguage({
    k: '🎨 팔레트를 복사했습니다',
    e: '🎨 Copied palette',
  });
  const textbtnCopyPalette = { k: '팔레트 복사', e: 'Copy Palette' };

  const paletteString = colorsDataArray.toString();
  const organizedPaletteString = paletteString.replace(/,/gi, ' '); // /찾을 문자열/gi 라는 정규식 이용해 ',' 모두를 '\n'으로 교체

  if (loading === true && image[0]) {
    return <WaveLoading marginTop="48px" />;
  } else if (loading === false && image[0]) {
    return (
      <>
        <UploadedImage src={image[0]} alt={altTextUploadedImage} />

        <WrapPalette>
          {colorsDataArray.map((hex: any, idx?: number) => (
            <Palette key={`${hex}${idx}`} hex={hex} />
          ))}
        </WrapPalette>

        <CopyToClipboard
          text={organizedPaletteString}
          onCopy={() => showToast(textCopyPaletteToast)}
        >
          <MotionBtnPaletteCopy
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <PMedium text={textbtnCopyPalette} color="gray2" weight={700} />
          </MotionBtnPaletteCopy>
        </CopyToClipboard>

        <GridColorChip>
          {colorsDataArray.map((hex: any, idx?: number) => (
            <ColorChipContainer key={`${idx}${hex}`}>
              <ColorChip color={hex} />
              <PSmall text={hex} color="gray3" weight={700} marginTop="12px" />
              <CopyToClipboard
                text={hex}
                onCopy={() =>
                  showToast({
                    k: `${hex}를 복사했습니다`,
                    e: `Copied ${hex}`,
                  })
                }
              >
                <MotionBtnHexCopy
                  variants={buttonVariants}
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  <PSmall
                    text={{ k: '복사', e: 'copy' }}
                    color="gray1"
                    weight={700}
                  />
                </MotionBtnHexCopy>
              </CopyToClipboard>
            </ColorChipContainer>
          ))}
        </GridColorChip>
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

const Palette = styled.div<{ hex?: string }>`
  background-color: ${({ hex }) => hex};
  width: 100%;
  height: calc(480px / 6);
  @media all and (max-width: 480px) {
    height: calc(91vw / 6); // 양옆 4.5vw * 2 뺀 나머지
  }
`;

const WrapPalette = styled.div`
  display: flex;
  width: 100%;
  max-width: 480px;
`;

const MotionBtnPaletteCopy = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.gray7};
  padding: 18px 28px;
  border-radius: 23px;
  margin-top: 36px;
  @media all and (max-width: ${mediaBreakPoint.first}) {
    border-radius: 21px;
    margin-top: 28px;
  }
`;

const GridColorChip = styled.div`
  display: grid;
  grid-template-columns: calc(448px / 3) calc(448px / 3) calc(448px / 3); // 84vw / 3
  grid-template-rows: calc(448px / 3 * 1.6) calc(448px / 3 * 1.6);
  column-gap: 16px; // gap은 2개니까 2로 나눔
  row-gap: 16px;
  margin-top: 96px;
  @media all and (max-width: 480px) {
    grid-template-columns: 28vw 28vw 28vw; // 84vw / 3
    grid-template-rows: calc(28vw * 1.6) calc(28vw * 1.6);
    column-gap: calc(7vw / 2); // 91vw - 7vw = 84vw, gap은 2개니까 2로 나눔
    row-gap: 24px;
    margin-top: 72px;
  }
`;

const ColorChipContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ColorChip = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  width: calc(448px / 3);
  height: calc(448px / 3);
  @media all and (max-width: 480px) {
    width: 28vw;
    height: 28vw;
  }
`;

const MotionBtnHexCopy = styled(motion.button)`
  background-color: ${({ theme }) => theme.gray7};
  padding: 8px 16px;
  border-radius: 11px;
  margin-top: 10px;
  @media all and (max-width: ${mediaBreakPoint.first}) {
    border-radius: 10px;
    margin-top: 8px;
  }
`;
