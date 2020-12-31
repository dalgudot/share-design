import styled from 'styled-components';
import Header from '../components/index/header';
import { DetectBrowserLang } from '../components/func/detect-browser-lang';
import Footer from '../components/index/footer';
import { useEffect } from 'react';
import { mediaBreakPoint } from '../styles/common';
import { VisitsAndViewsDuringSession } from '../components/func/visits-and-views';
import NavTabBar from '../components/index/tab-bar-mobile-only';
import Home from '../components/index/tab-state/home';
import Menu from '../components/index/tab-state/menu';
import { useSelector } from 'react-redux';

const Index = () => {
  DetectBrowserLang();
  useEffect(() => {
    VisitsAndViewsDuringSession('Index');
  }, []);

  // NavTabBar Toggle State
  const tabToggle = useSelector((state: any) => state.tabBar);
  const tabDisplay = tabToggle === 'home' ? <Home /> : <Menu />;

  return (
    <>
      <Header />

      <ContainerIndex>
        <Main>{tabDisplay}</Main>
      </ContainerIndex>

      <Footer />
      <NavTabBar tabToggle={tabToggle} />
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
