import { motion } from 'framer-motion';
import styled from 'styled-components';

const Items = () => {
  return (
    <MotionLi
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" />
      <div className="text-placeholder" />
    </MotionLi>
  );
};

export default Items;

// 부모와 자식 variants의 이름 통일해야 함.
const variants = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hide: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MotionLi = styled(motion.li)`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  .icon-placeholder {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    flex: 40px 0;
    margin-right: 20px;
    border: 1px solid white;
  }

  .text-placeholder {
    border-radius: 5px;
    width: 200px;
    height: 20px;
    flex: 1;
    border: 1px solid white;
  }
`;
