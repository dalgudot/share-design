import styled from "styled-components";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { k } from "../lang/ko-twenties";
import { e } from "../lang/en-twenties";
import { kStaggerChildren } from "../lang/ko-twenties";
import { eStaggerChildren } from "../lang/en-twenties";

const TwentiesStaggerText = ({ text, staggerSpeed }) => {
  TwentiesStaggerText.propTypes = {
    text: PropTypes.string.isRequired,
    staggerChildren: PropTypes.number,
  };

  const lang = useSelector((state) => state.language);
  const string = Array.from(`${lang}` === "ko" ? k[text] : e[text]);

  const staggerChildren =
    `${lang}` === "ko"
      ? kStaggerChildren[staggerSpeed]
      : eStaggerChildren[staggerSpeed];

  return (
    <>
      <motion.div
        key={text}
        variants={staggerVariants(staggerChildren, lang)}
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
    </>
  );
};

export default TwentiesStaggerText;

// stagger에 종속되는 variants의 initial과 animate의 key는 stagger의 intial과 animate의 key와 같아야 함.
const staggerVariants = (staggerChildren, lang) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren:
          staggerChildren || `${lang}` === "ko"
            ? kStaggerChildren.medium
            : eStaggerChildren.medium,
      },
      // 길이가 더 긴 영어는 조금 더 빠른 속도 적용 위해 slow, medium, fast 3가지 속도로 나눔. 기본은 medium
    },
  };
};

// const staggerVariants = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.07 } },
// };

const letterVariants = {
  hidden: {
    opacity: 0,
    // 2px 정도 왼쪽에서 들어오면 자연스럽게 글씨가 나타남.
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
    },
  },
};

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;

  p {
    font-weight: 100;
    text-align: center;
  }

  @media all and (max-width: 639px) {
    top: 28%;

    p {
      font-size: 28px;
    }
  }

  @media all and (min-width: 640px) {
    p {
      font-size: 48px;
    }
  }
`;
