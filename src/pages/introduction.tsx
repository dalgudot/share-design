import { bodyScrollTop } from '../lib/functions/body-scroll-top';
import Article from '../components/page/article/article';
import { projectIntroduction } from '../data/article/introduction';

const Introduction = () => {
  bodyScrollTop();

  const articleTitle = projectIntroduction().title;
  const contentsArray = projectIntroduction().contents;
  return (
    <>
      <Article //
        articleTitle={articleTitle}
        contentsArray={contentsArray}
      />
    </>
  );
};

export default Introduction;
