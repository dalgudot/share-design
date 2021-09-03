import styled from 'styled-components';
import Profile from './profile';
import { mediaBreakPoint } from '../../../styles/common';
import PMedium from '../../../foundation/typography/p-medium';
import H1Title from '../../../foundation/typography/h1-title';

const ArticleTitleArea = ({
  categoryTitle,
  date,
  dateTime,
  articleTitle,
}: {
  categoryTitle?: { k: string; e: string };
  date?: string;
  dateTime?: string;
  articleTitle: { k: string; e: string };
}) => {
  return (
    <TitleArea>
      {categoryTitle && date && (
        <CategoryDateArea>
          <PMedium text={categoryTitle} color="gray4" />
          <Divider />
          <time dateTime={dateTime}>
            <PMedium text={date} color="gray4" />
          </time>
        </CategoryDateArea>
      )}
      <H1Title //
        text={articleTitle}
        color="gray1"
        marginTop="4px"
      />
      <Profile marginTop="16px" />
    </TitleArea>
  );
};

export default ArticleTitleArea;

const TitleArea = styled.div`
  p {
    margin-left: 2px; // categoryTitle 시각 보정
  }
`;

const CategoryDateArea = styled.div`
  display: flex;
  align-items: center;

  // 바뀌는 속성
  margin-top: 24px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 16px;
  }
`;

const Divider = styled.span`
  width: 1px;
  background-color: ${({ theme }) => theme.gray4};
  height: 12px;
  margin: 0 6px 0 8px; // 시각 보정

  @media all and (max-width: ${mediaBreakPoint.first}) {
    height: 10px;
    margin: 1px 3px 0 5px; // 모바일 시각 보정
  }
`;
