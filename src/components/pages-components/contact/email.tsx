import { useRef } from 'react';
import styled from 'styled-components';
import { t } from '../../../data/index/t-index';
import { mediaBreakPoint } from '../../../styles/common';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useMyRipple } from '../../../lib/hooks/useMyRipple';
import PMedium from '../../../foundation/typography/p-medium';
import H3Title from '../../../foundation/typography/h2-title';

const EmailArea = ({ showToast }: { showToast: Function }) => {
  const copyItRef = useRef(null);
  const sendEmailRef = useRef(null);
  useMyRipple(copyItRef);
  useMyRipple(sendEmailRef);

  return (
    <EmailDiv>
      <H3Title text={t.myEmail} color="gray0" />
      <EmailButtonDiv>
        <CopyToClipboard
          text="dalgudot@gmail.com"
          onCopy={() => showToast(t.contact.toastMessage)}
        >
          <CopyButton ref={copyItRef}>
            <PMedium text={t.contact.copyButton} color="gray0" />
          </CopyButton>
        </CopyToClipboard>

        <SendButton ref={sendEmailRef}>
          <a href="mailto:dalgudot@gmail.com" target="_blank">
            <PMedium text={t.contact.sendButton} color="gray0" />
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
  background-color: ${({ theme }) => theme.gray8};
  border: solid 1px ${({ theme }) => theme.gray7};
  border-radius: ${({ theme }) => theme.borderRadius.R13};

  // 바뀌는 속성
  padding: 48px 0;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: 36px 0;

    h1 {
      font-size: 28px;
    }
  }
`;

const EmailButtonDiv = styled.div`
  display: flex;
  width: 100%;
  margin-top: 32px;

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
  margin-left: 11px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-left: 9px;
  }
`;
