import { useSetLanguage } from '../../../lib/hooks/useSetLanguage';
import { t } from '../lang/t';
import ArticleListSimple from '../article-list-simple';

const Home = () => {
  return (
    <ArticleListSimple
      href="/"
      order={useSetLanguage(t.article1.titleSimpleOrder)}
      title={useSetLanguage(t.article1.titleSimple)}
    />
  );
};

export default Home;
