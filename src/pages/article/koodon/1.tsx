import { useEffect } from 'react';
import { DetectBrowserLang } from '../../../lib/functions/detect-browser-lang';
import { VisitsAndViewsDuringSession } from '../../../lib/functions/visits-and-views';
import Share from '../../../components/article/share-modal';
import Comment from '../../../components/article/comment';

const TwoLanguage = () => {
  DetectBrowserLang();
  useEffect(() => {
    VisitsAndViewsDuringSession('koodon/001');
  }, []);

  return (
    <>
      {/* <Comment /> */}
      {/* <Share /> */}
    </>
  );
};

export default TwoLanguage;
