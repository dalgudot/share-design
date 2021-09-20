import styled from 'styled-components';
import Response from './response';
import { mediaBreakPoint } from '../../../styles/common';
import { useWindowWidth } from '../../../lib/hooks/useWindowWidth';
import { useWindowHeight } from '../../../lib/hooks/useWindowHeight';
import ArticleTitleArea from './article-title-area';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { VisitsAndViewsDuringSession } from '../../../lib/functions/visits-and-views';
import ArticleMessage from './article-message';
import ArticleNotice from './articoe-notice';
import ArticleReference from './article-reference';
import { scrollTop } from '../../../lib/functions/scroll-top';
import { distributeContentsTypes } from '../../../../type';
import PLarge from '../../../foundation/typography/p-large';
import ArticleCommonImage from './article-common-image';
import H2Title from '../../../foundation/typography/h2-title';
import ExampleComponentUiUxDesign1 from './ui-ux-design/1/example-component-ui-ux-design-1';
import ExampleComponentUiUxDesign2 from './ui-ux-design/2/example-component-ui-ux-design-2';
import ExampleComponentProductDesign1 from './product-design/1/example-component-product-design-1';

const Article = ({
  categoryTitle,
  date,
  dateTime,
  articleTitle,
  contentsArray,
  showToast,
  referencesData,
}: {
  categoryTitle?: { k: string; e: string };
  date?: string;
  dateTime?: string;
  articleTitle: { k: string; e: string };
  contentsArray: any[];
  showToast: Function;
  referencesData?: object[];
}) => {
  const width: number = useWindowWidth();
  const height: number = useWindowHeight();
  const router = useRouter();
  const pathname: string = router.pathname;
  // 모든 Article 통계 함수는 여기서 실행
  useEffect(() => {
    VisitsAndViewsDuringSession(router.pathname);
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
        <ArticleCommonImage
          key={`${content.key}${idx}`}
          src={content.content}
          caption={content.caption}
          alt={content.alt}
          marginTop="36px"
        />
      );
    } else if (content.key === 'H2Title') {
      return (
        <H2Title
          key={`${content.key}${idx}`}
          text={content.content}
          color="gray2"
          className="h2__title__margin__bottom"
        />
      );
    } else if (content.key === 'ExampleComponent') {
      switch (pathname) {
        case '/article/ui-ux-design/1':
          return (
            <ExampleComponentUiUxDesign1
              key={`${content.key}${idx}`}
              component_key={content.component_key as string}
              caption={content.caption}
            />
          );
        case '/article/ui-ux-design/2':
          return (
            <ExampleComponentUiUxDesign2
              key={`${content.key}${idx}`}
              component_key={content.component_key as string}
              caption={content.caption}
            />
          );
        case '/article/product-design/1':
          return (
            <ExampleComponentProductDesign1
              key={`${content.key}${idx}`}
              component_key={content.component_key as string}
              caption={content.caption}
              showToast={showToast}
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
          {router.pathname !== '/introduction' && (
            <Response
              showToast={showToast}
              response={response}
              setResponse={setResponse}
              responseLoading={responseLoading}
              setResponseLoading={setResponseLoading}
            />
          )}

          <ArticleNotice />

          {referencesData && (
            <>
              <div ref={responseRef} />
              <ArticleReference referencesData={referencesData} />
            </>
          )}
        </ArticleContainer>
      </Main>
    </>
  );
};

export default Article;

const Main = styled.main`
  background-color: ${({ theme }) => theme.gray7};
  display: flex;
  justify-content: center;

  .h2__title__margin__bottom {
    margin-top: 96px;
    margin-bottom: -12px; // PLarge의 상단 36px 상쇄

    @media all and (max-width: ${mediaBreakPoint.first}) {
      margin-top: 72px;
    }
  }

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
