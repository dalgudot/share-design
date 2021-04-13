import styled from 'styled-components';
import { tArticleCommon } from '../../../data/article/t-article-common';
import H2Title700 from '../../../elements/typography/h2-title-700';
import PMedium400 from '../../../elements/typography/p-medium-400';
import PMedium700 from '../../../elements/typography/p-medium-700';
import { mediaBreakPoint } from '../../../styles/common';

const ArticleReference = ({ referencesData }: { referencesData: object[] }) => {
  return (
    <Container>
      <H2Title700 //
        text={tArticleCommon().ReferencesTitle}
        color="gray1"
      />

      {referencesData.map((reference: any, idx: number) => (
        <A key={idx} href={reference.url} target="_blank">
          <ReferenceContents>
            <PMedium700 text={reference.title} color="gray1" />
            <PMedium400
              text={reference.content}
              color="gray3"
              marginTop="8px"
            />
          </ReferenceContents>
          <PMedium700 text={tArticleCommon().chevronRight} color="gray1" />
        </A>
      ))}
    </Container>
  );
};

export default ArticleReference;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 120px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 72px;
  }
`;

const A = styled.a`
  padding: 36px 0;
  border-bottom: solid 1px ${({ theme }) => theme.gray6};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReferenceContents = styled.div`
  margin-right: 96px;

  p {
    line-height: 1.3;
  }

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-right: 48px;
  }
`;
