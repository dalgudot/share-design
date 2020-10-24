import HeadInfo from "../components/head-info";
import { indexInfo } from "../components/lang/head-info/head-info-text";
import Link from "next/link";
import styled from "styled-components";
import LangChangeButton from "../components/button/lang-change-button";
import Header from "../components/index/header";
import { DetectBrowserLang } from "../components/lang/func/detect-browser-lang";

const Index = () => {
  // DetectBrowserLang();

  return (
    <>
      <HeadInfo info={indexInfo} />
      {/* <LangChangeButton /> */}

      <Header />

      <CenterAlign>
        <MainText>
          {/* Gradient Color Github Reference 참고 */}
          UX 디자인 경험을
          <br />
          공유합니다.
        </MainText>
        <CenterLine />
        <SubjectText>
          첫 번째,
          <br />
          20대를 남기다
        </SubjectText>
        <Link href="/twenties/twenties-page">
          <a>
            <SubjectButton>Comming Soon...</SubjectButton>
          </a>
        </Link>
        <SubjectList>
          <li></li>
          <div></div>
          <li></li>
          <div></div>
          <li></li>
        </SubjectList>
      </CenterAlign>

      <Footer />
    </>
  );
};

export default Index;

const CenterAlign = styled.section`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainText = styled.h1`
  font-size: 3.2rem;
  font-weight: 300;
  text-align: center;
  /* -webkit-text-fill-color: transparent;
  box-decoration-break: clone;
  background: -webkit-linear-gradient(-70deg, #db469f, #2188ff);
  background-clip: text; */
`;

const CenterLine = styled.div`
  width: 0.5px;
  height: 9.6rem;
  margin-top: 3.6rem;
  background-color: ${({ theme }) => theme.textPrimary};
`;

const SubjectText = styled.h1`
  font-size: 3.2rem;
  font-weight: 300;
  text-align: center;
  margin-top: 3.6rem;
`;

const SubjectButton = styled.button`
  font-size: 1.7rem;
  font-weight: 300;
  padding: 14px 24px;
  background-color: transparent;
  border: solid 1px ${({ theme }) => theme.textPrimary};
  margin-top: 2.4rem;
`;

const SubjectList = styled.ul`
  width: 100%;
  padding: 6rem 16.66667% 0;
  display: flex;
  justify-content: space-between;

  @media all and (max-width: 768px) {
    padding: 6rem 6% 0;
  }

  li {
    width: 100%;
    height: 36rem;
    background-color: #212121;
  }

  div {
    padding-left: 1.1rem;
  }
`;

const Footer = styled.footer`
  height: 10rem;
`;
