import HeadSEO from '../elements/head-info/head-seo';
import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../lib/functions/visits-and-views';
import { indexInfo } from '../elements/head-info/index/index-info';
import { t } from '../data/index/t';
import { bodyScrollTop } from '../lib/functions/body-scroll-top';
import Article from '../components/page/article/article';

const Introduction = () => {
  useEffect(() => {
    VisitsAndViewsDuringSession('Introduction');
  }, []);
  bodyScrollTop();

  // 여기만 categoryTitle을 date로 대체
  const categoryTitle = t.shareDesignProjectIntroduction.date;
  const articleTitle = t.shareDesignProjectIntroduction.title;
  const paragraphArray = t.shareDesignProjectIntroduction.contentsText;
  return (
    <>
      <HeadSEO info={indexInfo} />
      <Article
        categoryTitle={categoryTitle}
        articleTitle={articleTitle}
        paragraphArray={paragraphArray}
      />
    </>
  );
};

export default Introduction;
