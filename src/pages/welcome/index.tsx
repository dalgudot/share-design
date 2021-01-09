import Header from '../../components/index/header';
import SubNavBar from '../../components/index/sub-nav-bar/sub-nav-bar';
import { useSelector } from 'react-redux';
import WelcomeState from '../../components/index/sub-nav-bar/_welcome';
import ContactState from '../../components/index/sub-nav-bar/contact';
import styled from 'styled-components';
import { mediaBreakPoint } from '../../styles/common';
import { DetectBrowserLang } from '../../lib/funtions/detect-browser-lang';
import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../../lib/funtions/visits-and-views';

const Welcome = () => {
  DetectBrowserLang();
  useEffect(() => {
    VisitsAndViewsDuringSession('Welcome');
  }, []);

  const subNavToggle = useSelector((state: any) => state.subNavBar);

  const subNavDisplay =
    subNavToggle === 'welcome' ? <WelcomeState /> : <ContactState />;

  return (
    <>
      <Header />
      <SubNavBar subNavToggle={subNavToggle} />
      <Main>{subNavDisplay}</Main>
    </>
  );
};

export default Welcome;

const Main = styled.main`
  /* margin-top: 144px; */

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: 0 4.5vw;
    /* margin-top: 120px; */
  }
`;
