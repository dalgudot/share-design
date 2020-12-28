import Link from 'next/link';
import styled from 'styled-components';
import Header from '../components/index/header';
import { DetectBrowserLang } from '../components/func/detect-browser-lang';
import ArticleList from '../components/index/article-list';
import Contact from '../components/index/contact';
import Footer from '../components/index/footer';
import { useEffect } from 'react';
import languageFunc from '../components/func/language-func';
import { t } from '../components/index/lang/t';
import { mediaBreakPoint } from '../styles/common';
import { motion } from 'framer-motion';
import { VisitsAndViewsDuringSession } from '../components/func/visits-and-views';
import NavRight from '../components/index/nav-right';

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
            <ArticleList
              // href="/article/two-language"
              theme={theme}
              href="/"
              category={languageFunc(t.article1.category)}
              date={languageFunc(t.article1.date)}
              title={languageFunc(t.article1.title)}
              description={languageFunc(t.article1.description)}
            />
          </ul>
        </Main>
        {/* <NavRight theme={theme} /> */}
        <Footer />
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

const Main = styled.main`
  margin-top: 144px;

  // 콘텐츠 없어도 footer 아래로
  min-height: 100vh;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 120px;
  }
`;
