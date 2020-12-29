import Link from 'next/link';
import styled from 'styled-components';
import Header from '../components/index/header';
import { DetectBrowserLang } from '../components/func/detect-browser-lang';
import ArticleList from '../components/index/article-list';
import ArticleListSimple from '../components/index/article-list-simple';
import Contact from '../components/index/contact';
import Footer from '../components/index/footer';
import { useEffect } from 'react';
import languageFunc from '../components/func/language-func';
import { t } from '../components/index/lang/t';
import { mediaBreakPoint } from '../styles/common';
import { motion } from 'framer-motion';
import { VisitsAndViewsDuringSession } from '../components/func/visits-and-views';
import NavRight from '../components/index/nav-right';
import TabBar from '../components/index/tab-bar';

const Index = ({ theme }: any) => {
  DetectBrowserLang();
  useEffect(() => {
    VisitsAndViewsDuringSession('Index');
  }, []);

  return (
    <>
      <ContainerIndex>
        <Header />
        {/* <nav>왼쪽 내비게이션</nav> */}
        <Main>
          {/* 두 언어로 디자인하기 */}
          <ul>
            <ArticleListSimple
              href="/"
              theme={theme}
              order={languageFunc(t.article1.titleSimpleOrder)}
              title={languageFunc(t.article1.titleSimple)}
            />
          </ul>
        </Main>
        {/* <NavRight theme={theme} /> */}
        <Footer />
      </ContainerIndex>
      {/* 모바일에서만 생김 */}
      <TabBar />
      {/* <BackgroundGlassmorphism /> */}
    </>
  );
};

export default Index;

const BackgroundGlassmorphism = styled.div`
  // Modal만 z-index: 10000;
  // 나머지 fixed 요소는 z-index: 9999;
  z-index: 10000;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  /* Grassmorphism */
  opacity: 0.999;
  color: ${({ theme }) => theme.backgroundColor};

  backdrop-filter: blur(120px) saturate(120%) brightness(95%) hue-rotate(10deg);
  /* -webkit-backdrop-filter: blur(1000px) saturate(120%) brightness(100%)
    hue-rotate(10deg); */

  transition: color 0.11s ease-in-out, backdrop-filter 0.11s ease-in-out;
  -webkit-transition: color 0.11s ease-in-out,
    -webkit-backdrop-filter 0.11s ease-in-out;
`;

const ContainerIndex = styled.div`
  /* 처음 배포 때만 임시로 */
  /* overflow-y: hidden; */

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

const Main = styled.main`
  margin-top: 144px;

  // 콘텐츠 없어도 footer 아래로
  min-height: 100vh;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 120px;
  }
`;

{
  /* <ArticleList
              // href="/article/two-language"
              theme={theme}
              // href="/"
              category={languageFunc(t.article1.category)}
              date={languageFunc(t.article1.date)}
              title={languageFunc(t.article1.title)}
              description={languageFunc(t.article1.description)}
            /> */
}
