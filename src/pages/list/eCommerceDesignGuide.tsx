import { useEffect } from 'react';
import List from '../../components/page/list/list';
import { categoryData } from '../../data/data';
import { bodyScrollTop } from '../../lib/functions/body-scroll-top';
import { VisitsAndViewsDuringSession } from '../../lib/functions/visits-and-views';

// exit animation으로 코드가 중복되더라도 페이지로 관리 필요
const eCommerceDesignGuideList = () => {
  useEffect(() => {
    VisitsAndViewsDuringSession('List/eCommerceDesignGuide');
  }, []);
  const data = categoryData();
  bodyScrollTop();

  return (
    <>
      <List
        title={data[1].title}
        backgroundGradient={data[1].backgroundGradient}
        articleList={data[1].articleList}
      />
    </>
  );
};

export default eCommerceDesignGuideList;
