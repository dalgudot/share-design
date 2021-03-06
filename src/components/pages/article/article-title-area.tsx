import styled from 'styled-components';
import Profile from './profile';
import H1Title700 from '../../../foundation/typography/h1-title-700';
import { mediaBreakPoint } from '../../../styles/common';
import PSmall400 from '../../../foundation/typography/p-small-400';

const ArticleTitleArea = ({
  categoryTitle,
  date,
  dateTime,
  articleTitle,
}: {
  categoryTitle?: object;
  date?: object;
  dateTime?: string;
  articleTitle: object;
}) => {
  return (
    <TitleArea>
      {categoryTitle && date && (
        <CategoryDateArea>
          <PSmall400 text={categoryTitle} color="gray4" />
          <span />
          <time dateTime={dateTime}>
            <PSmall400 text={date} color="gray4" />
          </time>
        </CategoryDateArea>
      )}
      <H1Title700 //
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

  span {
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.gray4};
    opacity: 0.9;

    // 바뀌는 속성
    margin: 1px 5px 0;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      margin: 1px 4px 0;
    }
  }
`;
