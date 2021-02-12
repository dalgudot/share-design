import { tArticle } from '../../page/article/text/t-article';
import CategoryCard from '../../page/index/category/category-card';
import styled, { ThemeContext } from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { staggerAnimation } from '../../../elements/framer-motion/variants/variants';

const Home = () => {
  const themeContext = useContext(ThemeContext);
  const categoryCardData = [
    {
      // 인터랙션 디자인 가이드
      url: 'interaction-design-guide',
      title: tArticle.interactionDesignGuide.title,
      background: themeContext.gradientPurple,
    },
    {
      // 쿠돈 디자인 가이드
      url: 'koodon',
      title: tArticle.koodonDesignStory.title,
      background: themeContext.gradientBurgundy,
    },
  ];

  return (
    <>
      <MotionUl
      // variants={staggerAnimation}
      // initial="initial"
      // animate="animate"
      // exit="exit"
      >
        <CategoryCard
          url={categoryCardData[0].url}
          title={categoryCardData[0].title}
          background={categoryCardData[0].background}
        />
        <CategoryCard
          url={categoryCardData[1].url}
          title={categoryCardData[1].title}
          background={categoryCardData[1].background}
        />
      </MotionUl>
    </>
  );
};

export default Home;

const MotionUl = styled(motion.ul)`
  margin: 108px 0 72px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 79px;
  }
`;
