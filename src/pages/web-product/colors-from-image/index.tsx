import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ShareToolBar from '../../../components/page/index/share-tool-bar';
import ExtractColors from '../../../components/page/web-product/colors-from-image/extract-colors';
import Unsplash from '../../../components/page/web-product/colors-from-image/unsplash';
import UploadImage from '../../../components/page/web-product/colors-from-image/upload-image';
import toast from '../../../components/toast/toast';
import { useAmplitude } from '../../../library/hooks/useAmplitude';
import { mediaBreakPoint } from '../../../styles/common';

const Index = ({ showToast }: { showToast: Function }) => {
  const router = useRouter();
  const [image, setImage] = useState<[]>([]);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useAmplitude('arv_colors_from_image');

  return (
    <>
      <Main>
        <UploadImage //
          setImage={setImage}
        />
        <ExtractColors //
          image={image}
        />
        <Unsplash />
        {/* <ShareToolBar /> */}
      </Main>
    </>
  );
};

export default Index;

const Main = styled.main`
  overflow-y: scroll;

  margin-top: ${({ theme }) => theme.margin.DesktopTop};
  margin-bottom: ${({ theme }) => theme.margin.DesktopBottom};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: ${({ theme }) => theme.margin.MobileTop};
    margin-bottom: ${({ theme }) => theme.margin.MobileBottom};
    padding: ${({ theme }) => theme.padding.MobileWrap};
  }
`;
