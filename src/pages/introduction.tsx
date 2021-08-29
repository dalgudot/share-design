import Article from '../components/pages/article/article';
import { ProjectIntroduction } from '../data/article/introduction';
import { useArvAmplitude } from '../library/hooks/Amplitude/useArvAmplitude';

const Introduction = () => {
  useArvAmplitude('arv_introduction');
  const articleTitle = ProjectIntroduction().title;
  const contentsArray: {
    k: string;
    e: string;
  }[] = ProjectIntroduction().contents;

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
