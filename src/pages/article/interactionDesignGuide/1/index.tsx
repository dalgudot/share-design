import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../../../../lib/functions/visits-and-views';
import { useRouter } from 'next/router';
import { bodyScrollTop } from '../../../../lib/functions/body-scroll-top';
import Article from '../../../../components/page/article/article';
import { projectIntroduction } from '../../../../data/article/introduction';

const InteractionDesignGuideOne = () => {
  const router = useRouter();
  useEffect(() => {
    VisitsAndViewsDuringSession(router.pathname);
  }, []);
  bodyScrollTop();

  const articleTitle = projectIntroduction().title;
  const paragraphArray = projectIntroduction().contentsText;

  return (
    <>
      <Article //
        articleTitle={articleTitle}
        paragraphArray={paragraphArray}
      />
    </>
  );
};

export default InteractionDesignGuideOne;
