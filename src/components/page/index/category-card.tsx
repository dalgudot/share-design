import styled from 'styled-components';
import H1Title700 from '../../../elements/typography/h1-title-700';
import PMedium400 from '../../../elements/typography/p-medium-400';
import { tArticleCommon } from '../../../data/article/t-article-common';
import { mediaBreakPoint } from '../../../styles/common';
import Link from 'next/link';
import React from 'react';

const CategoryCard = ({
  url,
  categoryTitleArray,
  backgroundGradient,
}: {
  url: string;
  categoryTitleArray: object[];
  backgroundGradient: string;
}) => {
  const homeCategoryTitle = categoryTitleArray.map((title, idx) => (
    <H1Title700 key={idx} text={title} color="gray1" />
  ));

  return (
    <Li backgroundGradient={backgroundGradient}>
      <Link href={`/list/${url}`}>
        <a>
          <TitleDiv>{homeCategoryTitle}</TitleDiv>
          <ListViewDiv>
            <PMedium400 //
              text={tArticleCommon().goToList}
              color="gray1"
            />
            <PMedium400 //
              text={tArticleCommon().chevronRight}
              color="gray1"
            />
          </ListViewDiv>
        </a>
      </Link>
    </Li>
  );
};

export default React.memo(CategoryCard);

const Li = styled.li<{ backgroundGradient: string }>`
  border-radius: ${({ theme }) => theme.borderRadius.R13};
  background: linear-gradient(
    ${({ backgroundGradient }) => backgroundGradient}
  );
  max-width: 480px;
  margin: 24px auto 0;

  a {
    cursor: pointer;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    // 바뀌는 속성
    padding: 32px 24px;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      padding: 24px;
    }
  }
`;

const TitleDiv = styled.div``;

const ListViewDiv = styled.div`
  padding: 16px 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: solid 1px ${({ theme }) => theme.gray1};
  border-bottom: solid 1px ${({ theme }) => theme.gray1};

  // 바뀌는 부분
  margin-top: 158px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 108px;
  }
`;
