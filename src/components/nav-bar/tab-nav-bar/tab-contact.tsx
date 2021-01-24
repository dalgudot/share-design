import styled from 'styled-components';
import TextStyle from '../../typography/atoms/text-style';
import { fontWeight } from '../../typography/atoms/font';
import { mediaBreakPoint } from '../../../styles/common';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Image from 'next/image';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toastify } from '../../toast/toastify';
import { t } from '../../index/lang/t';
import { useSetLanguage } from '../../../lib/hooks/useSetLanguage';
import { useWindowHeight } from '../../../lib/hooks/useWindowHeight';

const Contact = () => {
  const themeContext = useContext(ThemeContext);
  const toastMessage: string = useSetLanguage(t.contact.toastMessage);
  const toastId: string = 'Copy Email';

  const hegiht: number = useWindowHeight();

  return (
    <Container>
      {/* <Image
        alt={useSetLanguage(t.contact.profileAlt)}
        src="/images/profile.jpg"
        width={72}
        height={72}
        quality={75}
        priority={true} // preload
      /> */}

      <img
        src="/images/profile.jpg"
        alt={useSetLanguage(t.contact.profileAlt)}
      />

      <TextStyle
        type="h3"
        text={useSetLanguage(t.myName)}
        textSize="single21"
        weight={fontWeight[700]}
        color={themeContext.gray1}
        marginTop="8px"
      />

      <TextStyle
        type="p"
        text={useSetLanguage(t.myJob)}
        textSize="single14"
        weight={fontWeight[400]}
        color={themeContext.gray3}
      />

      <EmailContainer>
        <TextStyle
          type="p"
          text="dalgudot@gmail.com"
          textSize="single27"
          weight={fontWeight[700]}
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
                textSize="single17"
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
                textSize="single17"
                weight={fontWeight[400]}
                color={themeContext.gray1}
              />
            </a>
          </SendButton>
        </EmailButtonContainer>
      </EmailContainer>

      <SocialContainer>
        <a href="https://brunch.co.kr/@dalgudot" target="_blank">
          <TextStyle
            type="p"
            text="Brunch"
            textSize="single17"
            weight={fontWeight[700]}
            color={themeContext.gray1}
          />
        </a>
        <a href="https://www.facebook.com/dalgudot" target="_blank">
          <TextStyle
            type="p"
            text="Facebook"
            textSize="single17"
            weight={fontWeight[700]}
            color={themeContext.gray1}
          />
        </a>
        <a href="https://www.linkedin.com/in/dalgudot" target="_blank">
          <TextStyle
            type="p"
            text="LinkedIn"
            textSize="single17"
            weight={fontWeight[700]}
            color={themeContext.gray1}
          />
        </a>
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

  // S of 중앙 가로 세로 중앙 정렬
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center; */
  // E of 중앙 가로 세로 중앙 정렬

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 100px;
  }
  img {
    width: 72px;
    height: 72px;
    border: solid 2px ${({ theme }) => theme.gray7};
    border-radius: 50%;
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

  a {
    // 밑줄 디자인
    border-bottom: solid 2px ${({ theme }) => theme.gray2};
  }
`;
