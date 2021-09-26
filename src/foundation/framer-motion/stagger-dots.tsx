import { motion } from 'framer-motion';
import styled from 'styled-components';

interface StaggerDotsPropTypes {
  color?: string;
  count?: number;
}

const StaggerDots = ({ color, count }: StaggerDotsPropTypes) => {
  const countNum = count ?? 3;
  const dots = Array(countNum)
    .fill(null)
    .map((_, idx) => <motion.span key={idx} variants={circleVariants} />);

  return (
    <motion.div //
      variants={staggerVariants}
      initial="initial"
      animate="animate"
    >
      <DotContainer color={color}>{dots}</DotContainer>
    </motion.div>
  );
};

export default StaggerDots;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;

  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin: 3px;
    background-color: ${({ theme }) => theme.gray2};
  }
`;

const staggerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const circleVariants: {
  initial: {
    y: string;
  };

  animate: {
    y: string;
    transition: {
      repeat: number;
      repeatType: 'reverse' | 'loop' | 'mirror' | undefined;
      duration: number;
    };
  };
} = {
  initial: {
    y: '80%',
  },

  animate: {
    y: '-80%',
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 0.4,
    },
  },
};
