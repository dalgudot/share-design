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

      <div className={styles.center__align}>
        <Link href="/twenties">
          <a>
            <motion.button
              className={styles.button__test}
              whileHover={{ scale: 1.4 }}
              transition={{ type: "spring", stiffness: 110, duration: 0.1 }}
            >
              20대를 남기다
            </motion.button>
          </a>
        </Link>
      </div>

      {/* <IntroText>
        <h1 className={styles.text__name}>김경환</h1>
        <h1>UI/UX 디자이너</h1>
        <h1 className={styles.text__share}>UI/UX 디자인 경험을</h1>
        <h1 className={styles.text__share}>공유합니다.</h1>
      </IntroText> */}

      {/* 문자열만 "~"로 표기. 나머지는 {~} */}
      {/* <Container>
        <Subject order="001" title="20대를 남기다" date="2017.05.26 - " />
        <div className={styles.align__center}>
          <Link href="/twenties">
            <a>
              <button className={styles.button__test}>
                20대를 남기다
              </button>
            </a>
          </Link>
        </div>

        <Subject order="002" title="Coming Soon..." date="2020.00.00 -" />

        <Footer />
      </Container> */}
    </>
  );
};

export default Home;

const IntroText = styled.section`
  /* width: 100%; */
  color: var(--white);
  margin-top: 16vh;
  margin-left: 4.5vw;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: cneter;
  align-items: flex-start;

  h1 {
    font-weight: 700;
    font-size: 5vw;
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: 500px;
`;

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
