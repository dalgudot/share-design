import { motion } from 'framer-motion';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import PMedium400 from '../../../../elements/typography/p-medium-400';
import { useWindowHeight } from '../../../../lib/hooks/useWindowHeight';
import { tArticle } from '../../article/text/t-article';
import Items from './items';

const ModalArticleList = ({
  modalActive,
  hideArticleList,
}: {
  modalActive: any;
  hideArticleList: any;
}) => {
  const themeContext = useContext(ThemeContext);
  const height: number = useWindowHeight();
  const itemIds = [0, 1, 2, 3, 4];

  return (
    <>
      <MotionUl
        height={height}
        variants={opacityVariants}
        initial={false}
        animate={modalActive === true ? 'show' : 'hide'}
      >
        <motion.ul variants={staggerVariants}>
          {itemIds.map((i) => (
            <Items key={i} />
          ))}
          <motion.button //
            onClick={() => hideArticleList()}
            variants={buttonHide}
            animate={modalActive === true ? 'show' : 'hide'}
          >
            <PMedium400 //
              text={tArticle.close}
              color={themeContext.gray2}
            />
          </motion.button>
        </motion.ul>
      </MotionUl>
    </>
  );
};

export default ModalArticleList;

const MotionUl = styled(motion.ul)<{ height: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${({ height }) => height}px;
  text-align: center;
  z-index: 20001;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    margin-top: 36px;
  }
`;

// Framer motion
const opacityVariants = {
  show: {
    opacity: [0, 1],
    zIndex: 30000,
    transition: {
      ease: 'easeInOut',
      duration: 0.3,
    },
  },

  hide: {
    opacity: [1, 0],
    zIndex: -1,
    transition: {
      when: 'afterChildren',
      ease: 'easeInOut',
      time: [0, 0.1],
    },
  },
};

const buttonHide = {
  show: {
    opacity: 1,
    // zIndex: 30000,
    y: 0,
    transition: {
      // ease: 'easeInOut',
      y: { stiffness: 1000, velocity: -100 },
    },
  },

  hide: {
    opacity: 0,
    // zIndex: -1,
    y: 10000,
    transition: {
      // ease: 'easeInOut',
      duration: 0,
      y: { stiffness: 1000 },
    },
  },
};

const staggerVariants = {
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  hide: {
    transition: { staggerChildren: 0.02, staggerDirection: -1 },
  },
};
