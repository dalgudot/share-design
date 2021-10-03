import Article from '../../components/pages-components/article/article';
import { ProjectIntroduction } from '../../data/introduction/t-introduction';

const Introduction = () => {
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
