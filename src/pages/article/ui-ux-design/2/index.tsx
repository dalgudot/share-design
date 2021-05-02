import Article from '../../../../components/page/article/article';
import { uiUxDesign2 } from '../../../../data/article/ui-ux-design/2';
import { useArvAmplitude } from '../../../../library/hooks/Amplitude/useArvAmplitude';

const UIUXDesign2 = ({ showToast }: { showToast: Function }) => {
  useArvAmplitude('arv_ui_ux_design_2');
  const categoryTitle = uiUxDesign2().category;
  const date = uiUxDesign2().date;
  const dateTime = uiUxDesign2().dateTime;
  const articleTitle = uiUxDesign2().title;
  const contentsArray = uiUxDesign2().contents;
  const referencesData: object[] = uiUxDesign2().references;

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

export default UIUXDesign2;
