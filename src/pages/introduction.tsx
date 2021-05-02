import Article from '../components/page/article/article';
import { projectIntroduction } from '../data/article/introduction';
import { useArvAmplitude } from '../library/hooks/Amplitude/useArvAmplitude';

const Introduction = () => {
  useArvAmplitude('arv_introduction');
  const articleTitle = projectIntroduction().title;
  const contentsArray = projectIntroduction().contents;

  return (
    <>
      <Article //
        articleTitle={articleTitle}
        contentsArray={contentsArray}
      />
    </>
  );
};

export default Introduction;
