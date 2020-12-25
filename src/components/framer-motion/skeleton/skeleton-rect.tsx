import { motion } from 'framer-motion';
import styled from 'styled-components';
import PropTypes from 'prop-types';

interface SkeletonRectDate {
  width: string;
  height: string;
  duration: string;
}

const SkeletonRect = ({ width, height, duration }: SkeletonRectDate) => {
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

interface SkeletonRectList {
  width: string;
  height: string;
}

const List = styled.div<SkeletonRectList>`
  .rect {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background-color: #999999;
    border-radius: 2px;
  }
`;

const skeletonVariants = (duration: string) => {
  return {
    start: {
      opacity: 0.64,
    },
    end: {
      opacity: 0.2,
      transition: {
        duration: +duration, // type: number -> string
        yoyo: Infinity,
        ease: 'easeInOut',
      },
    },
  };
};
