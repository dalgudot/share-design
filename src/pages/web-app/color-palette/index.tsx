import styled from 'styled-components';
import ShareToolBar from '../../../components/page/index/share-tool-bar';
import Unsplash from '../../../components/page/web-app/color-palette/unsplash';
import UploadImage from '../../../components/page/web-app/color-palette/upload-image';
import { tColorPalette } from '../../../data/web-product/t-color-palette';
import H1LargeTitle700 from '../../../foundation/typography/h1-large-title-700';
import PMedium700 from '../../../foundation/typography/p-medium-700';
import { useArvAmplitude } from '../../../library/hooks/Amplitude/useArvAmplitude';
import { mediaBreakPoint } from '../../../styles/common';

const Index = ({ showToast }: { showToast: Function }) => {
  useArvAmplitude('arv_color_palette');

  return (
    <>
      <Main>
        <Unsplash />
        <Line />
        <H1LargeTitle700 text={tColorPalette().webAppName} color="gray1" />
        <PMedium700
          text={tColorPalette().mainMessage}
          color="gray5"
          marginTop="8px"
        />
        <UploadImage />

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
