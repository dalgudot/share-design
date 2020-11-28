import HeadInfo from '../components/head-info/head-info';
import { indexInfo } from '../components/head-info/head-info-text';
import Link from 'next/link';
import styled from 'styled-components';
import LangChangeButton from '../components/button/lang-change-button';
import Header from '../components/index/header';
import { DetectBrowserLang } from '../components/func/detect-browser-lang';
import ModeChangeButton from '../components/button/mode-change-button';
import KHKText from '../components/index/khk-text';
import Subject from '../components/index/subject';
import Contact from '../components/index/contact';
import Footer from '../components/index/footer';
import { LeftRightMargin } from '../components/index/common-elements';
import { useEffect } from 'react';

const Index = ({ setMode, darkTheme, lightTheme }) => {
  DetectBrowserLang();

  // useEffect(() => {
  //   console.log(`innerWidth: ${window.innerWidth}`);
  //   console.log(`innerHeight: ${window.innerHeight}`);
  // }, []);

  return (
    <>
      {/* <LeftRightMargin> */}
      <HeadInfo info={indexInfo} />

      <Header />

      <nav>{/* 왼쪽 내비게이션 */}</nav>

      <Main>
        {/* <KHKText /> */}
        {/* Subject 내부의 Nav는 sticky! */}
        {/* <Subject order="첫 번째" name="20대를 남기다" backgroundColor="" /> */}
      </Main>

      <nav>{/* 오른쪽 내비게이션 */}</nav>

      <Footer />

      {/* <ModeChangeButton
        visible="flex"
        setMode={setMode}
        darkTheme={darkTheme}
        lightTheme={lightTheme}
      /> */}

      {/* <Contact /> */}

      {/* </LeftRightMargin> */}
    </>
  );
};

export default Index;

const Main = styled.main``;
