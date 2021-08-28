import Article from '../components/pages/article/article';
import { aboutProject } from '../data/article/about';
import { useArvAmplitude } from '../library/hooks/Amplitude/useArvAmplitude';

const About = () => {
  useArvAmplitude('arv_about');
  const articleTitle = aboutProject().title;
  const contentsArray = aboutProject().contents;

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
