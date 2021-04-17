import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { stagger } from '../../../../elements/framer-motion/variants';
import H2Title700 from '../../../../elements/typography/h2-title-700';
import PMedium400 from '../../../../elements/typography/p-medium-400';
import PSmall400 from '../../../../elements/typography/p-small-400';
import { mediaBreakPoint } from '../../../../styles/common';
import ArticleCommonImage from '../article-common-image';

const UIUXDesignContents2 = ({
  contentsArray,
}: {
  contentsArray: object[];
}) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <>
      <PMedium400 //
        text={contentsArray[0]}
        color="gray3"
        marginTop="36px"
      />

      <ArticleCommonImage
        src={contentsArray[1]}
        caption={contentsArray[2]}
        marginTop="36px"
      />

      <PMedium400 //
        text={contentsArray[3]}
        color="gray3"
        marginTop="96px"
      />

      <PMedium400 //
        text={contentsArray[4]}
        color="gray3"
        marginTop="36px"
      />

      <PMedium400 //
        text={contentsArray[5]}
        color="gray3"
        marginTop="36px"
      />

      <PMedium400 //
        text={contentsArray[6]}
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

      <PMedium400 //
        text={contentsArray[0]}
        color="gray3"
        marginTop="36px"
      />
    </>
  );
};

export default UIUXDesignContents2;

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
    y: 16,
    scale: 0,
    opacity: 0,
    rotateX: 135,
  },

  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 1,
      smoothTransition,
    },
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
