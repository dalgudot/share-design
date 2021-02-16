import styled from 'styled-components';
import { useWindowHeight } from '../../../lib/hooks/useWindowHeight';
import HeadSEO from '../../../elements/head-info/head-seo';
import { indexInfo } from '../../../elements/head-info/index/index-info';
import { mediaBreakPoint } from '../../../styles/common';
import { useWindowWidth } from '../../../lib/hooks/useWindowWidth';
import ArticleTitleArea from '../article/article-title';
import ListToolBar from './list-tool-bar';
import ListArea from './list-area';

const List = ({
  title,
  backgroundGradient,
  articleList,
}: {
  title: object;
  backgroundGradient: string;
  articleList: object[];
}) => {
  const width: number = useWindowWidth();
  const height: number = useWindowHeight();

  return (
    <>
      <HeadSEO info={indexInfo} />
      <Main>
        <Background
          backgroundGradient={backgroundGradient}
          width={width}
          height={height}
        />
        <FillTopSpace />
        {/* list의 category title과 article title이 같으므로 재사용 */}
        <ArticleTitleArea articleTitle={title} />
        <ListArea
          backgroundGradient={backgroundGradient}
          articleList={articleList}
        />
        <ListToolBar backgroundGradient={backgroundGradient} />
        <FillBottomSpace />
      </Main>
    </>
  );
};

export default List;

// list에서는 상하단 space div로 상하단 마진 관리(background-color 채우기 위함)
const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth.Paragraph};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: ${({ theme }) => theme.padding.MobileWrap};
  }
`;

type BackgroundType = {
  backgroundGradient: string;
  height: number;
  width: number;
};

const Background = styled.div<BackgroundType>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ width }) => width}px;
  min-height: ${({ height }) => height}px;
  background: linear-gradient(
    ${({ backgroundGradient }) => backgroundGradient}
  );
  z-index: ${({ theme }) => theme.zIndex.Background};
`;

const FillTopSpace = styled.div`
  height: 64px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    height: 24px;
  }
`;

const FillBottomSpace = styled.div`
  height: 96px; // 72px + margin bottom(24px)

  @media all and (max-width: ${mediaBreakPoint.first}) {
    height: ${({ theme }) => theme.margin.MobileBottom};
  }
`;
