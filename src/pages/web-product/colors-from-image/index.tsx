import { useState } from 'react';
import styled from 'styled-components';
import ShareToolBar from '../../../components/page/index/share-tool-bar';
import ExtractColors from '../../../components/page/web-product/colors-from-image/extract-colors';
import Unsplash from '../../../components/page/web-product/colors-from-image/unsplash';
import UploadImage from '../../../components/page/web-product/colors-from-image/upload-image';
import toast from '../../../components/toast/toast';
import { tColorsFromImage } from '../../../data/web-product/t-colors-from-image';
import PMedium400 from '../../../foundation/typography/p-medium-400';
import PMedium700 from '../../../foundation/typography/p-medium-700';
import { useAmplitude } from '../../../library/hooks/useAmplitude';
import { mediaBreakPoint } from '../../../styles/common';

const Index = ({ showToast }: { showToast: Function }) => {
  const [image, setImage] = useState<string[]>([]);
  useAmplitude('arv_colors_from_image');

  return (
    <>
      <Main>
        <PMedium700 text={tColorsFromImage().mainMessage} color="gray1" />
        {/* <PMedium400 text={tColorsFromImage().mainMessage} color="gray1" /> */}
        <UploadImage //
          image={image}
          setImage={setImage}
        />
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

  p {
    text-align: center;
  }

  /* margin-top: ${({ theme }) => theme.margin.DesktopTop};*/
  margin-bottom: ${({ theme }) => theme.margin.DesktopBottom};
  margin-top: 144px; //72+72px

  @media all and (max-width: ${mediaBreakPoint.first}) {
    /* margin-top: ${({ theme }) => theme.margin.MobileTop};*/
    margin-bottom: ${({ theme }) => theme.margin.MobileBottom};
    margin-top: 129px; // 57+72px
    padding: ${({ theme }) => theme.padding.MobileWrap};
  }

  @media all and (min-width: ${mediaBreakPoint.second}) and (max-width: ${mediaBreakPoint.third}) {
    padding: ${({ theme }) => theme.padding.TabletWrap};
  }

  @media all and (min-width: ${mediaBreakPoint.fourth}) {
    padding: ${({ theme }) => theme.padding.DesktopWrap};
  }
`;
