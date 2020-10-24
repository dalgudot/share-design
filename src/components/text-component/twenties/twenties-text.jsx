import styled from "styled-components";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { k } from "../../lang/twenties-gallary/ko-twenties";
import { e } from "../../lang/twenties-gallary/en-twenties";

const TwentiesText = ({ textOne }) => {
  const lang = useSelector((state) => state.language);

  return (
    <Container>
      <TextContainer>
        <motion.p
          variants={InitialTextVariants}
          initial="hidden"
          animate="visible"
        >
          {`${lang}` === "ko" ? k[textOne] : e[textOne]}
        </motion.p>
      </TextContainer>
    </Container>
  );
};

export default TwentiesText;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const TextContainer = styled.main`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translateX(-50%);

  p {
    font-weight: 100;
    width: 100vw;
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

TwentiesText.propTypes = {
  textOne: PropTypes.string.isRequired,
};
