import HeadInfo from '../components/head-info';
import { indexInfo } from '../components/lang/head-info/head-info-text';
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
import Nav from '../components/index/nav';
import { LeftRightContainer } from '../components/index/elements';

const Index = ({ setMode, darkTheme, lightTheme }) => {
  DetectBrowserLang();

  return (
    <>
      <HeadInfo info={indexInfo} />

      <LeftRightContainer>
        <Header />

        <KHKText />

        <Nav />
      </LeftRightContainer>

      <Subject order="첫 번째" name="20대를 남기다" backgroundColor="" />

      <Contact />

      <Footer />
    </>
  );
};

export default Index;

// Hamburger Modal
{
  /* <WrapBtnFunc>
          <BtnFunc>
            <LangChangeButton />
            <ModeChangeButton
              block="block"
              setMode={setMode}
              darkTheme={darkTheme}
              lightTheme={lightTheme}
            />
          </BtnFunc>
        </WrapBtnFunc>  */
}
