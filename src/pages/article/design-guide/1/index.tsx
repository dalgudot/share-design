import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../../../../lib/functions/visits-and-views';
import { useRouter } from 'next/router';
import { bodyScrollTop } from '../../../../lib/functions/body-scroll-top';
import Article from '../../../../components/page/article/article';
import { designGuide1 } from '../../../../data/article/design-guide/1';

const DesignGuide1 = ({ showToast }: { showToast: Function }) => {
  // const router = useRouter();
  // useEffect(() => {
  //   VisitsAndViewsDuringSession(router.pathname);
  // }, []);
  bodyScrollTop();

  const categoryTitle = designGuide1().category;
  const date = designGuide1().date;
  const articleTitle = designGuide1().title;
  const paragraphArray = designGuide1().contentsText;

  return (
    <>
      <Article //
        categoryTitle={categoryTitle}
        date={date}
        articleTitle={articleTitle}
        paragraphArray={paragraphArray}
        showToast={showToast}
      />
    </>
  );
};

export default DesignGuide1;
