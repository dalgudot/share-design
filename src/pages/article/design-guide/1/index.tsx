import { bodyScrollTop } from '../../../../lib/functions/body-scroll-top';
import Article from '../../../../components/page/article/article';
import { designGuide1 } from '../../../../data/article/design-guide/1';

const DesignGuide1 = ({ showToast }: { showToast: Function }) => {
  bodyScrollTop();

  const categoryTitle = designGuide1().category;
  const date = designGuide1().date;
  const articleTitle = designGuide1().title;
  const contentsArray = designGuide1().contents;

  return (
    <>
      <Article //
        categoryTitle={categoryTitle}
        date={date}
        articleTitle={articleTitle}
        contentsArray={contentsArray}
        showToast={showToast}
      />
    </>
  );
};

export default DesignGuide1;
