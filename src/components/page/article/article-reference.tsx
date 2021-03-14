import styled from 'styled-components';
import { tArticleCommon } from '../../../data/article/t-article-common';
import { uiUxDesign } from '../../../data/article/ui-ux-design/1';
import H2Title700 from '../../../elements/typography/h2-title-700';
import PMedium400 from '../../../elements/typography/p-medium-400';
import PMedium700 from '../../../elements/typography/p-medium-700';
import { mediaBreakPoint } from '../../../styles/common';

const ArticleReference = ({ referencesData }: { referencesData: object[] }) => {
  uiUxDesign;
  return (
    <Container>
      <H2Title700 //
        text={tArticleCommon().ReferencesTitle}
        color="gray1"
      />

      {referencesData.map((reference: any, idx: number) => (
        <A key={idx} href={reference.url} target="_blank">
          <Title>
            <PMedium700 text={reference.title} color="gray1" />
            <PMedium700 text={tArticleCommon().chevronRight} color="gray1" />
          </Title>
          <ReferenceContents>
            <PMedium400
              text={reference.content}
              color="gray3"
              marginTop="8px"
            />
          </ReferenceContents>
        </A>
      ))}
    </Container>
  );
};

export default ArticleReference;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  // 바뀌는 속성
  margin-top: 120px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
  }
`;

const A = styled.a`
  padding: 36px 0;
  border-bottom: solid 1px ${({ theme }) => theme.gray6};
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 4px; // 시각 보정
`;

const ReferenceContents = styled.div`
  margin-right: 96px;

  p {
    line-height: 1.3;
  }
`;
