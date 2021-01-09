import { useEffect } from 'react';
import { DetectBrowserLang } from '../../lib/funtions/detect-browser-lang';
import { VisitsAndViewsDuringSession } from '../../lib/funtions/visits-and-views';
import Header from '../../components/index/header';
import Share from '../../components/articles/share';
import Comment from '../../components/articles/comment';

// 사용자에 따라 다른 언어를 제공하는 UX 디자인은?
const TwoLanguage = () => {
  DetectBrowserLang();
  useEffect(() => {
    VisitsAndViewsDuringSession('001 Design in two languages');
  }, []);

  return (
    <>
      <Header />
      <Comment />
      {/* <Share /> */}
    </>
  );
};

export default TwoLanguage;
