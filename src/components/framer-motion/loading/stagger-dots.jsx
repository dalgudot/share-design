import { motion } from "framer-motion";
import styled from "styled-components";
import PropTypes from "prop-types";

// Big Button 로딩 컬러 => #d2c6cb
const StaggerDots = ({ color, count }) => {
  StaggerDots.propTypes = {
    color: PropTypes.string,
    count: PropTypes.number,
  };

  // ind = index
  const countNum = count || 3;
  const dots = Array(countNum)
    .fill()
    .map((_, idx) => (
      <motion.span key={idx} variants={loadingCircleVariants}></motion.span>
    ));

  return (
    <motion.div //
      variants={loadingStaggerVariants}
      initial="start"
      animate="end"
    >
      <Container color={color}>{dots}</Container>
    </motion.div>
  );
};

export default StaggerDots;

const Container = styled.div`
  display: flex;

  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin: 4px;
    background-color: ${({ color }) => color};
  }
`;

const loadingStaggerVariants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "50%",
  },
  end: {
    y: "-50%",
    transition: {
      duration: 0.4,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
};
