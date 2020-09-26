import HeadInfo from "../components/head-info";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxText from "../components/parallax-text";
import ParallaxImage from "../components/parallax-image";

const TwentiesGallary = () => {
  const twentiesText = [
    {
      key: 1,
      yOne: -40,
      yTwo: 15,
      textOne: "20대",
      textTwo: "",
      textThree: "",
      textFour: "",
    },

    {
      key: 2,
      yOne: -40,
      yTwo: 15,
      textOne: "30대",
      textTwo: "아하",
      textThree: "노",
      textFour: "",
    },
    {
      key: 3,
      yOne: -40,
      yTwo: 15,
      textOne: "40대",
      textTwo: "아하",
      textThree: "노",
      textFour: "어썸",
    },
  ];

  const mapTwentiesText = twentiesText.map((text) => (
    <ParallaxText
      key={text.key}
      yOne={text.yOne}
      yTwo={text.yTwo}
      textOne={text.textOne}
      textTwo={text.textTwo}
      textThree={text.textThree}
      textFour={text.textFour}
    />
  ));
  return (
    <>
      <ParallaxProvider>{mapTwentiesText}</ParallaxProvider>
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
