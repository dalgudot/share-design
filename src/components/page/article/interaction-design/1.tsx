import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';
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

  //   console.log(ref);
  console.log(inView);
  //   console.log(entry);

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
      <TestMotionDiv
        ref={ref}
        variants={smoothUp}
        initial={false}
        animate={inView ? 'animate' : 'initial'}
      />
    </>
  );
};

export default InteractionDesignContents1;

const TestMotionDiv = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.gray1};
  margin: 96px auto;
`;

const smoothTransition = { ease: [0.43, 0.13, 0.23, 0.96] };

const smoothUp = {
  initial: {
    y: 12,
    scale: 0.1,
    opacity: 0,
    transition: {
      duration: 1,
      smoothTransition,
    },
  },

  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      smoothTransition,
    },
  },

  exit: {
    y: 4,
    scale: 1.03,
    opacity: 0,
    transition: {
      duration: 0.2,
      smoothTransition,
    },
  },

  whileHover: {
    scale: 1.2,
  },

  whileTap: { scale: 0.9 },
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
