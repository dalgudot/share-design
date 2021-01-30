import styled from 'styled-components';
import TextStyle from '../../../elements/typography/atoms/text-style';
import H3Title700 from '../../../elements/typography/h3-title-700';
import { fontWeight } from '../../../elements/typography/atoms/font';
import { mediaBreakPoint } from '../../../styles/common';
import { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toastify } from '../../../elements/toast/toastify';
import { t } from '../../page/index/text/t';
import { useSetLanguage } from '../../../lib/hooks/useSetLanguage';
import { VisitsAndViewsDuringSession } from '../../../lib/functions/visits-and-views';
import PSmall400 from '../../../elements/typography/p-small-400';
import H2Title700 from '../../../elements/typography/h2-title-700';

const Contact = () => {
  useEffect(() => {
    VisitsAndViewsDuringSession('Contact');
  }, []);

  const themeContext = useContext(ThemeContext);
  const toastMessage: string = useSetLanguage(t.contact.toastMessage);
  const toastId: string = 'Copy Email';

  return (
    <Container>
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
            <CopyButton>
              <TextStyle
                type="p"
                text={useSetLanguage(t.contact.copyButton)}
                textSize="small"
                weight={fontWeight[400]}
                color={themeContext.gray1}
              />
            </CopyButton>
          </CopyToClipboard>
          <SendButton>
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
    </Container>
  );
};

export default Contact;

const Container = styled.main`
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
  max-width: 300px;
  margin-top: 16px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.gray7};
  width: 148px;
  height: 49px;
  border-radius: ${({ theme }) => theme.borderRadius.PrimaryBorderRadius};
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
