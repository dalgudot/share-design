import List from '../../components/page/list/list';
import { categoryData } from '../../data/data';
import { bodyScrollTop } from '../../lib/functions/body-scroll-top';

// exit animation으로 코드가 중복되더라도 페이지로 관리 필요
const interactionDesignGuideList = () => {
  const data = categoryData();
  bodyScrollTop();

  return (
    <>
      <List
        title={data[0].title}
        background={data[0].background}
        articleList={data[0].articleList}
      />
    </>
  );
};

export default interactionDesignGuideList;
