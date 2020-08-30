import { motion } from "framer-motion";
import styled from "styled-components";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <IntroText>
        <h1 className={styles.name__text}>김경환</h1>
        <span></span>
        <h1>UI/UX 디자이너</h1>
      </IntroText>
      <h1 className={styles.share__text}>UI/UX 디자인 경험을 공유합니다.</h1>
      <Line />
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
    height: 2px;
    background-color: #eeeeee;
    margin-left: 16px;
    margin-right: 17px;
    margin-top: 4px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #eeeeee;
  margin-top: 30vh;
`;
