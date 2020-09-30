import styled from "styled-components";
import { motion } from "framer-motion";

const TwentiesText = ({ textOne }) => {
  return (
    <TextContainer>
      <motion.p
        variants={InitialTextVariants}
        initial="hidden"
        animate="visible"
      >
        {textOne}
      </motion.p>
    </TextContainer>
  );
};

export default TwentiesText;

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
