import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import Items from '../index/items';
import { useWindowHeight } from '../../../lib/hooks/useWindowHeight';
import HeadSEO from '../../../elements/head-info/head-seo';
import { indexInfo } from '../../../elements/head-info/index/index-info';
import Router from 'next/router';
import Profile from '../../../elements/profile';
import { mediaBreakPoint } from '../../../styles/common';
import { stagger } from '../../../elements/framer-motion/variants';
import H1Title700 from '../../../elements/typography/h1-title-700';
import { useWindowWidth } from '../../../lib/hooks/useWindowWidth';
import IconHome24 from '../../../elements/svg/icon_home_24';

const List = ({
  title,
  background,
  articleList,
}: {
  title: object[];
  background: string;
  articleList: any;
}) => {
  const themeContext = useContext(ThemeContext);
  const backgroundGradient = background;
  const width: number = useWindowWidth();
  const height: number = useWindowHeight();

  const categoryTitle = title.map((title, idx) => (
    <H1Title700 key={idx} text={title} color={themeContext.gray1} />
  ));
  const categoryArticleItems = articleList.map(
    (articleList: any, idx: number) => (
      <Items
        key={idx}
        date={articleList.articleDate}
        title={articleList.articleTitle}
        summary={articleList.articleSummary}
        url={articleList.articleUrl}
      />
    )
  );

  return (
    <>
      <HeadSEO info={indexInfo} />
      <MotionMain
        variants={stagger}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <FillTopSpace />
        {/* <div style={{ display: 'flex' }}> */}
        {categoryTitle}
        {/* </div> */}
        <Profile />
        <ListArea>{categoryArticleItems}</ListArea>
        <MotionGoToHomeButton //
          onClick={() => Router.push('/')}
          backgroundGradient={backgroundGradient}
          // variants={stagger}
          // initial="initial"
          // animate="animate"
          // exit="exit"
        >
          <IconHome24 />
        </MotionGoToHomeButton>
        <FillBottomSpace />
        <MotionBackground
          backgroundGradient={backgroundGradient}
          width={width}
          height={height}
        />
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

const ListArea = styled(motion.div)`
  padding: 8px 16px 28px;
  background-color: rgba(230, 230, 245, 0.08);
  border: 1px solid rgba(230, 230, 245, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.PrimaryBorderRadius};
  margin-top: 24px;
`;

const MotionGoToHomeButton = styled(motion.button)<{
  backgroundGradient: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  position: fixed;
  width: 148px;
  height: 49px;
  border-radius: ${({ theme }) => theme.borderRadius.PrimaryBorderRadius};
  background: linear-gradient(
    ${({ backgroundGradient }) => backgroundGradient}
  );
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);

  /* Grassmorphism */
  opacity: 0.999;
  /* color: ${({ theme }) => theme.gray8}; */
  -webkit-backdrop-filter: blur(80px) saturate(120%) brightness(95%)
    hue-rotate(8deg);
  backdrop-filter: blur(80px) saturate(120%) brightness(95%) hue-rotate(8deg);

  -webkit-transition: color 0.11s ease-in-out,
    -webkit-backdrop-filter 0.11s ease-in-out;
  transition: color 0.11s ease-in-out, backdrop-filter 0.11s ease-in-out;
`;

const FillTopSpace = styled.div`
  height: 36px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    height: 24px;
  }
`;

const FillBottomSpace = styled.div`
  height: 96px;
`;
