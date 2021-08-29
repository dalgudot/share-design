import { useRef } from 'react';
import styled from 'styled-components';
import { t } from '../../../data/index/t';
import IconContactFacebook24 from '../../../foundation/svg/icon_contact_facebook_24';
import IconContactLinkedIn24 from '../../../foundation/svg/icon_contact_linkedin_24';
import { useMyRipple } from '../../../library/hooks/useMyRipple';
import { useSetLanguage } from '../../../library/hooks/useSetLanguage';

const SocialArea = () => {
  const brunchRef = useRef(null);
  const facebookRef = useRef(null);
  const linkedinRef = useRef(null);
  useMyRipple(brunchRef);
  useMyRipple(facebookRef);
  useMyRipple(linkedinRef);

  return (
    <SocialDiv>
      <A href="https://brunch.co.kr/@dalgudot" target="_blank" ref={brunchRef}>
        <img
          src="/images/icon-contact-brunch@3x.png"
          alt={useSetLanguage(t.contact.brunchAlt)}
        />
      </A>
      <A
        href="https://www.facebook.com/dalgudot"
        target="_blank"
        ref={facebookRef}
      >
        <IconContactFacebook24 />
      </A>
      <A
        href="https://www.linkedin.com/in/dalgudot"
        target="_blank"
        ref={linkedinRef}
      >
        <IconContactLinkedIn24 />
      </A>
    </SocialDiv>
  );
};

export default SocialArea;

const SocialDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 48px;
  max-width: 480px;
  position: relative;

  // iOS bottom safe area
  margin-bottom: calc(env(safe-area-inset-bottom));

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;

const A = styled.a`
  height: 48px;
  width: 48px;
  background-color: ${({ theme }) => theme.gray7};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px ${({ theme }) => theme.gray8};
`;
