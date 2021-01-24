import { t } from '../../index/lang/t';
import CategoryCard from '../../index/category-list/category-card';
import styled from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';
import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../../../lib/functions/visits-and-views';

const Home = () => {
  useEffect(() => {
    VisitsAndViewsDuringSession('Home');
  }, []);

  return (
    <Ul>
      <CategoryCard
        href="/"
        title1={t.portfolioDesignStory.title1}
        title2={t.portfolioDesignStory.title2}
        background="gradientPurple"
        list="portfolioDesignStory"
      />
      <CategoryCard
        href="/"
        title1={t.koodonDesignStory.title1}
        title2={t.koodonDesignStory.title2}
        background="gradientBurgundy"
        list="koodonDesignStory"
      />
    </Ul>
  );
};

export default Home;

const Ul = styled.ul`
  margin: 128px 0 72px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 79px;
  }
`;
