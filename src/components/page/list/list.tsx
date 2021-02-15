import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import Items from './items';
import { useWindowHeight } from '../../../lib/hooks/useWindowHeight';
import HeadSEO from '../../../elements/head-info/head-seo';
import { indexInfo } from '../../../elements/head-info/index/index-info';
import Router from 'next/router';
import Profile from '../profile';
import { mediaBreakPoint } from '../../../styles/common';
import {
  fadeInOut,
  smoothUp,
  stagger,
} from '../../../elements/framer-motion/variants';
import H1Title700 from '../../../elements/typography/h1-title-700';
import H3Title700 from '../../../elements/typography/h3-title-700';
import { useWindowWidth } from '../../../lib/hooks/useWindowWidth';
import IconHome24 from '../../../elements/svg/icon_home_24';
import { tArticle } from '../../../data/article/t-article';

const List = ({
  title,
  backgroundGradient,
  articleList,
}: {
  title: object[];
  backgroundGradient: string;
  articleList: object[];
}) => {
  const themeContext = useContext(ThemeContext);
  const width: number = useWindowWidth();
  const height: number = useWindowHeight();

  return (
    <>
      <HeadSEO info={indexInfo} />
      <MotionMain
      // variants={stagger}
      // initial="initial"
      // animate="animate"
      // exit="exit"
      >
        <MotionBackground
          backgroundGradient={backgroundGradient}
          width={width}
          height={height}
          variants={fadeInOut}
        />
        <FillTopSpace />

        <motion.div variants={fadeInOut}>
          <CategoryTitle width={width}>
            {title.map((title, idx) => (
              <H1Title700 key={idx} text={title} color={themeContext.gray1} />
            ))}
          </CategoryTitle>
          <Profile marginTop="16px" />
        </motion.div>

        <MotionUl variants={fadeInOut}>
          <motion.div variants={stagger}>
            {articleList.map((articleList: any, idx: number) => (
              <Items
                key={idx}
                date={articleList.articleDate}
                title={articleList.articleTitle}
                summary={articleList.articleSummary}
                url={articleList.articleUrl}
              />
            ))}
            {articleList.length < 7 && ( // 리스트 7개가 될 때까지 coming soon 표시
              <ComingSoonDiv>
                <MotionComingSoonLine
                  variants={smoothUp}
                  backgroundGradient={backgroundGradient}
                  height={height}
                />
                <motion.div variants={smoothUp}>
                  <H3Title700 //
                    text={tArticle.comingSoon}
                    color={themeContext.gray1}
                    marginTop="16px"
                  />
                </motion.div>
              </ComingSoonDiv>
            )}
          </motion.div>
        </MotionUl>

        <MotionHomeButton //
          onClick={() => Router.push('/')}
          backgroundGradient={backgroundGradient}
          variants={smoothUp}
        >
          <IconHome24 />
        </MotionHomeButton>
        <FillBottomSpace />
      </MotionMain>
    </>
  );
};

export default List;

type MotionBackgroundType = {
  backgroundGradient: string;
  height: number;
  width: number;
};

const MotionMain = styled(motion.main)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth.maxWidth};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: 0 4.5vw;
  }
`;

const CategoryTitle = styled(motion.div)<{ width: number }>`
  display: ${({ width }) => (width > 480 ? 'flex' : 'block')};
`;

const MotionBackground = styled(motion.div)<MotionBackgroundType>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ width }) => width}px;
  min-height: ${({ height }) => height}px;
  background: linear-gradient(
    ${({ backgroundGradient }) => backgroundGradient}
  );
  z-index: -1;
`;

const MotionUl = styled(motion.ul)`
  border-radius: ${({ theme }) => theme.borderRadius.PrimaryBorderRadius};
  background-color: rgba(230, 230, 245, 0.08);
  border: 1px solid rgba(230, 230, 245, 0.2);

  // 바뀌는 속성
  margin-top: 48px; // Profile 영역과의 거리
  padding: 0px 36px 36px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 24px; // Profile 영역과의 거리
    padding: 0px 24px 24px;
  }
`;

const ComingSoonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 48px 0 12px;
  text-align: center;

  h3 {
    opacity: 0.93;
  }
`;

// 배열 길이에 따라 길이가 달라지는 선분
const MotionComingSoonLine = styled(motion.span)<{
  backgroundGradient: string;
  height: number;
}>`
  width: 1px;
  height: ${({ height }) => height * 0.45}px;
  background-color: rgba(230, 230, 245, 0.2);
  margin-bottom: 16px;
`;

const MotionHomeButton = styled(motion.button)<{ backgroundGradient: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    ${({ backgroundGradient }) => backgroundGradient}
  );
  max-width: 500px;
  margin: 0 auto;
  left: 0;
  right: 0; // margin: 0 auto, left: 0, right: 0 모두 해줘야 fixed 중앙정렬됨.

  position: fixed;
  height: 48px;

  /* 바뀌는 요소 */
  bottom: 24px;
  width: 100vw;
  border-radius: ${({ theme }) => theme.borderRadius.PrimaryBorderRadius};

  @media all and (max-width: 500px) {
    bottom: 0;
    width: 100vw;
    border-radius: 0;
  }
`;

const FillTopSpace = styled.div`
  height: 72px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    height: 24px;
  }
`;

const FillBottomSpace = styled.div`
  height: 96px; // 72px + margin bottom(24px)

  @media all and (max-width: ${mediaBreakPoint.first}) {
    height: 72px;
  }
`;
