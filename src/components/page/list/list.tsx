import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import Items from '../../page/index/modal/items';
import { useWindowHeight } from '../../../lib/hooks/useWindowHeight';
import HeadSEO from '../../../elements/head/head';
import { indexInfo } from '../../../elements/head/index-info';
import Router, { useRouter } from 'next/router';
import Profile from '../../../elements/profile';
import { tArticle } from '../article/text/t-article';
import PMedium400 from '../../../elements/typography/p-medium-400';
import { mediaBreakPoint } from '../../../styles/common';
import { stagger } from '../../../elements/framer-motion/variants/variants';
import H1Title700 from '../../../elements/typography/h1-title-700';

const List = ({
  title,
  background,
  article1Url,
}: {
  title: object[];
  background: string;
  article1Url: string;
}) => {
  const themeContext = useContext(ThemeContext);
  const backgroundGradient = background;
  const height: number = useWindowHeight();
  const itemIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const categoryTitle = title.map((title: any, idx: number) => (
    <H1Title700 key={idx} text={title} color={themeContext.gray1} />
  ));

  return (
    <>
      <HeadSEO info={indexInfo} />
      <MotionBackground
        variants={stagger}
        initial="initial"
        animate="animate"
        exit="exit"
        backgroundGradient={backgroundGradient}
        height={height}
      >
        <FillTopSpace />
        {categoryTitle}
        <Profile />
        <ListArea>
          {itemIds.map((i) => (
            <Items key={i} />
          ))}
        </ListArea>
        <MotionCloseButton //
          onClick={() => Router.push('/')}
          backgroundGradient={backgroundGradient}
          variants={stagger}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <PMedium400 //
            text={tArticle.close}
            color={themeContext.gray2}
          />
        </MotionCloseButton>
        <FillBottomSpace />
      </MotionBackground>
    </>
  );
};

export default List;

type MotionBackgroundType = {
  backgroundGradient: string;
  height: number;
};

const MotionBackground = styled(motion.main)<MotionBackgroundType>`
  min-width: 100vw;
  min-height: ${({ height }) => height}px;
  background: linear-gradient(
    ${({ backgroundGradient }) => backgroundGradient}
  );
  /* padding-top: 24px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* position: absolute;
  left: 50%;
  transform: translateX(-50%); */
  /* max-width: ${({ theme }) => theme.maxWidth.maxWidth}; */

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
  padding: 8px 16px 28px;
  background-color: rgba(230, 230, 245, 0.08);
  border: 1px solid rgba(230, 230, 245, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.PrimaryBorderRadius};
  margin-top: 24px;
  /* max-width: ${({ theme }) => theme.maxWidth.maxWidth}; */
`;

const MotionCloseButton = styled(motion.button)<{ backgroundGradient: string }>`
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
  height: 24px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    height: 36px;
  }
`;

const FillBottomSpace = styled.div`
  height: 96px;
`;
