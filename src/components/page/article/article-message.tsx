import styled from 'styled-components';
import { tArticleCommon } from '../../../data/article/t-article-common';
import PMedium400 from '../../../foundation/typography/p-medium-400';
import { mediaBreakPoint } from '../../../styles/common';

const ArticleMessage = () => {
  return (
    <Container>
      <span />
      <PMedium400 text={tArticleCommon().message} color="gray3" />
    </Container>
  );
};

export default ArticleMessage;

const Container = styled.div`
  display: flex;
  align-items: center;

  // 바뀌는 속성
  margin-top: 72px;

  span {
    width: 4px;
    margin-left: 2px; // 시각 보정
    margin-right: 8px;
    margin-top: 1px;
    background-color: ${({ theme }) => theme.gray2};

    // 바뀌는 속성
    height: 24px;
  }

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 64px;

    span {
      height: 20px;
    }
  }
`;
