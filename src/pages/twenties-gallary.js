import HeadInfo from "../components/head-info";
import { twentiesInfo } from "../components/text/head-info-text";
import styled from "styled-components";
import { motion } from "framer-motion";
import LangChangeButton from "../components/button/lang-change-button";
import { k } from "../components/lang/twenties-gallary/ko-twenties";
import { e } from "../components/lang/twenties-gallary/en-twenties";
import { useSelector } from "react-redux";

const TwentiesGallary = () => {
  const lang = useSelector((state) => state.language);

  return (
    <>
      <HeadInfo info={twentiesInfo} />
      <LangChangeButton />

      <TextContainer>
        <motion.p
          variants={InitialTextVariants}
          initial="hidden"
          animate="visible"
        >
          {`${lang}` === "ko" ? k.twenty : e.twenty}
        </motion.p>
      </TextContainer>
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
