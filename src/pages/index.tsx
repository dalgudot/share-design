import HeadSEO from '../elements/head/head';
import { indexInfo } from '../elements/head/index-info';
import styled from 'styled-components';
import Footer from '../components/footer/footer';
import { mediaBreakPoint } from '../styles/common';
import TabNavBar from '../components/nav-bar/tab-nav-bar/tab-nav-bar';
import Home from '../components/nav-bar/tab-nav-bar/home';
import Contact from '../components/nav-bar/tab-nav-bar/contact';
import { useSelector } from 'react-redux';

const Index = () => {
  const tabToggle = useSelector((state: any) => state.tabNavBar);
  const tabDisplay = tabToggle === 'home' ? <Home /> : <Contact />;

  return (
    <>
      <HeadSEO info={indexInfo} />
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
