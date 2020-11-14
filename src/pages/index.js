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
          <SubjectHeaderLine></SubjectHeaderLine>
          <SubjectHeaderName>20대를 남기다</SubjectHeaderName>
        </SubjectHeader>

        <SubjectContents>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
        </SubjectContents>

        <Footer>
          <div>
            <a>Brunch</a>
            <a className="social">Facebook</a>
            <a className="social">LinkedIn</a>
          </div>
          <div>
            <p className="copyright">ⓒ KyungHwan Kim. All rights reserved.</p>
          </div>
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
        </WrapBtnFunc> */
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
  margin-top: 22vh;
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
// flex-grow가 0이면 flex container의 크기가 커져도 flex item의 크기가 커지지 않고 원래 크기로 유지

const SubjectHeaderLine = styled.div`
  height: 1px;
  margin: 0 2vw;
  background-color: ${({ theme }) => theme.gray1};
  opacity: 0.8;
  flex-grow: 1;

  @media all and (max-width: 767px) {
    width: 0.1rem;
    height: 4.8rem;
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
  display: flex;

  @media all and (max-width: 767px) {
    flex-direction: column;
  }
`;
// E of SubjectContents

// S of Footer
const Footer = styled.footer`
  /* margin: 16vh auto 0; */
  /* width: 100%; */
  margin: auto auto 8vh;
  /* margin-top: auto; */

  div {
    /* margin-top: auto; */
    /* display: flex; */
  }

  a {
    font-size: 1.7rem;
  }

  p {
    font-size: 1.4rem;
  }

  .social {
    margin-left: 2vw;
  }

  .copyright {
    letter-spacing: 0px;
    margin-top: 1vh;
  }
`;
// E of Footer
