import Article from '../../../../components/page/article/article';
import { uiUxDesign } from '../../../../data/article/ui-ux-design/1';

const UIUXDesign1 = ({ showToast }: { showToast: Function }) => {
  const categoryTitle = uiUxDesign().category;
  const date = uiUxDesign().date;
  const articleTitle = uiUxDesign().title;
  const contentsArray = uiUxDesign().contents;

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

export default UIUXDesign1;
