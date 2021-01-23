import { useSetLanguage } from '../../../lib/hooks/useSetLanguage';
import { t } from '../../index/lang/t';
import CategoryCard from '../../index/category-card';
import styled from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';

const Home = () => {
  return (
    <Ul>
      <CategoryCard
        href="/"
        order={useSetLanguage(t.article1.titleSimpleOrder)}
        title={useSetLanguage(t.article1.titleSimple)}
      />
    </Ul>
  );
};

export default Home;

const Ul = styled.ul`
  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 79px;
  }
`;
