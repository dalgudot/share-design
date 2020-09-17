import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Twenties.module.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  ParallaxProvider,
  Parallax,
  ParallaxBanner,
} from "react-scroll-parallax";

// Framer Motion
const InitialTextVariants = {
  hidden: {
    scale: 0.6,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.4,
    },
  },
};

const Twenties = () => {
  return (
    <>
      <Head>
        <title>20대를 남기다</title>
        <link rel="icon" href="/twenties.ico" />
      </Head>

      {/* <Link href="/">
        <a>Back</a>
      </Link> */}

      {/* react-scroll-parallax */}
      {/* https://www.npmjs.com/package/react-scroll-parallax */}
      <TextContainer>
        <motion.p
          variants={InitialTextVariants}
          initial="hidden"
          animate="visible"
        >
          20살
        </motion.p>
      </TextContainer>

      <ParallaxProvider>
        {/* [y1, y2] -> style="transform: translate3d(0%, y1 -> y2, 0px); */}
        {/* y의 변화 */}
        <Parallax y={[-40, 15]} tagOuter="figure">
          <TextContainer>
            <p>설렜다</p>
          </TextContainer>
        </Parallax>

        <Parallax y={[15, -40]} tagOuter="figure">
          <TextContainer>
            <div>
              <p>20대라는 게</p>
              <p>좋았다</p>
            </div>
          </TextContainer>
        </Parallax>

        <Parallax y={[15, -40]} tagOuter="figure">
          <TextContainer>
            <div>
              <p>하지만</p>
            </div>
          </TextContainer>
        </Parallax>

        <Parallax y={[-40, 15]} tagOuter="figure">
          <TextContainer>
            <div>
              <p>20대는</p>
              <p>내 생각과 달랐다</p>
            </div>
          </TextContainer>
        </Parallax>

        <ParallaxBanner
          // className="image__banner"
          layers={[
            {
              image: "/images/a.jpg",
              amount: -0.2,
            },
          ]}
          style={{
            width: "100vw",
            height: "66.6667vw",
            pointerEvents: "none",
          }}
        ></ParallaxBanner>

        <Parallax y={[15, -10]} tagOuter="figure">
          <TextContainer>
            <div>
              <p>이대로</p>
              <p>내 20대가</p>
              <p>끝이 나버리면</p>
              <p>어떡하지?</p>
            </div>
          </TextContainer>
        </Parallax>

        <Parallax y={[-10, 15]} tagOuter="figure">
          <TextContainer>
            <div>
              <p>나는 앞으로</p>
              <p>무엇을 하게 될까?</p>
            </div>
          </TextContainer>
        </Parallax>
      </ParallaxProvider>
    </>
  );
};

export default Twenties;

const TextContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  /* div는 2줄 이상에서 필요 */
  div {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    color: var(--white);
    font-size: 48px;
    font-weight: 100;
  }
`;
