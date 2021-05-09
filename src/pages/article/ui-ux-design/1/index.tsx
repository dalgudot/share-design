import Article from '../../../../components/pages/article/article';
import { uiUxDesign1 } from '../../../../data/article/ui-ux-design/1';
import { useArvAmplitude } from '../../../../library/hooks/Amplitude/useArvAmplitude';

const UIUXDesign1 = ({ showToast }: { showToast: Function }) => {
  useArvAmplitude('arv_ui_ux_design_1');

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
