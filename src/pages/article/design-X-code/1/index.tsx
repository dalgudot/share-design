import styled from 'styled-components';
import Article from '../../../../components/pages/article/article';
import { designXCode1 } from '../../../../data/article/design-X-code/1';
import { useArvAmplitude } from '../../../../library/hooks/Amplitude/useArvAmplitude';

const DesignXCode1 = ({ showToast }: { showToast: Function }) => {
  useArvAmplitude('arv_design_X_code_1');

  const categoryTitle = designXCode1().category;
  const date = designXCode1().date;
  const dateTime = designXCode1().dateTime;
  const articleTitle = designXCode1().title;
  const contentsArray = designXCode1().contents;
  const referencesData: object[] = designXCode1().references;

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

export default DesignXCode1;
