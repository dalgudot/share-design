import { useSetLanguage } from '../../../lib/hooks/useSetLanguage';
import { t } from '../../index/lang/t';
import ArticleListSimple from '../../index/article-list-simple';

const Home = () => {
  return (
    <ArticleListSimple
      href="/articles/1"
      order={useSetLanguage(t.article1.titleSimpleOrder)}
      title={useSetLanguage(t.article1.titleSimple)}
    />
  );
};

export default Home;
