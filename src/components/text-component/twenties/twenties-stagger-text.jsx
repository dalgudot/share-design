import styled from "styled-components";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { k } from "../../lang/twenties-gallary/ko-twenties";
import { e } from "../../lang/twenties-gallary/en-twenties";

const TwentiesStaggerText = ({ text }) => {
  TwentiesStaggerText.propTypes = {
    text: PropTypes.string,
  };

  const lang = useSelector((state) => state.language);
  const string = Array.from(`${lang}` === "ko" ? k[text] : e[text]);

  return (
    // AnimatePresence는 각 애니메이션의 구분을 위해 'key'가 필수!
    // https://www.framer.com/api/motion/animate-presence/#usepresence
    <AnimatePresence>
      <Container>
        <motion.div
          key={text}
          variants={staggerVariants}
          initial="hidden"
          animate="show"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <TextContainer>
            {string.map((letter, index) => (
              <motion.p //
                key={index}
                variants={letterVariants}
              >
                {letter}
              </motion.p>
            ))}
          </TextContainer>
        </motion.div>
      </Container>
    </AnimatePresence>
  );
};

export default TwentiesStaggerText;

const Container = styled.main`
  width: 100vw;
  height: 66.6667vw;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;

  p {
    font-weight: 100;
    text-align: center;
  }

  @media all and (max-width: 768px) {
    p {
      font-size: 28px;
    }
  }

  @media all and (min-width: 768px) {
    p {
      font-size: 48px;
    }
  }
`;

// stagger에 종속되는 variants의 initial과 animate의 key는 stagger의 intial과 animate의 key와 같아야 함.
const staggerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const letterVariants = {
  hidden: {
    opacity: 0,
    x: -2,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "anticipate",
      // anticipate: 앞질러 가다
      damping: 100,
      stiffness: 80,
      staggerChildren: 0.15,
    },
  },
};
