import Article from '../../../../components/page/article/article';
import { uiUxDesign1 } from '../../../../data/article/ui-ux-design/1';

const UIUXDesign1 = ({ showToast }: { showToast: Function }) => {
  const categoryTitle = uiUxDesign1().category;
  const date = uiUxDesign1().date;
  const dateTime = uiUxDesign1().dateTime;
  const articleTitle = uiUxDesign1().title;
  const contentsArray = uiUxDesign1().contents;
  const referencesData: object[] = uiUxDesign1().references;

  return (
    <>
      <Article //
        categoryTitle={categoryTitle}
        date={date}
        dateTime={dateTime}
        articleTitle={articleTitle}
        contentsArray={contentsArray}
        showToast={showToast}
        referencesData={referencesData}
      />
    </>
  );
};

export default UIUXDesign1;
