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
    .map((_, idx) => (
      <motion.span key={idx} variants={loadingCircleVariants} />
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
    background-color: ${({ theme }) => theme.gray1};
  }
`;

const loadingStaggerVariants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: '60%',
  },
  end: {
    y: '-60%',
    transition: {
      duration: 0.4,
      yoyo: 'Infinity',
    },
  },
};
