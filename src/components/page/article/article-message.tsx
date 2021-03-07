import styled from 'styled-components';
import { tArticleCommon } from '../../../data/article/t-article-common';
import PMedium400 from '../../../elements/typography/p-medium-400';

const ArticleMessage = () => {
  return (
    <>
      <DecoLineTop />
      <PMedium400
        text={tArticleCommon().message}
        color="gray3"
        marginTop="8px"
      />
      <DecoLineBottom />
    </>
  );
};

export default ArticleMessage;

const DecoLine = styled.div`
  width: 36px;
  height: 2px;
  background-color: ${({ theme }) => theme.gray3};
`;

const DecoLineTop = styled(DecoLine)`
  margin-top: 72px;
`;

const DecoLineBottom = styled(DecoLine)`
  margin: 72px 0 8px;
`;
