import HeadInfo from '../components/head-info';
import { indexInfo } from '../components/lang/head-info/head-info-text';
import Link from 'next/link';
import styled from 'styled-components';
import LangChangeButton from '../components/button/lang-change-button';
import Header from '../components/index/header';
import { DetectBrowserLang } from '../components/func/detect-browser-lang';
import ModeChangeButton from '../components/button/mode-change-button';

const Index = ({ setMode, darkTheme, lightTheme }) => {
  DetectBrowserLang();

  return (
    <Container>
      <HeadInfo info={indexInfo} />

      <Header />

      <KHKText>
        UI/UX 디자인 경험을 <br />
        공유합니다.
      </KHKText>

      <Nav>
        <ul>
          <ol>
            <li>
              <span>첫 번째,</span>
            </li>
            <li>
              <span>20대를 남기다</span>
            </li>
          </ol>
          <ol>
            <li>
              <span>두 번째,</span>
            </li>
            <li>
              <span>프레이머 모션</span>
            </li>
          </ol>
        </ul>
      </Nav>

      {/* <WrapBtnFunc>
          <BtnFunc>
            <LangChangeButton />
            <ModeChangeButton
              block="block"
              setMode={setMode}
              darkTheme={darkTheme}
              lightTheme={lightTheme}
            />
          </BtnFunc>
        </WrapBtnFunc> */}

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
  );
};

export default Index;

const Container = styled.main`
  padding: 4vh 6vw 0;

  @media all and (min-width: 1200px) {
    padding: 5vh 13vw 0;
  }
`;

const KHKText = styled.h2`
  font-weight: 700;
  text-align: center;
  margin-top: 12vh;
`;

const Nav = styled.nav`
  width: 32rem;
  margin: 6vh auto 10vh;

  ol {
    margin-top: 2vh;
    font-size: 2rem;
    padding: 1.2rem;
    text-align: center;
    border-radius: 12px;
    box-shadow: '0 8px 48px rgba(0, 0, 0, 1)';
  }

  ol:nth-child(1) {
    background-color: #1c1a1a;
  }

  ol:nth-child(2) {
    background-color: #1c1a1a;
  }

  li {
    display: flex;
    justify-content: space-around;
  }
`;

const Footer = styled.footer`
  margin: 16vh auto 0;
  width: 100%;
  margin-bottom: 8vh;

  @media all and (min-width: 1200px) {
    bottom: 5vh 13vw 0;
  }

  div {
    display: flex;
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
