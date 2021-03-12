import styled from 'styled-components';
import Comment from './comment';
import { mediaBreakPoint } from '../../../styles/common';
import { useWindowWidth } from '../../../lib/hooks/useWindowWidth';
import { useWindowHeight } from '../../../lib/hooks/useWindowHeight';
import ArticleTitleArea from './article-title-area';
import ArticleToolBar from './article-tool-bar/article-tool-bar';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { VisitsAndViewsDuringSession } from '../../../lib/functions/visits-and-views';
import IntroductionContents from '../introduction/introduction-contents';
import UIUXDesignContents1 from './ui-ux-design/1';
import ArticleMessage from './article-message';

const Article = ({
  categoryTitle,
  date,
  articleTitle,
  contentsArray,
  showToast,
}: {
  categoryTitle?: object;
  date?: object;
  articleTitle: object;
  contentsArray: object[];
  showToast?: Function;
}) => {
  const width: number = useWindowWidth();
  const height: number = useWindowHeight();
  const router = useRouter();
  const pathname: string = router.pathname;
  // 모든 Article 통계 함수는 여기서 실행
  useEffect(() => {
    VisitsAndViewsDuringSession(router.pathname);
  }, []);

  // https://stackoverflow.com/questions/43441856/how-to-scroll-to-an-element
  const [comments, setComments] = useState<object[]>([] || null);
  const commentRef = useRef<HTMLDivElement>(null);
  const executeScroll = () =>
    commentRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  const [commentsLoading, setCommentsLoading] = useState(true);

  useEffect(() => {
    if (router.query.CompleteComment === 'true') {
      // console.log('동작');
      executeScroll();
    } else {
      // console.log('스크롤탑');
      const bodyId = document.querySelector('body');
      bodyId?.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    return () => setComments([] || null); // CleanUp Function
  }, []);

  const contentsSwitch = () => {
    switch (pathname) {
      case '/introduction':
        return <IntroductionContents contentsArray={contentsArray} />;
      case '/article/ui-ux-design/1':
        return <UIUXDesignContents1 contentsArray={contentsArray} />;
    }
  };
  const contents = contentsSwitch();

  return (
    <>
      <Main>
        <Background width={width} height={height} />
        <ArticleContainer>
          <ArticleTitleArea
            categoryTitle={categoryTitle}
            date={date}
            articleTitle={articleTitle}
          />

          <ArticleMessage />

          {contents}

          {/* introduction에는 댓글 및 슬랙 넣지 않음 */}
          {router.pathname !== '/introduction' && (
            <Comment
              showToast={showToast}
              comments={comments}
              setComments={setComments}
              commentsLoading={commentsLoading}
              setCommentsLoading={setCommentsLoading}
            />
          )}
          <div ref={commentRef} />

          <ArticleToolBar />
        </ArticleContainer>
      </Main>
    </>
  );
};

export default Article;

const Main = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.gray7};

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
