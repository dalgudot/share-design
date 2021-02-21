import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../lib/functions/visits-and-views';
import { bodyScrollTop } from '../lib/functions/body-scroll-top';
import Article from '../components/page/article/article';
import { projectIntroduction } from '../data/article/introduction';

const Introduction = ({ showToast }: { showToast: Function }) => {
  useEffect(() => {
    VisitsAndViewsDuringSession('Introduction');
  }, []);
  bodyScrollTop();

  const articleTitle = projectIntroduction().title;
  const paragraphArray = projectIntroduction().contentsText;
  return (
    <>
      <Article //
        articleTitle={articleTitle}
        paragraphArray={paragraphArray}
        showToast={showToast}
      />
    </>
  );
};

export default Introduction;
