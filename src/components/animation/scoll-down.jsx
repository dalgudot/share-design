import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const ScrollDown = () => {
  const [showScrollDown, setShowScrollDwon] = useState(true);

  const [initialScrollY] = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShowScrollDwon(false);
      }
      // console.log(showScrollDown, window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showScrollDown]);

  return (
    <AnimatePresence>
      <Wrap>
        {showScrollDown && (
          <motion.div
            variants={loaderVariants}
            animate="upAndDown"
            exit={{ opacity: 0 }}
            ref={initialScrollY}
          ></motion.div>
        )}
      </Wrap>
    </AnimatePresence>
  );
};

export default ScrollDown;

const Wrap = styled.section`
  position: absolute;
  bottom: 4%;
  right: 4vw;
  transform: translateX(-50%);

  div {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--gray1);
  }
`;

// Framer Motion
const loaderVariants = {
  upAndDown: {
    x: 0,
    y: [-60, 10],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  },
};
