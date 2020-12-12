import HeadInfo from '../components/head-info/head-info';
import { indexInfo } from '../components/head-info/head-info-text';
import Link from 'next/link';
import styled from 'styled-components';
import LangChangeButton from '../components/button/lang-change-button';
import Header from '../components/index/header';
import { DetectBrowserLang } from '../components/func/detect-browser-lang';
import ModeChangeButton from '../components/button/mode-change-button';
import Article from '../components/index/article';
import Contact from '../components/index/contact';
import Footer from '../components/index/footer';
import { useEffect } from 'react';
import languageFunc from '../components/func/language-func';
import { t } from '../components/index/lang/t';
import { mediaBreakPoint } from '../styles/common';

//   console.log(`innerWidth: ${window.innerWidth}`);
//   console.log(`innerHeight: ${window.innerHeight}`);

const Index = ({ setMode, darkTheme, lightTheme }) => {
  DetectBrowserLang();

  return (
    <>
      <ContainerIndex>
        <HeadInfo info={indexInfo} />

        <Header />

        <nav>{/* 왼쪽 내비게이션 */}</nav>

        <Main>
          {/* 두 가지 언어로 디자인하기 */}
          <ul>
            <Article
              href="/article/two-language"
              category={languageFunc(t.article1.category)}
              date={languageFunc(t.article1.date)}
              title={languageFunc(t.article1.title)}
              description={languageFunc(t.article1.description)}
            />
          </ul>
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
      </ContainerIndex>
    </>
  );
};

export default Index;

const ContainerIndex = styled.div`
  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: 0 4.5vw;
  }

  @media all and (min-width: ${mediaBreakPoint.second}) and (max-width: ${mediaBreakPoint.third}) {
    padding: 0 12vw;
  }

  @media all and (min-width: ${mediaBreakPoint.fourth}) {
    padding: 0 16.6667%;
  }
`;

const Main = styled.main``;
