import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../../../../lib/functions/visits-and-views';
import { useRouter } from 'next/router';
import { bodyScrollTop } from '../../../../lib/functions/body-scroll-top';
import Article from '../../../../components/page/article/article';

const InteractionDesignGuideOne = ({ showToast }: { showToast: Function }) => {
  const router = useRouter();
  useEffect(() => {
    VisitsAndViewsDuringSession(router.pathname);
  }, []);
  bodyScrollTop();

  // const categoryTitle = tArticleCommon().interactionDesignGuide.categoryTitle;
  // const articleTitle =
  //   tArticleCommon().interactionDesignGuide.articleList[0].articleTitle;
  // const paragraphArray = tArticleCommon().interactionDesignGuide.title;
  return (
    <>
      {/* <Article
        categoryTitle={categoryTitle}
        articleTitle={articleTitle}
        paragraphArray={paragraphArray}
        showToast={showToast}
      /> */}
    </>
  );
};

export default InteractionDesignGuideOne;
