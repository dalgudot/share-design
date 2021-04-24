import styled from 'styled-components';
import { mediaBreakPoint } from '../styles/common';
import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../library/functions/visits-and-views';
import ProfileArea from '../components/page/contact/profile';
import EmailArea from '../components/page/contact/email';
import SocialArea from '../components/page/contact/social';
import AboutArea from '../components/page/contact/about';

const Contact = ({ showToast }: { showToast: Function }) => {
  useEffect(() => {
    VisitsAndViewsDuringSession('Contact');
  }, []);

  return (
    <>
      <Main>
        <ProfileArea />
        <EmailArea //
          showToast={showToast} // _app에서 Page Component에 전달된 showToast 함수 전달
        />
        <AboutArea />
        <SocialArea />
      </Main>
    </>
  );
};

export default Contact;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  // 변경 속성
  margin-top: 164px; // Contact에서만
  margin-bottom: ${({ theme }) => theme.margin.DesktopBottom};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 96px; // Contact에서만
    margin-bottom: 97px; // 48px + 1px + '48px'
    padding: ${({ theme }) => theme.padding.MobileWrap};
  }

  @media all and (min-width: ${mediaBreakPoint.second}) and (max-width: ${mediaBreakPoint.third}) {
    padding: ${({ theme }) => theme.padding.TabletWrap};
  }

  @media all and (min-width: ${mediaBreakPoint.fourth}) {
    padding: ${({ theme }) => theme.padding.DesktopWrap};
  }
`;
