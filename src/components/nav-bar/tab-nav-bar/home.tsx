import { tArticle } from '../../page/article/text/t-article';
import CategoryCard from '../../page/index/category/category-card';
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
        href="/article/portfolio/1"
        title1={tArticle.portfolioDesignStory.title1}
        title2={tArticle.portfolioDesignStory.title2}
        background="gradientPurple"
        list="portfolioDesignStory"
      />
      <CategoryCard
        href="/"
        title1={tArticle.koodonDesignStory.title1}
        title2={tArticle.koodonDesignStory.title2}
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
