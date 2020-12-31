import Link from 'next/link';
import styled from 'styled-components';
import Header from '../components/index/header';
import { DetectBrowserLang } from '../components/func/detect-browser-lang';
import Footer from '../components/index/footer';
import { useEffect } from 'react';
import { mediaBreakPoint } from '../styles/common';
import { VisitsAndViewsDuringSession } from '../components/func/visits-and-views';
import TabBarMobileOnly from '../components/index/tab-bar-mobile-only';
import Home from '../components/index/tab-state/home';
import MenuMobileOnly from '../components/index/tab-state/menu-mobile-only';
import { useSelector } from 'react-redux';
import React from 'react';

const Index = () => {
  DetectBrowserLang();
  useEffect(() => {
    VisitsAndViewsDuringSession('Index');
  }, []);

  // TabBarMobileOnly Toggle State
  const tabToggle = useSelector((state: any) => state.tabBar);
  const tabDisplay = tabToggle === 'home' ? <Home /> : <MenuMobileOnly />;

  return (
    <>
      <Header />

      <ContainerIndex>
        {/* <nav>왼쪽 내비게이션</nav> */}
        <Main>
          <ul>{tabDisplay}</ul>
        </Main>
      </ContainerIndex>

      {/* <Footer  /> */}
      <TabBarMobileOnly tabToggle={tabToggle} />
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

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 120px;
  }
`;
