import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

const Items = ({ url }: { url?: string }) => {
  return (
    <MotionLi
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href="/article/interactionDesignGuide/1">
        <a />
      </Link>
    </MotionLi>
  );
};

export default Items;

// 부모와 자식 variants의 이름 통일해야 함.
const variants = {
  initial: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },

  exit: {
    opacity: 0,
    transition: { ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

const MotionLi = styled(motion.li)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px auto 0;

  a {
    border-radius: 5px;
    width: 100%;
    height: 30px;
    border: 1px solid white;
  }
`;
