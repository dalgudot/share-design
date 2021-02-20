import styled from 'styled-components';
import Comment from './comment';
import { mediaBreakPoint } from '../../../styles/common';
import PMedium400 from '../../../elements/typography/p-medium-400';
import { useWindowWidth } from '../../../lib/hooks/useWindowWidth';
import { useWindowHeight } from '../../../lib/hooks/useWindowHeight';
import ArticleTitleArea from './article-title';
import ArticleToolBar from './article-tool-bar/article-tool-bar';
import { useEffect, useState } from 'react';
import WriteComment from './write-comment';
import { useRouter } from 'next/router';

const Article = ({
  categoryTitle,
  articleTitle,
  paragraphArray,
}: {
  categoryTitle?: object;
  articleTitle: object;
  paragraphArray: object[];
}) => {
  const width: number = useWindowWidth();
  const height: number = useWindowHeight();
  const [writeCommentMode, setWriteCommentMode] = useState(false);

  // 페이지 이동 시 댓글 쓰기 모드 초기화
  const router = useRouter();
  useEffect(() => setWriteCommentMode(false), [router.pathname]);

  return (
    <>
      <Main>
        {writeCommentMode === false ? (
          <ArticleContainer>
            <Background width={width} height={height} />
            <ArticleTitleArea
              categoryTitle={categoryTitle}
              articleTitle={articleTitle}
            />

            <ContentsDiv>
              {paragraphArray.map((text, index) => (
                <PMedium400
                  key={index}
                  text={text}
                  color="gray3"
                  marginTop="24px"
                />
              ))}
            </ContentsDiv>

            {/* <Comment /> */}
            {/* 버튼 영역 */}
            {/* <button //
              onClick={() => setWriteCommentMode(true)}
            >
              쓰기 모드
            </button> */}

            <ArticleToolBar />
          </ArticleContainer>
        ) : (
          <>{/* <WriteComment /> */}</>
        )}
      </Main>
    </>
  );
};

export default Article;

const Main = styled.main`
  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: ${({ theme }) => theme.padding.MobileWrap};
  }

  @media all and (min-width: ${mediaBreakPoint.second}) and (max-width: ${mediaBreakPoint.third}) {
    padding: ${({ theme }) => theme.padding.TabletWrap};
  }

  @media all and (min-width: ${mediaBreakPoint.fourth}) {
    padding: ${({ theme }) => theme.padding.DesktopWrap};
  }
`;

const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${({ theme }) => theme.maxWidth.Paragraph};

  // 바뀌는 속성
  margin: ${({ theme }) => theme.margin.DesktopWrap};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin: ${({ theme }) => theme.margin.MobileWrap};
  }
`;

type BackgroundType = {
  height: number;
  width: number;
};

const Background = styled.div<BackgroundType>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: ${({ width }) => width}px;
  min-height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme.gray7};
  z-index: ${({ theme }) => theme.zIndex.Background};
`;

const ContentsDiv = styled.div`
  margin-top: 36px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 24px;
  }
`;