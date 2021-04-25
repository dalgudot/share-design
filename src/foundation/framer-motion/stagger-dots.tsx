import { motion } from 'framer-motion';
import styled from 'styled-components';

interface StaggerDotsPropTypes {
  color?: string;
  count?: number;
}

// Big Button 로딩 컬러 => #d2c6cb
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
    margin: 3px;
    background-color: ${({ theme }) => theme.gray2};
  }
`;

const staggerVariants = {
  initial: {
    transition: {},
  },

  animate: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

// 타입 정의하지 않으면 repeatType에서 타입 에러
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
    y: '70%',
  },

  animate: {
    y: '-70%',
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 0.38,
    },
  },
};
