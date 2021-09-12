import styled from 'styled-components';
import { useRef, useState, useEffect } from 'react';
import { mediaBreakPoint } from '../../../styles/common';
import UploadImage from '../../../components/pages-components/product/share-palette/upload-image';
import ExtractColors from '../../../components/pages-components/product/share-palette/extract-colors';

const ShareColorIndex = () => {
  const [image, setImage] = useState<[]>([]);
  const imageRef = useRef<HTMLImageElement | null>(null);

  return (
    <>
      <Main>
        <UploadImage //
          setImage={setImage}
        />
        <ExtractColors //
          image={image}
        />
        {/* <ShareToolBar /> */}
      </Main>
    </>
  );
};

export default ShareColorIndex;

const Main = styled.main`
  overflow-y: scroll;

  margin-top: ${({ theme }) => theme.margin.DesktopTop};
  margin-bottom: ${({ theme }) => theme.margin.DesktopBottom};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: ${({ theme }) => theme.margin.MobileTop};
    margin-bottom: ${({ theme }) => theme.margin.MobileBottom};
  }
`;
