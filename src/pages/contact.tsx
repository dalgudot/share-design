import HeadSEO from '../elements/head-info/head-seo';
import { indexInfo } from '../elements/head-info/index/index-info';
import styled from 'styled-components';
import Footer from '../components/footer/footer';
import { mediaBreakPoint } from '../styles/common';
import Contact from '../components/tab-nav-bar/contact';
import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../lib/functions/visits-and-views';
import { bodyScrollTop } from '../lib/functions/body-scroll-top';

const IndexContact = ({ showToast }: { showToast: Function }) => {
  useEffect(() => {
    VisitsAndViewsDuringSession('Contact');
  }, []);
  bodyScrollTop();

  return (
    <>
      <HeadSEO info={indexInfo} />
      <Main>
        <Contact showToast={showToast} />
      </Main>
    </>
  );
};

export default IndexContact;

const Main = styled.main`
  // 변경 속성
  margin-top: 176px;
  margin-bottom: 72px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 100px;
    margin-bottom: 96px;
    padding: 0 4.5vw;
  }

  @media all and (min-width: ${mediaBreakPoint.second}) and (max-width: ${mediaBreakPoint.third}) {
    padding: 0 12vw;
  }

  @media all and (min-width: ${mediaBreakPoint.fourth}) {
    padding: 0 16.6667%;
  }
`;
