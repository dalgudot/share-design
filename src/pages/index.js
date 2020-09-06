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
      </Head>

      <IntroText>
        <h1 className={styles.text__name}>김경환</h1>
        {/* <span></span> */}
        <h1>UI/UX 디자이너</h1>
        <h1 className={styles.text__share}>UI/UX 디자인 경험을</h1>
        <h1 className={styles.text__share}>공유합니다.</h1>
        {/* 문자열만 "~"로 표기. 나머지는 {~} */}
      </IntroText>

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
    </>
  );
};

export default Home;

const IntroText = styled.section`
  width: 100%;
  color: #eeeeee;
  margin-top: 12vh;

  /* span {
    width: 22vw;
    height: 0.2vw;
    background-color: #eeeeee;
    margin-left: 16px;
    margin-right: 17px;
    margin-top: 4px;
  } */
`;

const Footer = styled.footer`
  width: 100%;
  height: 500px;
`;
