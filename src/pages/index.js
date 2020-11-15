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
import { LeftRightMargin } from '../components/index/elements';
import LottieDownScroll from '../components/lottie/lottie-down-scroll';

const Index = ({ setMode, darkTheme, lightTheme }) => {
  DetectBrowserLang();

  return (
    <>
      <HeadInfo info={indexInfo} />

      <FirstView100vh>
        <LeftRightMargin>
          <Header />
          <KHKText />

          <BtnLayout>
            <LangChangeButton />
            <ModeChangeButton
              block="flex"
              setMode={setMode}
              darkTheme={darkTheme}
              lightTheme={lightTheme}
            />
          </BtnLayout>
        </LeftRightMargin>
        <LottieDownScroll />

        {/* 스크롤 모션 */}
      </FirstView100vh>

      <Rect />

      <Nav />

      <Subject order="첫 번째" name="20대를 남기다" backgroundColor="" />

      <Contact />

      <Footer />
    </>
  );
};

export default Index;

const FirstView100vh = styled.div`
  min-height: 100vh;
  /* align-items: center; */
  /* min-height: -webkit-fill-available; */
`;

const Rect = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  background-color: rebeccapurple;
`;

const BtnLayout = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 480px;
`;

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
