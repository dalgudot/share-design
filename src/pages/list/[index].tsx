import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import Items from '../../components/page/index/modal/items';
import { useWindowHeight } from '../../lib/hooks/useWindowHeight';
import HeadSEO from '../../elements/head/head';
import { indexInfo } from '../../elements/head/index-info';
import Router from 'next/router';
import Profile from '../../components/page/profile';
import { tArticle } from '../../components/page/article/text/t-article';
import PMedium400 from '../../elements/typography/p-medium-400';
import { mediaBreakPoint } from '../../styles/common';

const List = () => {
  const themeContext = useContext(ThemeContext);
  const backgroundGradient: string = themeContext.gradientPurple;
  const height: number = useWindowHeight();
  const itemIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // const title = {
  //   title: tArticle.interactionDesignGuide.title,
  //   title: tArticle.koodonDesignStory.title,
  // };

  // const categoryTitle = title.map((title, idx) => (
  //   <H1Title700 key={idx} text={title} color={themeContext.gray1} />
  // ));

  return (
    <>
      <HeadSEO info={indexInfo} />
      <MotionBackground
        variants={BackgroundVariants}
        initial="initial"
        animate="show"
        exit="exit"
        backgroundGradient={backgroundGradient}
        height={height}
      >
        {/* {categoryTitle} */}
        <h1>안녕</h1>
        <Profile />
        <ListArea>
          {itemIds.map((i) => (
            <Items key={i} />
          ))}
        </ListArea>
        <MotionCloseButton //
          onClick={() => Router.push('/')}
          variants={BackgroundVariants}
          initial="initial"
          animate="show"
          exit="exit"
        >
          <PMedium400 //
            text={tArticle.close}
            color={themeContext.gray2}
          />
        </MotionCloseButton>
        <FillEmptySpace />
      </MotionBackground>
    </>
  );
};

export default List;

const BackgroundVariants = {
  initial: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },

  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

type MotionBackgroundType = {
  backgroundGradient: string;
  height: number;
};

const MotionBackground = styled(motion.main)<MotionBackgroundType>`
  width: 100vw;
  min-height: ${({ height }) => height}px;
  background: linear-gradient(
    ${({ backgroundGradient }) => backgroundGradient}
  );
  padding-top: 24px;
  /* margin-bottom: 64px; */

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: 0 4.5vw;
  }

  @media all and (min-width: ${mediaBreakPoint.second}) and (max-width: ${mediaBreakPoint.third}) {
    padding: 0 12vw;
  }

  @media all and (min-width: ${mediaBreakPoint.fourth}) {
    padding: 0 16.6667%;
  }
`;

const ListArea = styled(motion.div)`
  padding: 8px 16px;
  background-color: rgba(230, 230, 245, 0.08);
  border: 1px solid rgba(230, 230, 245, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.PrimaryBorderRadius};
  margin-top: 24px;
`;

const MotionCloseButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  /* z-index: 20000; */

  margin-top: 24px;
  position: fixed;
  width: 100%;
  min-width: 480px;
  max-width: ${({ theme }) => theme.maxWidth};
  height: 48px;
  background-color: salmon;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const FillEmptySpace = styled.div`
  height: 72px;
`;
