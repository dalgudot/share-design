import HeadInfo from "../components/head-info";
import Link from "next/link";
import styles from "../styles/Twenties.module.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxText from "../components/parallax-text";
import ParallaxImage from "../components/parallax-image";

const TwentiesGallary = () => {
  return (
    <>
      <HeadInfo
        title="20대를 남기다"
        icoImage="/twenties.ico"
        description="20대의 감정과 이야기"
        url="https://khk-design.kr/twenties-gallary"
        thumbnail="/images/a.jpg"
      />

      <TextContainer>
        <motion.p
          variants={InitialTextVariants}
          initial="hidden"
          animate="visible"
        >
          20살
        </motion.p>
      </TextContainer>

      {/* 문자열만 "~"로 표기. 나머지는 {~} */}
      <ParallaxProvider>
        <ParallaxText
          yOne={-40}
          yTwo={15}
          textOne="설렜다"
          textTwo=""
          textThree=""
          textFour=""
        />

        <ParallaxText
          yOne={15}
          yTwo={-10}
          textOne="20대라는 게"
          textTwo="좋았다"
          textThree=""
          textFour=""
        />

        <ParallaxText
          yOne={-40}
          yTwo={15}
          textOne="하지만"
          textTwo=""
          textThree=""
          textFour=""
        />

        <ParallaxText
          yOne={15}
          yTwo={-10}
          textOne="20대는"
          textTwo="내 생각과 달랐다"
          textThree=""
          textFour=""
        />

        {/* <ParallaxImage img="/images/a.jpg" amountFigure="-0.1" /> */}

        <ParallaxImage imgOne="/images/a.jpg" amountOne={0.1} />

        <ParallaxText
          yOne={15}
          yTwo={-10}
          textOne="이대로"
          textTwo="내 20대가"
          textThree="끝이 나버리면"
          textFour="어떡하지?"
        />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="나는 앞으로"
          textTwo="무엇을 하게 될까?"
          textThree=""
          textFour=""
        />
      </ParallaxProvider>
    </>
  );
};

export default TwentiesGallary;

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

const TextContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: var(--white);
    font-size: 48px;
    font-weight: 100;
  }
`;
