import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import Subject from "../components/subject";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Head>
        <title>KHK Portfolio</title>
        <link rel="icon" href="/kh.ico" />
      </Head>

      <Container>
        <IntroText>
          <h1 className={styles.text__name}>김경환</h1>
          <h1>UI/UX 디자이너</h1>
          <h1 className={styles.text__share}>UI/UX 디자인 경험을</h1>
          <h1 className={styles.text__share}>공유합니다.</h1>
        </IntroText>

        {/* 문자열만 "~"로 표기. 나머지는 {~} */}
        <Subject order="001" title="반응형 UI 디자인" date="2020.09.06 - " />
        <div className={styles.align__center}>
          <Link href="/twenties">
            <a>
              <button className={styles.button__neumorphism}>
                20대를 남기다
              </button>
            </a>
          </Link>
        </div>

        <Subject order="002" title="다크 모드" date="2020.00.00 -" />

        <Footer />
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  margin: 0 4.5vw;

  h1 {
    font-weight: 700;
  }

  @media all and (min-width: 320px) {
    .button__neumorphism {
      font-size: 18px;
    }

    h1 {
      font-size: 8vw;
    }
  }

  @media all and (min-width: 768px) {
    h1 {
      font-size: 6vw;
    }
  }

  @media all and (min-width: 1024px) {
    h1 {
      font-size: 4.5vw;
    }
  }

  @media all and (min-width: 1440px) {
    h1 {
      font-size: 4.2vw;
    }
  }
`;

const IntroText = styled.section`
  width: 100%;
  color: var(--white);
  margin-top: 12vh;
`;

const Footer = styled.footer`
  width: 100%;
  height: 500px;
`;
