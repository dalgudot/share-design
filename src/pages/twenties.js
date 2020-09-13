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

      {/* Framer Motion - NextJS 활용법 */}
      {/* https://www.freecodecamp.org/news/how-to-add-interactive-animations-and-page-transitions-to-a-next-js-web-app-with-framer-motion/#step-0-installing-framer-motion-in-your-next-js-app */}
      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <h1>프레이머</h1>
      </motion.div> */}

      {/* react-scroll-parallax */}
      {/* https://www.npmjs.com/package/react-scroll-parallax */}
      <ParallaxProvider>
        <TextContainer>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <p>20살</p>
          </motion.div>
        </TextContainer>

        {/* [y1, y2] -> style="transform: translate3d(0%, y1 -> y2, 0px); */}
        {/* y의 변화 */}
        <Parallax y={[-40, 15]} tagOuter="figure">
          <TextContainer>
            <div>
              <p>설렜다</p>
            </div>
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
              <p>이대로 내 20대가</p>
              <p>끝나버리면 어떡하지?</p>
            </div>
          </TextContainer>
        </Parallax>

        <Parallax y={[-40, 15]} tagOuter="figure">
          <TextContainer>
            <div>
              <p>앞으로 무엇을</p>
              <p>하게 될까?</p>
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
