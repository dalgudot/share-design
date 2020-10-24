import { motion } from "framer-motion";
import styled from "styled-components";
import PropTypes from "prop-types";

const SkeletonRect = ({ width, height, duration }) => {
  SkeletonRect.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    duration: PropTypes.string, // type: number -> string
  };

  return (
    <List width={width} height={height}>
      <motion.div
        className="rect"
        variants={skeletonVariants(duration)}
        initial="start"
        animate="end"
      ></motion.div>
    </List>
  );
};

export default SkeletonRect;

const List = styled.div`
  .rect {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background-color: #999999;
    border-radius: 2px;
  }
`;

const skeletonVariants = (duration) => {
  return {
    start: {
      opacity: 0.64,
    },
    end: {
      opacity: 0.2,
      transition: {
        duration: +duration, // type: number -> string
        yoyo: Infinity,
        ease: "easeInOut",
      },
    },
  };
};
