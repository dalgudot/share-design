import styled from 'styled-components';
import { DetectBrowserLang } from '../lib/functions/detect-browser-lang';
import Footer from '../components/footer/footer';
import { useEffect } from 'react';
import { mediaBreakPoint } from '../styles/common';
import { VisitsAndViewsDuringSession } from '../lib/functions/visits-and-views';
import TabNavBar from '../components/nav-bar/tab-nav-bar/tab-nav-bar';
import Home from '../components/nav-bar/tab-nav-bar/home';
import Contact from '../components/nav-bar/tab-nav-bar/contact';
import { useSelector } from 'react-redux';

const Index = () => {
  DetectBrowserLang();

  const tabToggle = useSelector((state: any) => state.tabNavBar);
  const tabDisplay = tabToggle === 'home' ? <Home /> : <Contact />;

  return (
    <>
      <Main>{tabDisplay}</Main>
      <TabNavBar tabToggle={tabToggle} />
      {/* <Footer tabToggle={tabToggle} /> */}
    </>
  );
};

export default Index;

const Main = styled.main`
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
