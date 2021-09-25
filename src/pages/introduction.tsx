import Article from '../components/pages-components/article/article';
import { ProjectIntroduction } from '../data/introduction/t-introduction';
import { useArvAmplitude } from '../lib/hooks/Amplitude/useArvAmplitude';

const Introduction = () => {
  // useArvAmplitude('arv_introduction');
  return (
    <>
      <Article //
        articleTitle={ProjectIntroduction().title}
        contentsArray={ProjectIntroduction().contents}
      />
    </>
  );
};

export default Introduction;
