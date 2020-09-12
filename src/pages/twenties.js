import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Twenties.module.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

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
        <div>
          <p>20살</p>
        </div>
      </TextContainer>

      <ParallaxProvider>
        {/* [y1, y2] -> style="transform: translate3d(0%, y1 -> y2, 0px); */}
        {/* y의 변화 */}
        <Parallax y={[-40, 15]} tagOuter="figure">
          <TextContainer>
            <div>
              <p>참 설렜다</p>
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
              <p>20대는 내 생각과 달랐다</p>
            </div>
          </TextContainer>
        </Parallax>

        <Parallax y={[15, -40]} tagOuter="figure">
          <TextContainer>
            <img src="/images/a.jpg" />
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
  position: relative;
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

  img {
    width: 100vw;
    height: 100vh;
  }
`;
