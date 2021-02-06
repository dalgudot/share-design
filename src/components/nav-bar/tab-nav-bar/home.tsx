import { tArticle } from '../../page/article/text/t-article';
import CategoryCard from '../../page/index/category/category-card';
import styled from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';
import { useEffect, useState } from 'react';
import { VisitsAndViewsDuringSession } from '../../../lib/functions/visits-and-views';

const Home = () => {
  useEffect(() => {
    VisitsAndViewsDuringSession('Home');
  }, []);

  // List Modal
  const showArticleList1 = () => {
    setShowModal1(true);
  };
  const showArticleList2 = () => {
    setShowModal2(true);
  };
  const hideArticleList = () => {
    setShowModal1(false);
    setShowModal2(false);
  };
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const modal = (showModal1 || showModal2) && (
    <GlassMorphismBackground onClick={hideArticleList} />
  );

  return (
    <>
      <Ul>
        <CategoryCard
          title={tArticle.interactionDesignGuide.title}
          background="gradientPurple"
          showModalArticleList={showModal1}
          showArticleList={showArticleList1}
        />
        <CategoryCard
          title={tArticle.koodonDesignStory.title}
          background="gradientBurgundy"
          showModalArticleList={showModal2}
          showArticleList={showArticleList2}
        />
      </Ul>
      {modal}
    </>
  );
};

export default Home;

const Ul = styled.ul`
  margin: 128px 0 72px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 79px;
  }
`;

const GlassMorphismBackground = styled.div`
  position: fixed;
  top: -10vh;
  left: 0;
  width: 100vw;
  height: 120vh;
  z-index: 20000;

  /* Grassmorphism */
  opacity: 0.999;
  color: ${({ theme }) => theme.gray8};
  -webkit-backdrop-filter: blur(80px) saturate(120%) brightness(95%)
    hue-rotate(10deg);
  backdrop-filter: blur(80px) saturate(120%) brightness(95%) hue-rotate(10deg);

  -webkit-transition: color 0.11s ease-in-out,
    -webkit-backdrop-filter 0.11s ease-in-out;
  transition: color 0.11s ease-in-out, backdrop-filter 0.11s ease-in-out;
`;
