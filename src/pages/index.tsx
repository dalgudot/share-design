import styled from 'styled-components';
import Header from '../components/index/header';
import { DetectBrowserLang } from '../lib/funtions/detect-browser-lang';
import Footer from '../components/index/footer';
import { useEffect } from 'react';
import { mediaBreakPoint } from '../styles/common';
import { VisitsAndViewsDuringSession } from '../lib/funtions/visits-and-views';
import TabNavBar from '../components/index/tab-nav-bar/tab-nav-bar';
import Home from '../components/index/tab-nav-bar/home';
import Menu from '../components/index/tab-nav-bar/menu';
import { useSelector } from 'react-redux';

const Index = () => {
  DetectBrowserLang();
  useEffect(() => {
    VisitsAndViewsDuringSession('Index');
  }, []);

  const tabToggle = useSelector((state: any) => state.tabBar);
  const tabDisplay = tabToggle === 'home' ? <Home /> : <Menu />;

  return (
    <>
      <Header />
      <Main>{tabDisplay}</Main>
      <Footer tabToggle={tabToggle} />
      <TabNavBar tabToggle={tabToggle} />
    </>
  );
};

export default Index;

const Main = styled.main`
  /* margin-top: 144px; */

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: 0 4.5vw;
    /* margin-top: 120px; */
  }

  @media all and (min-width: ${mediaBreakPoint.second}) and (max-width: ${mediaBreakPoint.third}) {
    padding: 0 12vw;
  }

  @media all and (min-width: ${mediaBreakPoint.fourth}) {
    padding: 0 16.6667%;
  }
`;
