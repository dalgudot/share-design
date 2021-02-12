import { motion } from 'framer-motion';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import H1Title700 from '../../../../elements/typography/h1-title-700';
import PMedium400 from '../../../../elements/typography/p-medium-400';
import { useWindowHeight } from '../../../../lib/hooks/useWindowHeight';
import Items from './items';
import { mediaBreakPoint } from '../../../../styles/common';
import Profile from '../../profile';

const ModalArticleList = ({
  showModal,
  modalActive,
  hideArticleList,
  tArticle,
}: {
  showModal: any;
  modalActive: any;
  hideArticleList: any;
  tArticle: any;
}) => {
  const themeContext = useContext(ThemeContext);
  const itemIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const tArticleFunction = () => {
    if (
      modalActive === true &&
      showModal[0] === true &&
      showModal[1] === false
    ) {
      return {
        title: tArticle.interactionDesignGuide.title,
        close: tArticle.close,
      };
    } else if (
      modalActive === true &&
      showModal[0] === false &&
      showModal[1] === true
    ) {
      return { title: tArticle.koodonDesignStory.title, close: tArticle.close };
    }
  };
  const tArticleObject: any = tArticleFunction();
  const title = modalActive && tArticleObject.title;
  const categoryTitle =
    modalActive &&
    title.map((title: object[], idx: number) => (
      <H1Title700 key={idx} text={title} color={themeContext.gray1} />
    ));

  const height: number = useWindowHeight();

  return (
    <>
      <AbsoluteContatiner
        variants={ContatinerVariants}
        initial={false}
        animate={modalActive === true ? 'show' : 'hide'}
        height={height}
      >
        <MotionUl>
          {categoryTitle}
          <Profile />
          {/* <ListArea> */}
          {itemIds.map((i) => (
            <Items key={i} />
          ))}
          {/* </ListArea> */}
        </MotionUl>
      </AbsoluteContatiner>
      <MotionCloseButton //
        height={height}
        onClick={() => hideArticleList()}
        variants={buttonHide}
        animate={modalActive === true ? 'show' : 'hide'}
      >
        <PMedium400 //
          text={tArticle.close}
          color={themeContext.gray2}
        />
      </MotionCloseButton>
    </>
  );
};

export default ModalArticleList;

// Framer motion
const ContatinerVariants = {
  show: {
    opacity: [0, 1],
    zIndex: 30000,
    transition: {
      ease: 'easeInOut',
      duration: 0.3,
      // staggerChildren: 0.07,
      // delayChildren: 0.2,
    },
  },

  hide: {
    opacity: [1, 0],
    zIndex: -1,
    transition: {
      when: 'afterChildren',
      ease: 'easeInOut',
      time: [0, 0.1],
      // staggerChildren: 0.02,
      // staggerDirection: -1,
    },
  },
};

const buttonHide = {
  show: {
    opacity: 1,
    y: 0,
    x: '-50%',
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },

  hide: {
    opacity: 0,
    y: 16,
    x: '-50%',
    transition: {
      duration: 0,
      y: { stiffness: 1000 },
    },
  },
};

// const AbsoluteContatiner = styled(motion.main)<{ height: number }>`
const AbsoluteContatiner = styled(motion.section)<{ height: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${({ height }) => height}px;
  max-width: ${({ theme }) => theme.maxWidth.maxWidth};
  left: 50%;
  transform: translateX(-50%);

  /* overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  } */

  // 바뀌는 속성
  margin-top: 36px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: 0 4.5vw;
    margin-top: 24px;
  }
`;

const MotionUl = styled(motion.ul)`
  z-index: 1;
`;

const ListArea = styled(motion.div)`
  padding: 8px 16px 24px;
  background-color: rgba(230, 230, 245, 0.08);
  border: 1px solid rgba(230, 230, 245, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.PrimaryBorderRadius};
  margin-top: 24px;

  overflow-y: auto;
  height: 100%;

  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const MotionCloseButton = styled(motion.button)<{ height: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20000;
  /* height: ${({ height }) => height}px; */

  position: fixed;
  width: 100vw;
  height: 48px;
  background-color: salmon;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;
