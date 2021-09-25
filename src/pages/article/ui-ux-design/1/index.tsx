import Article from '../../../../components/pages-components/article/article';
import { uiUxDesign1 } from '../../../../data/article/ui-ux-design/ui-ux-design-1';
import { useArvAmplitude } from '../../../../lib/hooks/Amplitude/useArvAmplitude';

const UIUXDesign1 = () => {
  // useArvAmplitude('arv_ui_ux_design_1');
  return (
    <>
      <Article //
        categoryTitle={uiUxDesign1().category}
        date={uiUxDesign1().date}
        dateTime={uiUxDesign1().dateTime}
        articleTitle={uiUxDesign1().title}
        contentsArray={uiUxDesign1().contents}
        referencesData={uiUxDesign1().references}
      />
    </>
  );
};

export default UIUXDesign1;
