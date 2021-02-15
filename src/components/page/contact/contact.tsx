import styled from 'styled-components';
import H3Title700 from '../../../elements/typography/h3-title-700';
import { mediaBreakPoint } from '../../../styles/common';
import { useContext, useRef } from 'react';
import { ThemeContext } from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { t } from '../../../data/index/t';
import { useSetLanguage } from '../../../lib/hooks/useSetLanguage';
import PSmall400 from '../../../elements/typography/p-small-400';
import H2Title700 from '../../../elements/typography/h2-title-700';
import { motion } from 'framer-motion';
import { smoothUp } from '../../../elements/framer-motion/variants';
import { useRipple } from 'react-use-ripple';
import IconContactFacebook24 from '../../../elements/svg/icon_contact_facebook_24';
import IconContactLinkedIn24 from '../../../elements/svg/icon_contact_linkedin_24';
import PMedium400 from '../../../elements/typography/p-medium-400';
import PMedium700 from '../../../elements/typography/p-medium-700';

const Contact = ({ showToast }: { showToast: Function }) => {
  const themeContext = useContext(ThemeContext);
  const toastMessage = t.contact.toastMessage;

  // useRipple
  const copyItRef = useRef(null);
  const sendEmailRef = useRef(null);
  useRipple(copyItRef, {
    rippleColor: 'rgba(0, 0, 0, 0.3)',
    animationLength: 500,
    rippleSize: 2000,
  });
  useRipple(sendEmailRef, {
    rippleColor: 'rgba(0, 0, 0, 0.3)',
    animationLength: 500,
    rippleSize: 2000,
  });

  const aboutData = t.contact.about;

  return (
    <MotionDiv
    // variants={smoothUp}
    // initial="initial"
    // animate="animate"
    // exit="exit"
    >
      <img
        className="profile__photo"
        src="/images/profile-photo.jpg"
        srcSet="/images/profile-photo@2x.jpg 2x,
                /images/profile-photo@3x.jpg 3x"
        alt={useSetLanguage(t.contact.profileAlt)}
      />
      <H3Title700 text={t.myName} color={themeContext.gray1} marginTop="8px" />
      <PSmall400 text={t.myJob} color={themeContext.gray3} />

      <EmailDiv>
        <H2Title700 text={t.myEmail} color={themeContext.gray1} />
        <EmailButtonDiv>
          <CopyToClipboard
            text="dalgudot@gmail.com"
            onCopy={() => showToast(toastMessage)}
          >
            <CopyButton ref={copyItRef}>
              <PSmall400
                text={t.contact.copyButton}
                color={themeContext.gray1}
              />
            </CopyButton>
          </CopyToClipboard>
          <SendButton ref={sendEmailRef}>
            <a href="mailto:dalgudot@gmail.com" target="_blank">
              <PSmall400
                text={t.contact.sendButton}
                color={themeContext.gray1}
              />
            </a>
          </SendButton>
        </EmailButtonDiv>
      </EmailDiv>

      <AboutDiv>
        {/* 인생 목표 */}
        <PMedium400
          text={aboutData.lifeGoal.title}
          color={themeContext.gray4}
          marginTop="24px"
        />
        {/* term 없음 */}
        <PMedium400
          text={aboutData.lifeGoal.contents}
          color={themeContext.gray1}
          marginTop="8px"
        />

        {/* 경력 */}
        <PMedium400
          text={aboutData.career.title}
          color={themeContext.gray4}
          marginTop="72px"
        />
        <PMedium700
          text={aboutData.career.contentsArray[0].term}
          color={themeContext.gray2}
          marginTop="8px"
        />
        <PMedium400
          text={aboutData.career.contentsArray[0].contents}
          color={themeContext.gray1}
        />
        <PMedium700
          text={aboutData.career.contentsArray[1].term}
          color={themeContext.gray2}
          marginTop="24px"
        />
        <PMedium400
          text={aboutData.career.contentsArray[1].contents}
          color={themeContext.gray1}
        />
        <PMedium700
          text={aboutData.career.contentsArray[2].term}
          color={themeContext.gray2}
          marginTop="24px"
        />
        <PMedium400
          text={aboutData.career.contentsArray[2].contents}
          color={themeContext.gray1}
        />

        {/* 개인 프로젝트 */}
        <PMedium400
          text={aboutData.personalProject.title}
          color={themeContext.gray4}
          marginTop="72px"
        />
        <PMedium700
          text={aboutData.personalProject.contentsArray[0].term}
          color={themeContext.gray2}
          marginTop="8px"
        />
        <PMedium400
          text={aboutData.personalProject.contentsArray[0].contents}
          color={themeContext.gray1}
        />
        <PMedium700
          text={aboutData.personalProject.contentsArray[1].term}
          color={themeContext.gray2}
          marginTop="24px"
        />
        <PMedium400
          text={aboutData.personalProject.contentsArray[1].contents}
          color={themeContext.gray1}
        />

        {/* 강연 */}
        <PMedium400
          text={aboutData.lecture.title}
          color={themeContext.gray4}
          marginTop="72px"
        />
        <PMedium700
          text={aboutData.lecture.contentsArray[0].term}
          color={themeContext.gray2}
          marginTop="8px"
        />
        <PMedium400
          text={aboutData.lecture.contentsArray[0].contents}
          color={themeContext.gray1}
        />
      </AboutDiv>

      <SocialDiv>
        <SocialLinkA href="https://brunch.co.kr/@dalgudot" target="_blank">
          <img
            src="/images/icon-contact-brunch.png"
            srcSet="/images/icon-contact-brunch@2x.png 2x,
                /images/icon-contact-brunch@3x.png 3x"
            alt={useSetLanguage(t.contact.brunchAlt)}
          />
        </SocialLinkA>
        <SocialLinkA href="https://www.facebook.com/dalgudot" target="_blank">
          <IconContactFacebook24 />
        </SocialLinkA>
        <SocialLinkA
          href="https://www.linkedin.com/in/dalgudot"
          target="_blank"
        >
          <IconContactLinkedIn24 />
        </SocialLinkA>
      </SocialDiv>
    </MotionDiv>
  );
};

export default Contact;

const MotionDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .profile__photo {
    width: 96px;
    height: 96px;
    border: solid 2px ${({ theme }) => theme.gray7};
    border-radius: 50%;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      width: 72px;
      height: 72px;
    }
  }
`;

const EmailDiv = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth.maxWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 36px;
  background-color: rgba(28, 28, 30, 0.4);
  border-radius: ${({ theme }) => theme.borderRadius.PrimaryBorderRadius};

  // 바뀌는 속성
  padding: 48px 0;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: 36px 0;
  }
`;

const EmailButtonDiv = styled.div`
  display: flex;
  width: 100%;
  margin-top: 24px;

  // 바뀌는 요소
  max-width: 360px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    max-width: 300px;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.gray7};
  border-radius: ${({ theme }) => theme.borderRadius.PrimaryBorderRadius};

  // 바뀌는 요소

  width: 200px;
  height: 54px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    width: 148px;
    height: 49px;
  }
`;

const CopyButton = styled(Button)``;

const SendButton = styled(Button)`
  margin-left: 9px;
`;

const AboutDiv = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth.maxWidth};
  background-color: rgba(28, 28, 30, 0.4);
  border-radius: ${({ theme }) => theme.borderRadius.PrimaryBorderRadius};

  // 바뀌는 속성
  margin-top: 24px;
  padding: 24px 48px 48px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 16px;
    padding: 12px 20px 24px;
  }
`;

const SocialDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 48px;
  max-width: 320px;
  position: relative;

  img {
    all: unset;
  }
`;

const SocialLinkA = styled.a`
  height: 48px;
  width: 48px;
  background-color: ${({ theme }) => theme.gray7};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
