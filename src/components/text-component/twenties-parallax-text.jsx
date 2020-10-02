import styled from "styled-components";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { k } from "../lang/twenties-gallary/ko-twenties";
import { e } from "../lang/twenties-gallary/en-twenties";

const TwentiesParallaxText = ({ textOne, textTwo, textThree }) => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  const lang = useSelector((state) => state.language);

  return (
    <TextContainer>
      <motion.p
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.7, ease: "easeOut" }}
        ref={ref}
      >
        {`${lang}` === "ko" ? k[textOne] : e[textOne]}
        <br />
        {`${lang}` === "ko" ? k[textTwo] : e[textTwo]}
        <br />
        {`${lang}` === "ko" ? k[textThree] : e[textThree]}
      </motion.p>
    </TextContainer>
  );
};

export default TwentiesParallaxText;

const TextContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 10vh;

  p {
    color: var(--white);
    font-weight: 100;
  }

  @media all and (max-width: 768px) {
    p {
      font-size: 30px;
    }
  }

  @media all and (min-width: 768px) {
    p {
      font-size: 48px;
    }
  }
`;

// Framer Motion
const variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 5,
  },
  visible: { opacity: 1, scale: 1, y: -5 },
};

TwentiesParallaxText.propTypes = {
  textOne: PropTypes.string.isRequired,
  textTwo: PropTypes.string,
  textThree: PropTypes.string,
};
