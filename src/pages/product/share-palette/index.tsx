import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { mediaBreakPoint } from '../../../styles/common';
import UploadImage from '../../../components/pages-components/product/share-palette/upload-image';
import ExtractColors from '../../../components/pages-components/product/share-palette/extract-colors';
import H1Title from '../../../foundation/typography/h1-title';
import PLarge from '../../../foundation/typography/p-large';
import { useIsiOS } from '../../../lib/hooks/useIsiOS';
import { VisitsAndViewsDuringSession } from '../../../lib/functions/visits-and-views';

const SharePaletteIndex = ({ showToast }: { showToast: Function }) => {
  useEffect(() => {
    VisitsAndViewsDuringSession('SHARE PALETTE');
  }, []);

  const [image, setImage] = useState<string[]>([]);

  useEffect(() => {
    const uploadedImageSharePalette = sessionStorage.getItem(
      'UploadedImageSharePalette'
    );

    uploadedImageSharePalette &&
      uploadedImageSharePalette !== 'undefined' &&
      setImage([uploadedImageSharePalette]);
  }, []);

  // Remove 'UploadedImageSharePalette' in sessionStorage because an error occurs when reloading
  // This is not working in Safari
  useEffect(() => {
    const deleteDateSessionStorage = () => {
      sessionStorage.removeItem('UploadedImageSharePalette');
    };
    window.addEventListener('beforeunload', deleteDateSessionStorage);

    return () =>
      window.removeEventListener('beforeunload', deleteDateSessionStorage);
  }, []);

  // Solve iPad Safe Area
  const { is_iOS, is_iPadOS } = useIsiOS();
  const safeArea = () => {
    if (is_iOS) {
      return '50vh';
    } else if (is_iPadOS) {
      return '72vh';
    } else {
      return '${({ theme }) => theme.margin.DesktopBottom}';
    }
  };

  return (
    <>
      <Main safeArea={safeArea()}>
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

const Main = styled.main<{ safeArea: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: ${({ theme }) => theme.margin.DesktopTop};
  margin-bottom: ${({ theme }) => theme.margin.DesktopBottom};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: ${({ theme }) => theme.margin.MobileTop};
    padding: ${({ theme }) => theme.padding.LeftRightPadding};
    // margin-bottom for tab-bar env
    margin-bottom: ${({ safeArea }) => safeArea};
  }

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

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 24px;
  }
`;
