import Article from '../../../../components/pages-components/article/article';
import { uiUxDesign1 } from '../../../../data/article/ui-ux-design/ui-ux-design-1';

const UIUXDesign1 = ({ showToast }: { showToast: Function }) => {
  return (
    <>
      <Article //
        categoryTitle={uiUxDesign1().category}
        date={uiUxDesign1().date}
        dateTime={uiUxDesign1().dateTime}
        articleTitle={uiUxDesign1().title}
        contentsArray={uiUxDesign1().contents}
        referencesData={uiUxDesign1().references}
        showToast={showToast}
      />
    </>
  );
};

export default UIUXDesign1;
