import styled from 'styled-components';
import { mediaBreakPoint } from '../styles/common';
import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../lib/functions/visits-and-views';
import ProfileArea from '../components/pages-components/contact/profile';
import EmailArea from '../components/pages-components/contact/email';
import SocialArea from '../components/pages-components/contact/social';
import AboutArea from '../components/pages-components/contact/about';

const ContactIndex = () => {
  useEffect(() => {
    VisitsAndViewsDuringSession('Contact');
  }, []);

  return (
    <>
      <Main>
        <ProfileArea />
        <EmailArea />
        <AboutArea />
        {/* <SocialArea /> */}
      </Main>
    </>
  );
};

export default ContactIndex;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  // 변경 속성
  margin-top: ${({ theme }) => theme.margin.DesktopTop};
  margin-bottom: ${({ theme }) => theme.margin.DesktopBottom};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: ${({ theme }) => theme.margin.MobileTop};
    margin-bottom: ${({ theme }) => theme.margin.MobileBottom};
    padding: ${({ theme }) => theme.padding.LeftRightPadding};
  }
`;
