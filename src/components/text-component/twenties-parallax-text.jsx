import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TwentiesParallaxText = ({ textOne, textTwo, textThree }) => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <TextContainer>
      <motion.p
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.7, ease: "easeOut" }}
        ref={ref}
      >
        {textOne}
        <br />
        {textTwo}
        <br />
        {textThree}
      </motion.p>
    </TextContainer>
  );
};

export default TwentiesParallaxText;

// Framer Motion
const variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 5,
  },
  visible: { opacity: 1, scale: 1, y: -5 },
};

const TextContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 1vh;

  p {
    color: var(--white);
    font-size: 48px;
    font-weight: 100;
  }

  @media all and (min-width: 320px) and (max-width: 767px) {
    p {
      font-size: 30px;
    }
  }
`;
