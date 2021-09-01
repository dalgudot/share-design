import Article from '../components/pages/article/article';
import { ProjectIntroduction } from '../data/article/t-introduction';
import { useArvAmplitude } from '../lib/hooks/Amplitude/useArvAmplitude';

const Introduction = () => {
  // useArvAmplitude('arv_introduction');
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
