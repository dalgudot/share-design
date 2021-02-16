import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { tArticle } from '../../../data/article/t-article';
import H3Title700 from '../../../elements/typography/h3-title-700';
import { useWindowHeight } from '../../../lib/hooks/useWindowHeight';
import { mediaBreakPoint } from '../../../styles/common';
import Items from './items';

const ListArea = ({
  backgroundGradient,
  articleList,
}: {
  backgroundGradient: string;
  articleList: object[];
}) => {
  const themeContext = useContext(ThemeContext);
  const height: number = useWindowHeight();

  return (
    <Ul>
      {articleList.map((articleList: any, idx: number) => (
        <Items
          key={idx}
          date={articleList.articleDate}
          title={articleList.articleTitle}
          summary={articleList.articleSummary}
          url={articleList.articleUrl}
        />
      ))}
      {articleList.length < 7 && ( // 리스트 7개가 될 때까지 coming soon 표시
        <ComingSoonDiv>
          <ComingSoonLine
            backgroundGradient={backgroundGradient}
            height={height}
          />

          <H3Title700 //
            text={tArticle.comingSoon}
            color="gray1"
            marginTop="16px"
          />
        </ComingSoonDiv>
      )}
    </Ul>
  );
};

export default ListArea;

const Ul = styled.ul`
  border-radius: ${({ theme }) => theme.borderRadius.R13};
  background-color: rgba(230, 230, 245, 0.08);
  border: 1px solid rgba(230, 230, 245, 0.2);

  // 바뀌는 속성
  margin-top: 48px; // Profile 영역과의 거리
  padding: 0px 36px 36px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 24px; // Profile 영역과의 거리
    padding: 0px 24px 24px;
  }
`;

const ComingSoonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 48px 0 12px;
  text-align: center;

  h3 {
    opacity: 0.93;
  }
`;

type ComingSoonLineType = {
  backgroundGradient: string;
  height: number;
};

// 배열 길이에 따라 길이가 달라지는 선분
const ComingSoonLine = styled.span<ComingSoonLineType>`
  width: 1px;
  height: ${({ height }) => height * 0.45}px;
  background-color: rgba(230, 230, 245, 0.2);
  margin-bottom: 16px;
`;
