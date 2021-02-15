import HeadSEO from '../../../../elements/head-info/head-seo';
import { interactionDesignGuideOneInfo } from '../../../../elements/head-info/article/interactionDesignGuide/1-info';
import styled, { ThemeContext } from 'styled-components';
import { useContext, useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../../../../lib/functions/visits-and-views';
import Share from '../../../../components/page/article/share-modal';
import Comment from '../../../../components/page/article/comment';
import { mediaBreakPoint } from '../../../../styles/common';
import { tArticle } from '../../../../data/article/t-article';
import PMedium400 from '../../../../elements/typography/p-medium-400';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import {
  fadeInOut,
  smoothUp,
  stagger,
} from '../../../../elements/framer-motion/variants';
import { useWindowWidth } from '../../../../lib/hooks/useWindowWidth';
import { useWindowHeight } from '../../../../lib/hooks/useWindowHeight';
import ArticleTitleArea from '../../../../components/page/article/article-title-area';
import { bodyScrollTop } from '../../../../lib/functions/body-scroll-top';

const InteractionDesignGuideOne = () => {
  const router = useRouter();
  useEffect(() => {
    VisitsAndViewsDuringSession(router.pathname);
  }, []);
  bodyScrollTop();

  const themeContext = useContext(ThemeContext);
  const width: number = useWindowWidth();
  const height: number = useWindowHeight();

  const categoryTitle = tArticle.interactionDesignGuide.smallTitle;
  const title = tArticle.interactionDesignGuide.articleList[0].articleTitle;
  const contentsTextArray = tArticle.interactionDesignGuide.title;
  return (
    <>
      <HeadSEO info={interactionDesignGuideOneInfo} />
      <MotionArticle
      // variants={stagger}
      // initial="initial"
      // animate="animate"
      // exit="exit"
      >
        <MotionBackground width={width} height={height} variants={fadeInOut} />

        <ArticleTitleArea categoryTitle={categoryTitle} title={title} />

        <MotionContentsDiv variants={smoothUp}>
          {contentsTextArray.map((text, index) => (
            <PMedium400
              key={index}
              text={text}
              color={themeContext.gray3}
              marginTop="24px"
            />
          ))}
        </MotionContentsDiv>
      </MotionArticle>
    </>
  );
};

export default InteractionDesignGuideOne;

type MotionBackgroundType = {
  height: number;
  width: number;
};

const MotionArticle = styled(motion.article)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${({ theme }) => theme.maxWidth.maxWidth};

  // 바뀌는 속성
  margin: 108px auto 48px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: 0 4.5vw;
    margin: 79px auto 72px;
  }
`;

const MotionBackground = styled(motion.div)<MotionBackgroundType>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ width }) => width}px;
  min-height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme.gray7};
  z-index: -1;
`;

const MotionContentsDiv = styled(motion.div)`
  margin-top: 36px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 24px;
  }
`;
