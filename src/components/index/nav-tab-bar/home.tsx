import languageFunc from '../../../lib/func/language-func';
import { t } from '../lang/t';
import ArticleListSimple from '../article-list-simple';

const Home = () => {
  return (
    <ArticleListSimple
      href="/"
      order={languageFunc(t.article1.titleSimpleOrder)}
      title={languageFunc(t.article1.titleSimple)}
    />
  );
};

export default Home;
