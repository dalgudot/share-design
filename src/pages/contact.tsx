import HeadSEO from '../elements/head/head';
import { indexInfo } from '../elements/head/index-info';
import styled from 'styled-components';
import Footer from '../components/footer/footer';
import { mediaBreakPoint } from '../styles/common';
import Contact from '../components/nav-bar/tab-nav-bar/contact';
import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../lib/functions/visits-and-views';
import { useDispatch, useSelector } from 'react-redux';

const IndexContact = () => {
  useEffect(() => {
    VisitsAndViewsDuringSession('Contact');
    modalActive === true && MODAL_ACTIVE_CHANGE();
  }, []);

  const modalActive = useSelector((state: any) => state.modalActive);
  const dispatch = useDispatch();
  const MODAL_ACTIVE_CHANGE = () =>
    dispatch({
      type: 'MODAL_ACTIVE_CHANGE',
    });

  return (
    <>
      <HeadSEO info={indexInfo} />
      <Main>
        <Contact />
      </Main>
      {/* <Footer tabToggle={tabToggle} /> */}
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
