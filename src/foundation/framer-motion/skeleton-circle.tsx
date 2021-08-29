import { motion } from 'framer-motion';
import styled from 'styled-components';

interface SkeletonCircleDate {
  width: string;
  height: string;
  duration: number;
}

const SkeletonCircle = ({ width, height, duration }: SkeletonCircleDate) => {
  return (
    <List width={width} height={height}>
      <motion.div
        className="circle"
        variants={skeletonVariants(duration)}
        initial="start"
        animate="end"
      ></motion.div>
    </List>
  );
};

export default SkeletonCircle;

interface SkeletonCircleList {
  width: string;
  height: string;
}

const List = styled.div<SkeletonCircleList>`
  .circle {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background-color: ${({ theme }) => theme.gray7};
    border-radius: 50%;
  }
`;

const skeletonVariants = (duration: number) => {
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
