import styled from "styled-components";
import { motion } from "framer-motion";

const TwentiesText = ({ textOne }) => {
  return (
    <Container>
      <TextContainer>
        <motion.p
          variants={InitialTextVariants}
          initial="hidden"
          animate="visible"
        >
          {textOne}
        </motion.p>
      </TextContainer>
    </Container>
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

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const TextContainer = styled.main`
  /* width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; */

  position: absolute;
  top: 43%;
  /* transform: translateY(-0%); */
  left: 50%;
  transform: translateX(-50%);

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
