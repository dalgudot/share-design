import Article from '../components/pages/article/article';
import { ProjectIntroduction } from '../data/article/introduction';
import { useArvAmplitude } from '../library/hooks/Amplitude/useArvAmplitude';

const About = () => {
  useArvAmplitude('arv_introduction');
  const articleTitle = ProjectIntroduction().title;
  const contentsArray = ProjectIntroduction().contents;

  return (
    <>
      <Article //
        articleTitle={articleTitle}
        contentsArray={contentsArray}
      />
    </>
  );
};

export default About;
