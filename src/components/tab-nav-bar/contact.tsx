import styled from 'styled-components';
import TextStyle from '../../elements/typography/atoms/text-style';
import H3Title700 from '../../elements/typography/h3-title-700';
import { fontWeight } from '../../elements/typography/atoms/font';
import { mediaBreakPoint } from '../../styles/common';
import { useContext, useRef } from 'react';
import { ThemeContext } from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toastify } from '../../elements/toastify';
import { t } from '../../data/index/t';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';
import PSmall400 from '../../elements/typography/p-small-400';
import H2Title700 from '../../elements/typography/h2-title-700';
import { motion } from 'framer-motion';
import { smoothUp } from '../../elements/framer-motion/variants';
import { useRipple } from 'react-use-ripple';

const Contact = () => {
  const themeContext = useContext(ThemeContext);
  const toastMessage: string = useSetLanguage(t.contact.toastMessage);
  const toastId: string = 'Copy Email';

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

  return (
    <MotionContainer
      variants={smoothUp}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <img
        src="/images/profile.jpg"
        alt={useSetLanguage(t.contact.profileAlt)}
      />

      <H3Title700 text={t.myName} color={themeContext.gray1} marginTop="8px" />
      <PSmall400 text={t.myJob} color={themeContext.gray3} />

      <EmailContainer>
        <H2Title700
          text={t.myEmail}
          color={themeContext.gray1}
          marginTop="24px"
        />

        <EmailButtonContainer>
          <CopyToClipboard
            text="dalgudot@gmail.com"
            onCopy={() => toastify(toastMessage, toastId)}
          >
            <CopyButton ref={copyItRef}>
              <TextStyle
                type="p"
                text={useSetLanguage(t.contact.copyButton)}
                textSize="small"
                weight={fontWeight[400]}
                color={themeContext.gray1}
              />
            </CopyButton>
          </CopyToClipboard>
          <SendButton ref={sendEmailRef}>
            <a href="mailto:dalgudot@gmail.com" target="_blank">
              <TextStyle
                type="p"
                text={useSetLanguage(t.contact.sendButton)}
                textSize="small"
                weight={fontWeight[400]}
                color={themeContext.gray1}
              />
            </a>
          </SendButton>
        </EmailButtonContainer>
      </EmailContainer>

      <SocialContainer>
        {/* <a href="https://brunch.co.kr/@dalgudot" target="_blank">
          <TextStyle
            type="p"
            text="Brunch"
            textSize="small"
            weight={fontWeight[700]}
            color={themeContext.gray1}
          />
        </a>
        <a href="https://www.facebook.com/dalgudot" target="_blank">
          <TextStyle
            type="p"
            text="Facebook"
            textSize="small"
            weight={fontWeight[700]}
            color={themeContext.gray1}
          />
        </a>
        <a href="https://www.linkedin.com/in/dalgudot" target="_blank">
          <TextStyle
            type="p"
            text="LinkedIn"
            textSize="small"
            weight={fontWeight[700]}
            color={themeContext.gray1}
          /> 
        </a> */}
      </SocialContainer>
    </MotionContainer>
  );
};

export default Contact;

const MotionContainer = styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  // 모바일에서 스크롤 생겼을 때 하단 여백
  margin-bottom: 36px;
  // 변경 요소
  margin-top: 176px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 100px;
  }

  img {
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

const EmailContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 36px;
  padding-bottom: 24px;
  border-top: solid 1px ${({ theme }) => theme.gray7};
  border-bottom: solid 1px ${({ theme }) => theme.gray7};
  width: 100%;
  max-width: 640px;
`;

const EmailButtonContainer = styled.section`
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

const SocialContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
  max-width: 310px;
  position: relative;
`;
