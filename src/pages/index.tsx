import styled from 'styled-components';
import { mediaBreakPoint } from '../styles/common';
import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../lib/functions/visits-and-views';
import { bodyScrollTop } from '../lib/functions/body-scroll-top';
import GotoIntroduction from '../components/page/index/go-to-introduction';
import Footer from '../components/page/index/footer';
import ShareToolBar from '../components/page/index/share-tool-bar';
import List from '../components/page/index/list';
import { articleData } from '../data/article-data';

const Index = () => {
  useEffect(() => {
    VisitsAndViewsDuringSession('Home');
  }, []);
  bodyScrollTop();
  const data = articleData();

  return (
    <>
      <Main>
        <Ul>
          <List
            // 추후 url 수정 필요
            url={data[0].url}
            category={data[0].category}
            date={data[0].date}
            title={data[0].title}
            summary={data[0].summary}
          />
          <GotoIntroduction />
        </Ul>
        <ShareToolBar />
      </Main>
      <Footer />
    </>
  );
};

export default Index;

const Main = styled.main`
  margin-top: ${({ theme }) => theme.margin.DesktopTop};
  margin-bottom: ${({ theme }) => theme.margin.DesktopBottom};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: ${({ theme }) => theme.margin.MobileTop};
    margin-bottom: ${({ theme }) => theme.margin.MobileBottom};
    padding: ${({ theme }) => theme.padding.MobileWrap};
  }

  @media all and (min-width: ${mediaBreakPoint.second}) and (max-width: ${mediaBreakPoint.third}) {
    padding: ${({ theme }) => theme.padding.TabletWrap};
  }

  @media all and (min-width: ${mediaBreakPoint.fourth}) {
    padding: ${({ theme }) => theme.padding.DesktopWrap};
  }
`;

const Ul = styled.ul``;
