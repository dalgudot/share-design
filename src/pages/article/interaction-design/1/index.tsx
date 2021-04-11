import Article from '../../../../components/page/article/article';
import { interactionDesign1 } from '../../../../data/article/interaction-design/1';

const InteractionDesign1 = ({ showToast }: { showToast: Function }) => {
  const categoryTitle = interactionDesign1().category;
  const date = interactionDesign1().date;
  const dateTime = interactionDesign1().dateTime;
  const articleTitle = interactionDesign1().title;
  const contentsArray = interactionDesign1().contents;
  const referencesData: object[] = interactionDesign1().references;

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

export default InteractionDesign1;
