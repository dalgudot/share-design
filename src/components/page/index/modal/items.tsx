import { NONAME } from 'dns';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

const Items = () => {
  return (
    <MotionLi
      key="items"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      exit="exit"
    >
      <Link href="/article/interaction-design-guide/1">
        <a>
          <div className="icon-placeholder" />
          <div className="text-placeholder" />
        </a>
      </Link>
    </MotionLi>
  );
};

export default Items;

// 부모와 자식 variants의 이름 통일해야 함.
const variants = {
  show: {
    y: 0,
    opacity: 1,
    display: 'flex',
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hide: {
    y: 50,
    opacity: 0,
    display: 'none',
    transition: {
      y: { stiffness: 1000 },
    },
  },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

const MotionLi = styled(motion.li)`
  display: flex;
  align-items: center;

  a {
    background-color: white;
    margin: 24px;
    width: 100%;
    height: 80px;
  }
  /* margin-top: 16px; */

  /* .icon-placeholder {
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
  } */
`;
