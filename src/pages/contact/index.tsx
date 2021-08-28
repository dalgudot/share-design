import styled from 'styled-components';
import { mediaBreakPoint } from '../../styles/common';
import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../../library/functions/visits-and-views';
import ProfileArea from '../../components/pages/contact/profile';
import EmailArea from '../../components/pages/contact/email';
import SocialArea from '../../components/pages/contact/social';
import AboutArea from '../../components/pages/contact/about';
import { useArvAmplitude } from '../../library/hooks/Amplitude/useArvAmplitude';

const ContactIndex = ({ showToast }: { showToast: Function }) => {
  useArvAmplitude('arv_contact');
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

export default ContactIndex;

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
`;
