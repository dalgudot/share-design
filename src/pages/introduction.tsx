import HeadSEO from '../elements/head-info/head-seo';
import styled, { ThemeContext } from 'styled-components';
import { useContext, useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../lib/functions/visits-and-views';
import Share from '../components/page/article/share-modal';
import { mediaBreakPoint } from '../styles/common';
import PMedium400 from '../elements/typography/p-medium-400';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import {
  fadeInOut,
  smoothUp,
  stagger,
} from '../elements/framer-motion/variants';
import { useWindowWidth } from '../lib/hooks/useWindowWidth';
import { useWindowHeight } from '../lib/hooks/useWindowHeight';
import ArticleTitleArea from '../elements/article-title-area';
import { indexInfo } from '../elements/head-info/index/index-info';
import { t } from '../data/index/t';
import { bodyScrollTop } from '../lib/functions/body-scroll-top';

const InteractionDesignGuideOne = () => {
  const router = useRouter();
  useEffect(() => {
    VisitsAndViewsDuringSession(router.pathname);
  }, []);
  bodyScrollTop();

  const themeContext = useContext(ThemeContext);
  const width: number = useWindowWidth();
  const height: number = useWindowHeight();

  // 여기만 categoryTitle을 date로 대체
  const date = t.shareDesignProjectIntroduction.date;
  const title = t.shareDesignProjectIntroduction.title;
  const contentsTextArray = t.shareDesignProjectIntroduction.contentsText;
  return (
    <>
      <HeadSEO info={indexInfo} />
      <MotionArticle
        variants={fadeInOut}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <MotionBackground width={width} height={height} />

        <ArticleTitleArea categoryTitle={date} title={title} />

        <MotionContentsDiv>
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
  margin: 108px auto 72px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: 0 4.5vw;
    margin: 79px auto 48px;
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
