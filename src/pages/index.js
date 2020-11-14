import HeadInfo from '../components/head-info';
import { indexInfo } from '../components/lang/head-info/head-info-text';
import Link from 'next/link';
import styled from 'styled-components';
import LangChangeButton from '../components/button/lang-change-button';
import IndexHeader from '../components/index/header';
import { DetectBrowserLang } from '../components/func/detect-browser-lang';
import ModeChangeButton from '../components/button/mode-change-button';

const Index = ({ setMode, darkTheme, lightTheme }) => {
  DetectBrowserLang();

  return (
    <>
      <Container>
        <HeadInfo info={indexInfo} />
        <IndexHeader />

        <KHKText>
          UI/UX 디자인 경험을 <br />
          공유합니다.
        </KHKText>

        <SubjectHeader>
          <SubjectHeaderOrder>첫 번째</SubjectHeaderOrder>
          <SubjectHeaderLine />
          <SubjectHeaderName>20대를 남기다</SubjectHeaderName>
        </SubjectHeader>

        <SubjectContents>
          <Content />
          <Content className="middle__content" />
          <Content />
        </SubjectContents>

        <ContactKHK>
          <ContactLine />
          <ContactText>Contact</ContactText>
          <ContactEmail>dalgudot@gmail.com</ContactEmail>
          <ContactLine />
        </ContactKHK>

        <Footer>
          <FooterSocialWrap>
            <FooterSocial>
              <u>Brunch</u>
            </FooterSocial>
            <FooterSocial>
              <u>Facebook</u>
            </FooterSocial>
            <FooterSocial>
              <u>LinkedIn</u>
            </FooterSocial>
          </FooterSocialWrap>

          <FooterCopyright>
            ⓒ KyungHwan Kim. All rights reserved.
          </FooterCopyright>
        </Footer>
      </Container>
    </>
  );
};

export default Index;

{
  /* <WrapBtnFunc>
          <BtnFunc>
            <LangChangeButton />
            <ModeChangeButton
              block="block"
              setMode={setMode}
              darkTheme={darkTheme}
              lightTheme={lightTheme}
            />
          </BtnFunc>
        </WrapBtnFunc>  */
}

const Container = styled.main`
  padding: 4vh 6vw 0;
  // S of Footer 하단 고정 부모 요소, 자식 요소에서는 margin-top: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  // E of Footer 하단 고정 부모 요소

  @media all and (min-width: 1200px) {
    padding: 4vh 16vw 0;
  }
`;

const KHKText = styled.h1`
  font-weight: 700;
  margin-top: 12vh;

  @media all and (max-width: 767px) {
    font-size: 2.9rem;
    text-align: center;
  }
`;

// S of SubjectHeader
const SubjectHeader = styled.header`
  margin-top: 17vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media all and (max-width: 767px) {
    flex-direction: column;
  }
`;

const SubjectHeaderOrder = styled.h1`
  font-weight: 100;
  flex-grow: 0;

  @media all and (max-width: 767px) {
    font-size: 2.9rem;
  }
`;
// flex-grow가 0이면 flex container의 크기가 커져도 flex item의 크기가 커지지 않고 원래 크기 유지. 여기서는 3가지 요소 중 양쪽 글씨에만 적용함.

const SubjectHeaderLine = styled.div`
  height: 1px;
  margin: 0 2vw;
  background-color: ${({ theme }) => theme.gray1};
  opacity: 0.8;
  flex-grow: 1;

  @media all and (max-width: 767px) {
    width: 0.1rem;
    height: 5.9rem;
    margin: 4vw 0;
    flex-grow: 0;
  }
`;

const SubjectHeaderName = styled.h1`
  font-weight: 700;
  flex-grow: 0;

  @media all and (max-width: 767px) {
    font-size: 2.9rem;
  }
`;
// E of SubjectHeader

// S of SubjectContents
const SubjectContents = styled.section`
  margin-top: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .middle__content {
    margin: 0 1.5vw;
  }

  @media all and (max-width: 767px) {
    flex-direction: column;

    .middle__content {
      margin: 1.5vh 0;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  height: 36vh;
  background-color: ${({ theme }) => theme.gray1};
  opacity: 0.2;
`;
// E of SubjectContents

// S of Contact
const ContactKHK = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 24vh;
`;

const ContactLine = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: ${({ theme }) => theme.gray1};
  opacity: 0.8;
`;

const ContactText = styled.h1`
  font-weight: 700;
  margin-top: 8vh;
  margin-bottom: 0.1vh;

  @media all and (max-width: 767px) {
    font-size: 2.9rem;
  }
`;

const ContactEmail = styled.h1`
  font-weight: 300;
  margin-bottom: 8vh;

  @media all and (max-width: 767px) {
    font-size: 2.9rem;
  }
`;

// E of Contact

// S of Footer
const Footer = styled.footer`
  margin: 5vh auto 8vh;
  max-width: 1024px;
  display: flex;
  flex-direction: column;

  a {
    font-size: 1.7rem;
  }

  .social {
    margin-left: 2vw;
  }
`;

const FooterSocialWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterSocial = styled.a`
  font-size: 2.1rem;
`;

const FooterCopyright = styled.p`
  min-width: 480px;
  margin-top: 12vh;
  text-align: center;
  opacity: 0.7;
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: 0.5px;
`;
// E of Footer
