import Head from "next/head";
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
        <h1 className={styles.name__text}>김경환</h1>
        <span></span>
        <h1>UI/UX 디자이너</h1>
      </IntroText>
      <h1 className={styles.share__text}>UI/UX 디자인 경험을 공유합니다.</h1>
      <Subject order="001" title="Dark UI" date="2020.08.29 -" />
      {/* 문자열만 "~"로 표기. 나머지는 {~} */}
      <Subject order="002" title="Reponsive UI" date="2020.09.07 -" />
      <Footer />
    </>
  );
};

export default Home;

const IntroText = styled.section`
  width: 100%;
  color: #eeeeee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12vh;

  span {
    width: 22vw;
    height: 0.2vw;
    background-color: #eeeeee;
    margin-left: 16px;
    margin-right: 17px;
    margin-top: 4px;
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: 500px;
`;
