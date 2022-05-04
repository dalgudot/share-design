import styled from 'styled-components';
import { mediaBreakPoint } from '../styles/common';
import { useEffect } from 'react';
import { visitsAndViewsDuringSession } from '../lib/functions/visits-and-views';
import Footer from '../components/pages-components/index/footer';
import List from '../components/pages-components/index/list';
import { returnArticleData } from '../data/article/return-article-data';
import { useWindowHeight } from '../lib/hooks/useWindowHeight';
import NewBlogNotice from '../components/common-components/notice/new-blog-notice';

const RecordIndex = () => {
  useEffect(() => {
    visitsAndViewsDuringSession('Home');
  }, []);
  const datas = returnArticleData();

  // temporary component for iOS env(safe-area-inset-bottom)
  const height = useWindowHeight();

  return (
    <>
      <Main>
        {/* <NewBlogNotice /> */}
        <ul>
          {datas.map((data) => (
            <List
              key={data.url}
              type={data.type}
              url={data.url}
              category={data.category}
              date={data.date}
              dateTime={data.dateTime}
              title={data.title}
              hashTags={data.hashTags}
            />
          ))}
        </ul>
      </Main>
      <Footer />

      {/* temporary component for iOS env(safe-area-inset-bottom) */}
      {/* <ComingSoon height={height * 0.7}>
        <div />
        <PLarge
          text="Coming Soon 😎"
          color="gray1"
          weight={700}
          marginTop="48px"
        />
      </ComingSoon> */}
    </>
  );
};

export default RecordIndex;

const Main = styled.main`
  margin-top: ${({ theme }) => theme.margin.DesktopTop};
  margin-bottom: ${({ theme }) => theme.margin.DesktopBottom};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: ${({ theme }) => theme.margin.MobileTop};
    margin-bottom: ${({ theme }) => theme.margin.MobileBottom};
    padding: ${({ theme }) => theme.padding.LeftRightPadding};
  }
`;

// for iOS env(safe-area-inset-bottom)
const ComingSoon = styled.div<{ height: number }>`
  div {
    width: 1px;
    height: ${({ height }) => height}px;
    background-color: ${({ theme }) => theme.gray7};
    margin: 0 auto;
  }

  p {
    margin-bottom: 144px;
    text-align: center;
  }
`;
