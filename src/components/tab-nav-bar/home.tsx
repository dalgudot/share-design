import CategoryCard from '../page/index/category-card';
import styled from 'styled-components';
import { mediaBreakPoint } from '../../styles/common';
import { motion } from 'framer-motion';
import { stagger } from '../../elements/framer-motion/variants';
import { categoryData } from '../../data/data';

const Home = () => {
  const data = categoryData();

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
