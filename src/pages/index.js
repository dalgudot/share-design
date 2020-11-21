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
import { LeftRightMargin } from '../components/index/common-elements';
import { useEffect } from 'react';

const Index = ({ setMode, darkTheme, lightTheme }) => {
  // DetectBrowserLang();

  useEffect(() => {
    console.log(screen.availHeight);
  }, []);

  return (
    <>
      <LeftRightMargin>
        <HeadInfo info={indexInfo} />

        <FirstView100vh>
          <Header />
          <KHKText />

          {/* 토글 버튼으로 교체 */}
          <BtnLayout>
            <LangChangeButton />
            <ModeChangeButton
              block="flex"
              setMode={setMode}
              darkTheme={darkTheme}
              lightTheme={lightTheme}
            />
          </BtnLayout>
          {/* 스크롤 모션 */}
        </FirstView100vh>

        {/* Subject 내부의 Nav는 sticky! */}
        <Subject order="첫 번째" name="20대를 남기다" backgroundColor="" />

        <Contact />

        <Footer />
      </LeftRightMargin>
    </>
  );
};

export default Index;

const FirstView100vh = styled.div`
  min-height: 97vh;
`;

const BtnLayout = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 auto 48px;
  max-width: 480px;

  .right__button {
    margin-left: 4vw;
  }
`;
