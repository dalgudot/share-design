import HeadSEO from '../elements/head-info/head-seo';
import { indexInfo } from '../elements/head-info/index/index-info';
import styled from 'styled-components';
import Footer from '../components/footer/footer';
import { mediaBreakPoint } from '../styles/common';
import Home from '../components/page/index/home';
import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../lib/functions/visits-and-views';
import { bodyScrollTop } from '../lib/functions/body-scroll-top';

const Index = () => {
  useEffect(() => {
    VisitsAndViewsDuringSession('Home');
  }, []);
  bodyScrollTop();

  return (
    <>
      <HeadSEO info={indexInfo} />
      <Main>
        <Home />
      </Main>
      {/* <Footer /> */}
    </>
  );
};

export default Index;

const Main = styled.main`
  margin-top: 108px;
  margin-bottom: 48px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 79px;
    margin-bottom: 90px;
    padding: 0 4.5vw;
  }

  @media all and (min-width: ${mediaBreakPoint.second}) and (max-width: ${mediaBreakPoint.third}) {
    padding: 0 12vw;
  }

  @media all and (min-width: ${mediaBreakPoint.fourth}) {
    padding: 0 16.6667%;
  }
`;
