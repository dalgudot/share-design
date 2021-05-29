import { motion } from 'framer-motion';
import styled from 'styled-components';

const SVGTest = () => {
  return (
    <>
      <Div variants={divVariants} initial="initial" animate="animate">
        <SVG
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          //   variants={svgVariants}
          //   initial="initial"
          //   animate="animate"
        >
          <g
            id="Artboard"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <motion.path
              d="M4,11 C4,11 6,13 10,17 L20,5"
              id="Path"
              stroke="#363636"
              strokeWidth="2"
              variants={pathVariants}
              initial="initial"
              animate="animate"
            ></motion.path>
          </g>
        </SVG>
      </Div>
    </>
  );
};

export default SVGTest;

const Wrap = styled.div``;

const Div = styled(motion.div)`
  margin: 100px auto 0;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;

const SVG = styled(motion.svg)`
  /* position: absolute;
  top: 50%;
  left: 50%; */

  g {
  }

  path {
  }
`;

const divVariants = {
  initial: {
    scale: 0.9,
    // rotate: 3600,
  },
  animate: {
    scale: [1, 1.2, 1],
    // rotate: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const svgVariants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 360,
  },
};

const pathVariants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
      delay: 0.1,
    },
  },
};
