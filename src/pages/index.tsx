import HeadSEO from '../elements/head-info/head-seo';
import { indexInfo } from '../elements/head-info/index/index-info';
import styled from 'styled-components';
import { mediaBreakPoint } from '../styles/common';
import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../lib/functions/visits-and-views';
import { bodyScrollTop } from '../lib/functions/body-scroll-top';
import { categoryData } from '../data/data';
import CategoryCard from '../components/page/index/category-card';
import GotoIntroduction from '../components/page/index/go-to-introduction';
import Footer from '../components/page/index/footer';
import ShareToolBar from '../components/page/index/share-tool-bar';

const Index = ({ showToast }: { showToast: Function }) => {
  useEffect(() => {
    VisitsAndViewsDuringSession('Home');
  }, []);
  bodyScrollTop();

  const data = categoryData();

  return (
    <>
      <HeadSEO info={indexInfo} />
      <Main>
        <Ul>
          <CategoryCard
            url={data[0].url}
            title={data[0].title}
            backgroundGradient={data[0].backgroundGradient}
          />
          <CategoryCard
            url={data[1].url}
            title={data[1].title}
            backgroundGradient={data[1].backgroundGradient}
          />
          <GotoIntroduction />
        </Ul>
        <ShareToolBar />
      </Main>
      {/* <Footer /> */}
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
