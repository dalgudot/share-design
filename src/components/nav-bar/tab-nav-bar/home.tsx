import { tArticle } from '../../page/article/text/t-article';
import CategoryCard from '../../page/index/category/category-card';
import styled from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';
import { useEffect, useState } from 'react';
import { VisitsAndViewsDuringSession } from '../../../lib/functions/visits-and-views';
import ModalArticleList from '../../page/index/modal/modal-article-list';

const Home = () => {
  useEffect(() => {
    VisitsAndViewsDuringSession('Home');
  }, []);

  // List Modal
  const [showModal, setShowModal] = useState([false, false]);

  const showArticleList1 = () => {
    setShowModal([true, false]);
  };
  const showArticleList2 = () => {
    setShowModal([false, true]);
  };
  const hideArticleList = () => {
    setShowModal([false, false]);
  };

  const modal = (showModal[0] || showModal[1]) && (
    <ModalArticleList onClick={hideArticleList} />
  );

  return (
    <>
      <Ul>
        <CategoryCard
          title={tArticle.interactionDesignGuide.title}
          background="gradientPurple"
          showModalArticleList={showModal[0]}
          showArticleList={showArticleList1}
        />
        <CategoryCard
          title={tArticle.koodonDesignStory.title}
          background="gradientBurgundy"
          showModalArticleList={showModal[1]}
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
