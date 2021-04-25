import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ShareToolBar from '../../../components/page/index/share-tool-bar';
import ExtractColors from '../../../components/page/web-product/colors-from-image/extract-colors';
import UploadImage from '../../../components/page/web-product/colors-from-image/upload-image';
import toast from '../../../components/toast/toast';
import { VisitsAndViewsDuringSession } from '../../../library/functions/visits-and-views';
import { mediaBreakPoint } from '../../../styles/common';

const Index = ({ showToast }: { showToast: Function }) => {
  const router = useRouter();
  //   useEffect(() => {
  //     VisitsAndViewsDuringSession(router.pathname);
  //   }, []);

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

export default Index;

const Main = styled.main`
  /* position: fixed;
  top: 10%;
  left: 20%;
  margin: 0 auto; */

  /* width: 100%; */
  /* height: 100%; */
  overflow-y: scroll;
  /* z-index: 99999; */

  /* margin-top: ${({ theme }) => theme.margin.DesktopTop};
  margin-bottom: ${({ theme }) => theme.margin.DesktopBottom};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: ${({ theme }) => theme.margin.MobileTop};
    margin-bottom: ${({ theme }) => theme.margin.MobileBottom};
    padding: ${({ theme }) => theme.padding.MobileWrap};
  }

  @media all and (min-width: ${mediaBreakPoint.second}) and (max-width: ${mediaBreakPoint.third}) {
    padding: ${({ theme }) => theme.padding.TabletWrap};
  }

  @media all and (min-width: ${mediaBreakPoint.fourth}) {
    padding: ${({ theme }) => theme.padding.DesktopWrap};
  } */
`;
