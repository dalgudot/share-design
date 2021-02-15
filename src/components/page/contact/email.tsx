import { useContext, useRef } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { t } from '../../../data/index/t';
import H2Title700 from '../../../elements/typography/h2-title-700';
import PSmall400 from '../../../elements/typography/p-small-400';
import { mediaBreakPoint } from '../../../styles/common';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useMyRipple } from '../../../lib/hooks/useMyRipple';

const EmailArea = ({ showToast }: { showToast: Function }) => {
  const themeContext = useContext(ThemeContext);
  const toastMessage = t.contact.toastMessage;

  const copyItRef = useRef(null);
  const sendEmailRef = useRef(null);
  useMyRipple(copyItRef);
  useMyRipple(sendEmailRef);

  return (
    <EmailDiv>
      <H2Title700 text={t.myEmail} color={themeContext.gray1} />
      <EmailButtonDiv>
        <CopyToClipboard
          text="dalgudot@gmail.com"
          onCopy={() => showToast(toastMessage)}
        >
          <CopyButton ref={copyItRef}>
            <PSmall400 text={t.contact.copyButton} color={themeContext.gray1} />
          </CopyButton>
        </CopyToClipboard>

        <SendButton ref={sendEmailRef}>
          <a href="mailto:dalgudot@gmail.com" target="_blank">
            <PSmall400 text={t.contact.sendButton} color={themeContext.gray1} />
          </a>
        </SendButton>
      </EmailButtonDiv>
    </EmailDiv>
  );
};

export default EmailArea;

const EmailDiv = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth.Paragraph};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 36px;
  background-color: rgba(28, 28, 30, 0.4);
  border-radius: ${({ theme }) => theme.borderRadius.Primary};

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
  border-radius: ${({ theme }) => theme.borderRadius.Primary};

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
