import { useEffect } from 'react';
import List from '../../components/page/list/list';
import { categoryData } from '../../data/data';
import { bodyScrollTop } from '../../lib/functions/body-scroll-top';
import { VisitsAndViewsDuringSession } from '../../lib/functions/visits-and-views';

// exit animation으로 코드가 중복되더라도 페이지로 관리 필요
const interactionDesignGuideList = () => {
  useEffect(() => {
    VisitsAndViewsDuringSession('List/interactionDesignGuide');
  }, []);
  const data = categoryData();
  bodyScrollTop();

  return (
    <>
      <List
        title={data[0].categoryTitle}
        backgroundGradient={data[0].backgroundGradient}
        articleList={data[0].articleList}
      />
    </>
  );
};

export default interactionDesignGuideList;
