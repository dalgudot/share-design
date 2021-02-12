import List from '../../components/page/list/list';
import { categoryData } from '../../data/data';

const eCommerceDesignGuideList = () => {
  const data = categoryData();

  return (
    <>
      <List
        title={data[1].title}
        background={data[1].background}
        article1Url={data[1].article1Url}
      />
    </>
  );
};

export default eCommerceDesignGuideList;
