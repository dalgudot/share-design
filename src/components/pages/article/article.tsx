import styled from 'styled-components';
import Response from './response';
import { mediaBreakPoint } from '../../../styles/common';
import { useWindowWidth } from '../../../library/hooks/useWindowWidth';
import { useWindowHeight } from '../../../library/hooks/useWindowHeight';
import ArticleTitleArea from './article-title-area';
import ArticleToolBar from './article-tool-bar/article-tool-bar';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { VisitsAndViewsDuringSession } from '../../../library/functions/visits-and-views';
import IntroductionContents from '../introduction/introduction-contents';
import UIUXDesignContents1 from './ui-ux-design/1/1';
import ArticleMessage from './article-message';
import ArticleNotice from './articoe-notice';
import ArticleReference from './article-reference';
import Link from 'next/link';
import { projectIntroduction } from '../../../data/article/introduction';
import { motion } from 'framer-motion';
import AloneButton from '../../button/alone-button';
import { scrollTop } from '../../../library/functions/scroll-top';
import ArticleProgressBar from './article-progress-bar';
import UIUXDesignContents2 from './ui-ux-design/2/2';
import DesignXCodeContents1 from './design-X-Code/1';

const Article = ({
  categoryTitle,
  date,
  dateTime,
  articleTitle,
  contentsArray,
  showToast,
  referencesData,
}: {
  categoryTitle?: object;
  date?: object;
  dateTime?: string;
  articleTitle: object;
  contentsArray: object[];
  showToast?: Function;
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

  const contentsSwitch = () => {
    switch (pathname) {
      case '/introduction':
        return <IntroductionContents contentsArray={contentsArray} />;
      case '/article/ui-ux-design/1':
        return <UIUXDesignContents1 contentsArray={contentsArray} />;
      case '/article/ui-ux-design/2':
        return <UIUXDesignContents2 contentsArray={contentsArray} />;
      case '/article/design-X-code/1':
        return <DesignXCodeContents1 contentsArray={contentsArray} />;
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
            dateTime={dateTime}
            articleTitle={articleTitle}
          />

          <ArticleMessage />

          {/* {contents} */}

          {router.pathname === '/introduction' && (
            <GoToFirstContent>
              <Link href="/article/ui-ux-design/1">
                <a>
                  <AloneButton
                    size="medium"
                    btnText={projectIntroduction().goToFirstContent}
                    color="gray6__30"
                  />
                </a>
              </Link>
            </GoToFirstContent>
          )}

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
            <ArticleReference referencesData={referencesData} />
          )}
          <div ref={responseRef} />

          {/* introduction에는 progressbar 넣지 않음, 처음부터 100%인 스크롤 버그 */}
          {router.pathname !== '/introduction' && <ArticleProgressBar />}
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
  display: flex;
  justify-content: center;

  /* iOS top safe area */
  /* margin-top: calc(env(safe-area-inset-top)); */
  margin-bottom: calc(env(safe-area-inset-bottom));

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

const GoToFirstContent = styled(motion.button)`
  margin: 96px auto 32px;
`;
