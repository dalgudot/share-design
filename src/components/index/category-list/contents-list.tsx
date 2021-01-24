import styled, { DefaultTheme } from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PBody300 from '../../typography/p-body-300';
import PBody700 from '../../typography/p-body-700';
import { t } from '../lang/t';

const PortfolioDesignStoryList = ({
  themeContext,
  title1,
  title2,
}: {
  themeContext: DefaultTheme;
  title1: object;
  title2: object;
}) => {
  return (
    <>
      <PBody300 text={t.number01} color={themeContext.gray1} />
      <PBody700 text={title1} color={themeContext.gray1} />
      <PBody700 text={title2} color={themeContext.gray1} />
    </>
  );
};

const ContentsList = ({ list }: { list: string }) => {
  const themeContext: DefaultTheme = useContext(ThemeContext);
  let title1;
  let title2;

  list === 'portfolioDesignStory'
    ? ((title1 = t.portfolioDesignStory.article1.listTitle.title1),
      (title2 = t.portfolioDesignStory.article1.listTitle.title2))
    : ((title1 = t.koodonDesignStory.article1.listTitle.title1),
      (title2 = t.koodonDesignStory.article1.listTitle.title2));

  return (
    <Li>
      <Line />

      <Container>
        <Left>
          <PortfolioDesignStoryList
            themeContext={themeContext}
            title1={title1}
            title2={title2}
          />
        </Left>

        <Right>
          <PBody700 text={t.chevronRight} color={themeContext.gray1} />
        </Right>
      </Container>

      <Line />
    </Li>
  );
};

export default ContentsList;

const Li = styled.li``;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.gray2};
`;

const Container = styled.section`
  padding: 16px 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.section``;

const Right = styled.section``;
