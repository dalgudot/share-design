import { motion } from 'framer-motion';
import styled from 'styled-components';

type LoadingSkeletonRectDate = {
  width: string;
  height: string;
};

const LoadingSkeletonRect = ({ width, height }: LoadingSkeletonRectDate) => {
  return (
    <Div
      width={width}
      height={height}
      variants={LoadingSkeletonRectVariants}
      initial="initial"
      animate="animate"
    ></Div>
  );
};

export default LoadingSkeletonRect;

type LoadingSkeletonRectDiv = {
  width: string;
  height: string;
};

const Div = styled(motion.div)<LoadingSkeletonRectDiv>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ theme }) => theme.gray5};
  border-radius: 4px;
`;

const LoadingSkeletonRectVariants: {
  initial: {
    opacity: number;
  };

  animate: {
    opacity: number;
    transition: {
      repeat: number;
      repeatType: 'reverse' | 'loop' | 'mirror' | undefined;
      duration: number;
    };
  };
} = {
  initial: {
    opacity: 0.64,
  },

  animate: {
    opacity: 0.2,
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 0.7,
      //   ease: 'easeInOut',
    },
  },
};
