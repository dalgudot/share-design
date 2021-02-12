import HeadSEO from '../../../../elements/head/head';
import { articlePortfolioOneInfo } from '../../../../elements/head/article/portfolio/1';
import styled, { ThemeContext, DefaultTheme } from 'styled-components';
import { useContext, useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../../../../lib/functions/visits-and-views';
import Share from '../../../../components/page/article/share-modal';
import Comment from '../../../../components/page/article/comment';
import { mediaBreakPoint } from '../../../../styles/common';
import { tArticle } from '../../../../components/page/article/text/t-article';
import H1Title700 from '../../../../elements/typography/h1-title-700';
import PMedium400 from '../../../../elements/typography/p-medium-400';
import { motion } from 'framer-motion';
import Profile from '../../../../elements/profile';
import { useRouter } from 'next/router';

const ArticlePortfolioOne = () => {
  const router = useRouter();
  useEffect(() => {
    VisitsAndViewsDuringSession(router.pathname);
  }, []);

  const themeContext: DefaultTheme = useContext(ThemeContext);

  const TitleTextArray = tArticle.portfolioDesignStory.article1.title;
  const titleText = TitleTextArray.map((text, index) => (
    <H1Title700
      key={index}
      text={text}
      color={themeContext.gray1}
      marginTop="4px"
    />
  ));

  const contentsTextArray = tArticle.portfolioDesignStory.article1.contentsText;
  const contentsText = contentsTextArray.map((text, index) => (
    <PMedium400
      key={index}
      text={text}
      color={themeContext.gray3}
      marginTop="36px"
    />
  ));

  return (
    <>
      <HeadSEO info={articlePortfolioOneInfo} />
      <MotionMain
        key="article"
        variants={variants}
        initial={false}
        animate="show"
        exit="exit"
      >
        <Profile />
      </MotionMain>
    </>
  );
};

export default ArticlePortfolioOne;

const MotionMain = styled(motion.main)`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth.maxWidth};
  margin: 140px auto;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: 0 4.5vw;
  }
`;

const variants = {
  show: {
    y: 0,
    opacity: 1,
    display: 'flex',
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hide: {
    y: 50,
    opacity: 0,
    display: 'none',
    transition: {
      y: { stiffness: 1000 },
    },
  },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

const AuthorData = styled.section`
  margin-top: 8px;
  display: flex;
  align-items: center;

  img {
    width: 28px;
    height: 28px;
    border: solid 2px ${({ theme }) => theme.gray7};
    border-radius: 50%;
    margin-right: 6px;
  }

  span {
    height: 2px;
    width: 2px;
    background-color: ${({ theme }) => theme.gray4};
    border-radius: 50%;
    margin-left: 4px;
    margin-right: 4px;
    margin-top: 3px;
  }
`;

const ContentsContainer = styled.section`
  padding-top: 12px; // 12px + {contentsText}의 36px = 48px
  padding-bottom: 85px; // 하단 fixed 공유하기 탭 바 고려
`;

const BackgroundColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.gray7};
  z-index: -1;
`;
