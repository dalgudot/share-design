import styled from 'styled-components';
import ArticleResponse from './article-response';
import { mediaBreakPoint } from '../../../styles/common';
import { useWindowWidth } from '../../../lib/hooks/useWindowWidth';
import { useWindowHeight } from '../../../lib/hooks/useWindowHeight';
import ArticleTitleArea from './article-title-area';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { visitsAndViewsDuringSession } from '../../../lib/functions/visits-and-views';
import ArticleMessage from './article-message';
import ArticleDownloadAPP from './article-download-APP';
import ArticleReference from './article-reference';
import { scrollTop } from '../../../lib/functions/scroll-top';
import { distributeContentsTypes } from '../../../../type';
import PLarge from '../../../foundation/typography/p-large';
import ArticleImage from './article-image';
import H2Title from '../../../foundation/typography/h2-title';
import ExampleUiUxDesign1 from './ui-ux-design/1/example-ui-ux-design-1';
import ExampleUiUxDesign2 from './ui-ux-design/2/example-ui-ux-design-2';
import ExampleProductDesign1 from './product-design/1/example-product-design-1';
import ArticleToolBar from './tool-bar/article-tool-bar';
import Go from './article-go';

const Article = ({
  categoryTitle,
  date,
  dateTime,
  articleTitle,
  contentsArray,
  referencesData,
}: {
  categoryTitle?: { k: string; e: string };
  date?: string;
  dateTime?: string;
  articleTitle: { k: string; e: string };
  contentsArray: any[];
  referencesData?: object[];
}) => {
  const width: number = useWindowWidth();
  const height: number = useWindowHeight();
  const router = useRouter();
  const pathname: string = router.pathname;
  // 모든 Article 통계 함수는 여기서 실행
  useEffect(() => {
    visitsAndViewsDuringSession(router.pathname);
  }, []);

  // <Article />끼리 이동하는 경우처럼 같은 컴포넌트의 이동에서는 스크롤이 유지되기 때문에 'scrollTop()' 필요.
  // ex) Introduction > First Content일 때
  scrollTop();

  // https://stackoverflow.com/questions/43441856/how-to-scroll-to-an-element
  const [response, setResponse] = useState<object[]>([] || null);
  const responseRef = useRef<HTMLDivElement>(null);

  const goToResponse = () => {
    const target = responseRef.current!;
    const clientRect = target.getBoundingClientRect();
    // console.log(clientRect);
    const relativeTop = clientRect.top;
    const scrolledTopLength = window.pageYOffset; // 스크롤된 길이
    // console.log('scrolledTopLength', scrolledTopLength);
    const absoluteTop = scrolledTopLength + relativeTop; // 절대좌표
    // console.log('absoluteTop', absoluteTop);

    window.scrollTo({
      top: absoluteTop,
      left: 0,
      behavior: 'smooth',
    });
  };
  const goToTop = () => {
    const bodyId = document.querySelector('body');
    bodyId?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [responseLoading, setResponseLoading] = useState(true);
  useEffect(() => {
    router.query.CompleteResponse === 'true' ? goToResponse() : goToTop();
    return () => setResponse([] || null);
  }, []);

  const distributeContents = (
    content: distributeContentsTypes,
    idx: number
  ) => {
    if (content.key === 'PLarge') {
      return (
        <PLarge
          key={`${content.key}${idx}`}
          text={content.content}
          color="gray3"
          marginTop="36px"
        />
      );
    } else if (content.key === 'img') {
      return (
        <ArticleImage
          key={`${content.key}${idx}`}
          src={content.content}
          caption={content.caption}
          alt={content.alt}
        />
      );
    } else if (content.key === 'H2Title') {
      return (
        <H2Title
          key={`${content.key}${idx}`}
          text={content.content}
          color="gray2"
          className="h2__title__margin"
        />
      );
    } else if (content.key === 'ExampleComponent') {
      switch (pathname) {
        case '/article/ui-ux-design/1':
          return (
            <ExampleUiUxDesign1
              key={`${content.key}${idx}`}
              component_key={content.component_key as string}
              caption={content.caption}
            />
          );
        case '/article/ui-ux-design/2':
          return (
            <ExampleUiUxDesign2
              key={`${content.key}${idx}`}
              component_key={content.component_key as string}
              caption={content.caption}
            />
          );
        case '/article/product-design/1':
          return (
            <ExampleProductDesign1
              key={`${content.key}${idx}`}
              component_key={content.component_key as string}
              content={content.content}
              caption={content.caption}
            />
          );
      }
    } else {
      return;
    }
  };

  const contents = contentsArray.map(
    (content: distributeContentsTypes, idx: number) =>
      distributeContents(content, idx)
  );

  return (
    <>
      <Main>
        <Background width={width} height={height} />
        <ArticleContainer>
          <ArticleTitleArea
            categoryTitle={categoryTitle}
            date={date}
            dateTime={dateTime}
            articleTitle={articleTitle}
          />

          <ArticleMessage />

          {contents}

          {/* introduction에는 댓글 넣지 않음 */}
          {router.pathname !== '/introduction' ? (
            <ArticleResponse
              response={response}
              setResponse={setResponse}
              responseLoading={responseLoading}
              setResponseLoading={setResponseLoading}
            />
          ) : (
            <Go
              targetBlank={false}
              href="/article/ui-ux-design/1"
              text={{
                k: `👋\u00A0\u00A0첫 번째 콘텐츠 보러 가기`,
                e: `👋\u00A0\u00A0Go to the first content`,
              }}
              marginTopDesktop="144px"
              marginTopMobile="120px"
            />
          )}

          {router.pathname !== '/introduction' && <ArticleDownloadAPP />}

          {referencesData && (
            <>
              <div ref={responseRef} />
              <ArticleReference referencesData={referencesData} />
            </>
          )}
        </ArticleContainer>
      </Main>
      <ArticleToolBar />
    </>
  );
};

export default Article;

const Main = styled.main`
  background-color: ${({ theme }) => theme.gray7};
  display: flex;
  justify-content: center;

  margin-top: ${({ theme }) => theme.margin.DesktopTop};
  padding-bottom: ${({ theme }) => theme.margin.DesktopBottom};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: ${({ theme }) => theme.margin.MobileTop};
    padding-bottom: ${({ theme }) => theme.margin.MobileBottom};
  }
`;

const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${({ theme }) => theme.maxWidth.Paragraph};

  // 바뀌는 속성
  margin-top: 72px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 24px;
    padding: ${({ theme }) => theme.padding.LeftRightPadding};
  }

  .h2__title__margin {
    margin-top: 96px;
    margin-bottom: -12px; // PLarge의 상단 36px 상쇄

    @media all and (max-width: ${mediaBreakPoint.first}) {
      margin-top: 96px;
    }
  }
`;

const Background = styled.div<{ height: number; width: number }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: ${({ width }) => width}px;
  min-height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme.gray7};
  z-index: ${({ theme }) => theme.zIndex.Background};
`;
