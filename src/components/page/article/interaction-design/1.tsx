import {
  motion,
  useElementScroll,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { stagger } from '../../../../elements/framer-motion/variants';
import H2Title700 from '../../../../elements/typography/h2-title-700';
import PMedium400 from '../../../../elements/typography/p-medium-400';
import PSmall400 from '../../../../elements/typography/p-small-400';
import { mediaBreakPoint } from '../../../../styles/common';

const InteractionDesignContents1 = ({
  contentsArray,
}: {
  contentsArray: object[];
}) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  // const { scrollYProgress } = useViewportScroll();

  // const listRef = useRef(null);
  // const { scrollYProgress } = useElementScroll(listRef);

  // useTransform(value, inputRange, outputRange, options): MotionValue<O>
  // https://www.framer.com/api/motion/motionvalue/#motionvalue-api
  // const scale = useTransform(scrollYProgress, [0, 0.7], [0.2, 1]);
  // console.log(scale);

  return (
    <>
      <PMedium400 //
        text={contentsArray[0]}
        color="gray3"
        marginTop="36px"
      />
      <PMedium400 //
        text={contentsArray[0]}
        color="gray3"
        marginTop="36px"
      />
      <PMedium400 //
        text={contentsArray[0]}
        color="gray3"
        marginTop="36px"
      />
      <PMedium400 //
        text={contentsArray[0]}
        color="gray3"
        marginTop="36px"
      />

      <motion.ul
        ref={ref}
        variants={stagger}
        initial={false}
        animate={inView === true ? 'animate' : 'initial'}
      >
        <MotionList variants={listVariants} />
        <MotionList variants={listVariants} />
        <MotionList variants={listVariants} />
      </motion.ul>

      <PMedium400 //
        text={contentsArray[0]}
        color="gray3"
        marginTop="36px"
      />
      <PMedium400 //
        text={contentsArray[0]}
        color="gray3"
        marginTop="36px"
      />
      <PMedium400 //
        text={contentsArray[0]}
        color="gray3"
        marginTop="36px"
      />

      {/* <motion.ul
        variants={stagger}
        initial={false}
        animate="animate"
        style={{ overflow: 'scroll' }}
      >
        <MotionList
          variants={listVariants2}
          style={{
            scaleX: scrollYProgress,
          }}
        />
        <MotionList
          variants={listVariants2}
          style={{
            scaleX: scrollYProgress,
          }}
        />
        <MotionList
          variants={listVariants2}
          style={{
            scaleX: scrollYProgress,
          }}
        />
      </motion.ul> */}

      <PMedium400 //
        text={contentsArray[0]}
        color="gray3"
        marginTop="36px"
      />
    </>
  );
};

export default InteractionDesignContents1;

const MotionList = styled(motion.li)`
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.gray3};
  margin-top: 24px;
  border-radius: ${({ theme }) => theme.borderRadius.R13};
`;

const smoothTransition = { ease: [0.43, 0.13, 0.23, 0.96] };

const listVariants = {
  initial: {
    y: 12,
    scale: 0,
    opacity: 0,
    // rotateX: 90,
  },

  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    // rotateX: 0,
    transition: {
      duration: 1,
      smoothTransition,
    },
  },
};

const listVariants2 = {
  initial: {
    // y: 0,
    // scale: 0,
    opacity: 0.5,
    // rotateX: 90,
  },

  animate: {
    // y: 36,
    // scale: 1,
    opacity: 1,
    // rotateX: 0,
    // transition: {
    //   duration: 1,
    //   smoothTransition,
    // },
  },
};

const FigureWrap = styled.figure`
  margin: 96px auto 0;
  text-align: center;
  max-width: 380px;

  .example__lang_change_toggle {
    display: flex;
    justify-content: center;

    // 바뀌는 속성
    margin-right: 28px; // 중앙으로 보이도록 시각 보정

    @media all and (max-width: ${mediaBreakPoint.first}) {
      margin-right: 20px; // 중앙으로 보이도록 시각 보정
    }
  }
`;
