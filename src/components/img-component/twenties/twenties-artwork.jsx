import styled from "styled-components";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { kAlt } from "../../lang/twenties-gallary/ko-twenties";
import { eAlt } from "../../lang/twenties-gallary/en-twenties";

const TwentiesArtwork = ({ src, alt }) => {
  TwentiesArtwork.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  };

  const lang = useSelector((state) => state.language);

  return (
    <Container>
      {/* AnimatePresence는 각 애니메이션의 구분을 위해 'key'가 필수! */}
      <motion.div
        key={alt}
        variants={fadeInOpacityVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div
          key={alt}
          variants={fadeInScaleVariants}
          initial="start"
          animate="end"
        >
          <Artwork src={src} alt={`${lang}` === "ko" ? kAlt[alt] : eAlt[alt]} />
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default TwentiesArtwork;

const fadeInOpacityVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      // anticipate: 앞질러 가다
      duration: 0.7,
    },
  },
};

const fadeInScaleVariants = {
  start: {
    scale: 0.985,
  },
  end: {
    scale: 1,

    // 후반부는 아주 천천히 확대되면서 이미지가 살아있는 느낌을 줌.
    // 효리네 민박 2에서 본 영상에서 아주아주 천천히 클로즈업 되는 효과 활용.
    // 온라인 관객과의 인터랙션
    transition: {
      ease: [0.19, 1.0, 0.22, 1.0],
      duration: 8,
    },
  },
};

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Artwork = styled.img`
  pointer-events: none;

  @media all and (max-width: 1199px) {
    width: 93vw;
    height: 62vw;
  }

  @media all and (min-width: 1200px) {
    width: 75vw;
    height: 50vw;
  }
`;
