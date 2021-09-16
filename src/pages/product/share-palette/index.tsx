import styled from 'styled-components';
import { useState } from 'react';
import { mediaBreakPoint } from '../../../styles/common';
import UploadImage from '../../../components/pages-components/product/share-palette/upload-image';
import ExtractColors from '../../../components/pages-components/product/share-palette/extract-colors';
import H1Title from '../../../foundation/typography/h1-title';
import PLarge from '../../../foundation/typography/p-large';

const SharePaletteIndex = ({ showToast }: { showToast: Function }) => {
  const [image, setImage] = useState<string[]>([]);

  return (
    <>
      <Main>
        <H1Title
          text={{ k: '팔레트 공유하기 🎨', e: 'SHARE PALETTE 🎨' }}
          color="gray1"
        />
        {!image[0] ? (
          <>
            <P__MarginTop />
            <PLarge
              text={{ k: '이미지로', e: 'Shall we create' }}
              color="gray4"
              lineHeight={{ desktop: '28px', mobile: '23px' }}
            />
            <PLarge
              text={{
                k: '팔레트를 만들어 볼까요?',
                e: 'a color palette with images?',
              }}
              color="gray4"
              lineHeight={{ desktop: '28px', mobile: '23px' }}
            />
          </>
        ) : (
          <AfterUpload__MarginTop />
        )}

        <ExtractColors image={image} showToast={showToast} />
        <UploadImage image={image} setImage={setImage} />
      </Main>
    </>
  );
};

export default SharePaletteIndex;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: ${({ theme }) => theme.margin.DesktopTop};
  margin-bottom: ${({ theme }) => theme.margin.DesktopBottom};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: ${({ theme }) => theme.margin.MobileTop};
    margin-bottom: ${({ theme }) => theme.margin.MobileBottom};
    padding: ${({ theme }) => theme.padding.LeftRightPadding};
  }

  // iOS bottom safe area
  margin-bottom: calc(env(safe-area-inset-bottom));

  h1 {
    margin-top: 72px;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      margin-top: 48px;
    }
  }
`;

const P__MarginTop = styled.div`
  margin-top: 24px;
`;

const AfterUpload__MarginTop = styled.div`
  margin-top: 36px;
`;
