import List from '../../components/page/list/list';
import { categoryData } from '../../data/data';

const interactionDesignGuideList = () => {
  const data = categoryData();

  return (
    <>
      <List
        title={data[0].title}
        background={data[0].background}
        article1Url={data[0].article1Url}
      />
    </>
  );
};

export default interactionDesignGuideList;
