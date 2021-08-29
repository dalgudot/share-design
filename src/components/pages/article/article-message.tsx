import styled from 'styled-components';
import { tArticleCommon } from '../../../data/article/t-article-common';
import PLarge from '../../../foundation/typography/p-large';
import { mediaBreakPoint } from '../../../styles/common';

const ArticleMessage = () => {
  return (
    <Container>
      <span />
      <PLarge text={tArticleCommon().message} color="gray3" />
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
    background-color: ${({ theme }) => theme.gray3};

    // 바뀌는 속성
    height: 24px;
  }

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 56px;

    span {
      height: 20px;
    }
  }
`;
