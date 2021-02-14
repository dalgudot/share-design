import CategoryCard from '../page/index/category-card';
import styled, { ThemeContext } from 'styled-components';
import { mediaBreakPoint } from '../../styles/common';
import { motion } from 'framer-motion';
import { smoothUp, stagger } from '../../elements/framer-motion/variants';
import { categoryData } from '../../data/data';
import Link from 'next/link';
import PMedium400 from '../../elements/typography/p-medium-400';
import { t } from '../../data/index/t';
import { useContext } from 'react';

const Home = () => {
  const themeContext = useContext(ThemeContext);
  const data = categoryData();
  const goToIntroductionText =
    t.shareDesignProjectIntroduction.goToIntroduction;

  return (
    <>
      <MotionUl
        variants={stagger}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <CategoryCard
          url={data[0].url}
          title={data[0].title}
          backgroundGradient={data[0].backgroundGradient}
        />
        <CategoryCard
          url={data[1].url}
          title={data[1].title}
          backgroundGradient={data[1].backgroundGradient}
        />
        <MotionLi variants={smoothUp}>
          <Link href="/introduction">
            <a>
              <PMedium400
                text={goToIntroductionText}
                color={themeContext.gray2}
              />
            </a>
          </Link>
        </MotionLi>
      </MotionUl>
    </>
  );
};

export default Home;

const MotionUl = styled(motion.ul)`
  margin-top: 108px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 79px;
  }
`;

const MotionLi = styled(motion.li)`
  margin-top: 48px;
  display: flex;
  justify-content: center;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 48px;
  }
`;
