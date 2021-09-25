import Article from '../../../../components/pages-components/article/article';
import { uiUxDesign2 } from '../../../../data/article/ui-ux-design/ui-ux-design-2';

const UIUXDesign2 = () => {
  return (
    <>
      <Article //
        categoryTitle={uiUxDesign2().category}
        date={uiUxDesign2().date}
        dateTime={uiUxDesign2().dateTime}
        articleTitle={uiUxDesign2().title}
        contentsArray={uiUxDesign2().contents}
        referencesData={uiUxDesign2().references}
      />
    </>
  );
};

export default UIUXDesign2;
