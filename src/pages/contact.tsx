import HeadSEO from '../elements/head-info/head-seo';
import { indexInfo } from '../elements/head-info/index/index-info';
import styled from 'styled-components';
import Footer from '../components/footer/footer';
import { mediaBreakPoint } from '../styles/common';
import Contact from '../components/tab-nav-bar/contact';
import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../lib/functions/visits-and-views';

const IndexContact = () => {
  useEffect(() => {
    VisitsAndViewsDuringSession('Contact');
  }, []);

  return (
    <>
      <HeadSEO info={indexInfo} />
      <Main>
        <Contact />
      </Main>
    </>
  );
};

export default IndexContact;

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