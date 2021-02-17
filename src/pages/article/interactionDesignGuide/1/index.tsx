import HeadSEO from '../../../../elements/head-info/head-seo';
import { interactionDesignGuideOneInfo } from '../../../../elements/head-info/article/interactionDesignGuide/1-info';
import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../../../../lib/functions/visits-and-views';
import { tArticle } from '../../../../data/article/t-article';
import { useRouter } from 'next/router';
import { bodyScrollTop } from '../../../../lib/functions/body-scroll-top';
import Article from '../../../../components/page/article/article';

const InteractionDesignGuideOne = () => {
  const router = useRouter();
  useEffect(() => {
    VisitsAndViewsDuringSession(router.pathname);
  }, []);
  bodyScrollTop();

  // const categoryTitle = tArticle.interactionDesignGuide.smallTitle;
  // const articleTitle =
  //   tArticle.interactionDesignGuide.articleList[0].articleTitle;
  // const paragraphArray = tArticle.interactionDesignGuide.title;
  return (
    <>
      <HeadSEO info={interactionDesignGuideOneInfo} />
      {/* <Article
        categoryTitle={categoryTitle}
        articleTitle={articleTitle}
        paragraphArray={paragraphArray}
      /> */}
    </>
  );
};

export default InteractionDesignGuideOne;
