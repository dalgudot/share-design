import styled, { DefaultTheme } from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PMedium300 from '../../typography/p-medium-300';
import PMedium700 from '../../typography/p-medium-700';
import { articleT } from '../../article/lang/article-t';
import { t } from '../lang/t';
import { mediaBreakPoint } from '../../../styles/common';

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
      {/* <PMedium300 text={t.number01} color={themeContext.gray1} /> */}
      <PMedium700 text={title1} color={themeContext.gray1} />
      <PMedium700 text={title2} color={themeContext.gray1} />
    </>
  );
};

const ContentsList = ({ list }: { list: string }) => {
  const themeContext: DefaultTheme = useContext(ThemeContext);
  let title1;
  let title2;

  list === 'portfolioDesignStory'
    ? ((title1 = articleT.portfolioDesignStory.article1.title[0]),
      (title2 = articleT.portfolioDesignStory.article1.title[1]))
    : ((title1 = articleT.koodonDesignStory.article1.title[0]),
      (title2 = articleT.koodonDesignStory.article1.title[1]));

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
          <PMedium700 text={t.chevronRight} color={themeContext.gray1} />
        </Right>
      </Container>

      <Line />
    </Li>
  );
};

export default ContentsList;

const Li = styled.li`
  margin-top: 144px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 96px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.gray2};
`;

const Container = styled.section`
  padding: 16px 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.section``;

const Right = styled.section``;
