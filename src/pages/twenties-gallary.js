import HeadInfo from "../components/head-info";
import Link from "next/link";
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

        <ParallaxImage imgOne="/images/a.jpg" amountOne={0} />

        <ParallaxText
          yOne={15}
          yTwo={-10}
          textOne="이대로"
          textTwo=""
          textThree=""
          textFour=""
        />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="내 20대가"
          textTwo=""
          textThree=""
          textFour=""
        />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="끝이 나버리면"
          textTwo="어떡하지?"
          textThree=""
          textFour=""
        />

        <ParallaxImage imgOne="/images/a.jpg" amountOne={0} />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="나는 앞으로"
          textTwo="무엇을 하게 될까?"
          textThree=""
          textFour=""
        />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="불안했다"
          textTwo=""
          textThree=""
          textFour=""
        />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="정해진 건"
          textTwo="아무것도 없었다"
          textThree=""
          textFour=""
        />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="이 선택이"
          textTwo="맞는 걸까?"
          textThree=""
          textFour=""
        />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="이렇게 해도"
          textTwo="괜찮은 걸까?"
          textThree=""
          textFour=""
        />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="이 길이"
          textTwo="맞는 걸까?"
          textThree=""
          textFour=""
        />

        <ParallaxImage imgOne="/images/a.jpg" amountOne={0} />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="방향을 잃었다"
          textTwo=""
          textThree=""
          textFour=""
        />

        <ParallaxImage imgOne="/images/a.jpg" amountOne={0} />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="나는"
          textTwo=""
          textThree=""
          textFour=""
        />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="무엇을 향해"
          textTwo="달리고 있는 걸까"
          textThree=""
          textFour=""
        />

        <ParallaxImage imgOne="/images/a.jpg" amountOne={0} />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="나는"
          textTwo=""
          textThree=""
          textFour=""
        />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="지금 무얼 하고"
          textTwo="있는 걸까"
          textThree=""
          textFour=""
        />

        <ParallaxImage imgOne="/images/a.jpg" amountOne={0} />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="무작정 달리고만"
          textTwo="있는 건 아닐지"
          textThree=""
          textFour=""
        />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="내가 아닌"
          textTwo=""
          textThree=""
          textFour=""
        />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="남들의"
          textTwo="시선 안에서"
          textThree=""
          textFour=""
        />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="살고 있는 건"
          textTwo="아닐지"
          textThree=""
          textFour=""
        />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="그건"
          textTwo="나에게"
          textThree=""
          textFour=""
        />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="너무"
          textTwo="미안한 일이"
          textThree="아닐지"
          textFour=""
        />

        <ParallaxImage imgOne="/images/a.jpg" amountOne={0} />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="조금은 쉬어가도"
          textTwo="되지 않을까"
          textThree=""
          textFour=""
        />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="가장 아름다울"
          textTwo="나의 20대를"
          textThree=""
          textFour=""
        />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="나를 위해"
          textTwo="살아야 하지 않을까"
          textThree=""
          textFour=""
        />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="나에게"
          textTwo=""
          textThree=""
          textFour=""
        />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="미안하지 않도록"
          textTwo=""
          textThree=""
          textFour=""
        />

        <ParallaxImage imgOne="/images/a.jpg" amountOne={0} />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="그게 뭐가"
          textTwo="그렇게 어렵다고"
          textThree=""
          textFour=""
        />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="조금만"
          textTwo=""
          textThree=""
          textFour=""
        />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="내려놓으면"
          textTwo="되는데"
          textThree=""
          textFour=""
        />

        <ParallaxImage imgOne="/images/a.jpg" amountOne={0} />

        <ParallaxText
          yOne={-10}
          yTwo={15}
          textOne="20대, 그대"
          textTwo=""
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

  @media all and (min-width: 320px) and (max-width: 767px) {
    p {
      font-size: 36px;
    }
  }
`;
