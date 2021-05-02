import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import ShareToolBar from '../../../components/page/index/share-tool-bar';
import ExtractColors from '../../../components/page/web-app/color-palette/extract-colors';
import Unsplash from '../../../components/page/web-app/color-palette/unsplash';
import UploadImage from '../../../components/page/web-app/color-palette/upload-image';
import toast from '../../../components/toast/toast';
import { tColorPalette } from '../../../data/web-product/t-color-palette';
import { btnHoverTap } from '../../../foundation/framer-motion/variants';
import H1LargeTitle700 from '../../../foundation/typography/h1-large-title-700';
import PMedium700 from '../../../foundation/typography/p-medium-700';
import { useArvAmplitude } from '../../../library/hooks/Amplitude/useArvAmplitude';
import { mediaBreakPoint } from '../../../styles/common';

const Index = ({ showToast }: { showToast: Function }) => {
  useArvAmplitude('arv_color_palette');
  const [image, setImage] = useState<string[]>([]);

  return (
    <>
      <Main>
        <H1LargeTitle700 text={tColorPalette().webAppName} color="gray1" />
        <PMedium700
          text={tColorPalette().mainMessage}
          color="gray5"
          marginTop="8px"
        />
        <UploadImageButton
          onClick={() => {}}
          variants={btnHoverTap}
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <PMedium700 text={tColorPalette().uploadImageButton} color="gray2" />
        </UploadImageButton>
        {/* <UploadImage //
          image={image}
          setImage={setImage}
        /> */}
        <Line />
        <Unsplash />
        <ExtractColors //
          image={image}
        />
        <ShareToolBar />
      </Main>
    </>
  );
};

export default Index;

const Main = styled.main`
  overflow-y: scroll;

  h1,
  p {
    text-align: center;
  }

  /* margin-top: ${({ theme }) => theme.margin.DesktopTop};*/
  margin-bottom: ${({ theme }) => theme.margin.DesktopBottom};
  margin-top: 120px; //72+72px  - 24

  @media all and (max-width: ${mediaBreakPoint.first}) {
    /* margin-top: ${({ theme }) => theme.margin.MobileTop};*/
    margin-bottom: ${({ theme }) => theme.margin.MobileBottom};
    margin-top: 105px; // 57+72px  - 24
    padding: ${({ theme }) => theme.padding.MobileWrap};
  }

  @media all and (min-width: ${mediaBreakPoint.second}) and (max-width: ${mediaBreakPoint.third}) {
    padding: ${({ theme }) => theme.padding.TabletWrap};
  }

  @media all and (min-width: ${mediaBreakPoint.fourth}) {
    padding: ${({ theme }) => theme.padding.DesktopWrap};
  }
`;

const UploadImageButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.gray7};
  border-radius: ${({ theme }) => theme.borderRadius.R13};
  padding: 18px 32px;
  margin: 36px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  width: 1px;
  height: 30vh;
  background-color: ${({ theme }) => theme.gray6};

  // 바뀌는 속성
  margin-bottom: 36px;
  margin: 36px auto 36px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin: 24px auto 24px;
  }
`;
