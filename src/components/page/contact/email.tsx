import { useRef } from 'react';
import styled from 'styled-components';
import { t } from '../../../data/index/t';
import H2Title700 from '../../../foundation/typography/h2-title-700';
import PSmall400 from '../../../foundation/typography/p-small-400';
import { mediaBreakPoint } from '../../../styles/common';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useMyRipple } from '../../../library/hooks/useMyRipple';

const EmailArea = ({ showToast }: { showToast: Function }) => {
  const copyItRef = useRef(null);
  const sendEmailRef = useRef(null);
  useMyRipple(copyItRef);
  useMyRipple(sendEmailRef);

  return (
    <EmailDiv>
      <H2Title700 text={t.myEmail} color="gray1" />
      <EmailButtonDiv>
        <CopyToClipboard
          text="dalgudot@gmail.com"
          onCopy={() => showToast(t.contact.toastMessage)}
        >
          <CopyButton ref={copyItRef}>
            <PSmall400 text={t.contact.copyButton} color="gray1" />
          </CopyButton>
        </CopyToClipboard>

        <SendButton ref={sendEmailRef}>
          <a href="mailto:dalgudot@gmail.com" target="_blank">
            <PSmall400 text={t.contact.sendButton} color="gray1" />
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
  background-color: ${({ theme }) => theme.gray7__40};
  border: solid 1px ${({ theme }) => theme.gray7};
  border-radius: ${({ theme }) => theme.borderRadius.R13};

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
  border-radius: ${({ theme }) => theme.borderRadius.R13};

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
