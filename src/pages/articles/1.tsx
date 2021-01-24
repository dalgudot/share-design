import { useEffect } from 'react';
import { DetectBrowserLang } from '../../lib/funtions/detect-browser-lang';
import { VisitsAndViewsDuringSession } from '../../lib/funtions/visits-and-views';
import Share from '../../components/articles/share-modal';
import Comment from '../../components/articles/comment';

const TwoLanguage = () => {
  DetectBrowserLang();
  useEffect(() => {
    VisitsAndViewsDuringSession('portfolio/001 SHARE DESIGN Project');
  }, []);

  return (
    <>
      {/* <Comment /> */}
      {/* <Share /> */}
    </>
  );
};

export default TwoLanguage;
