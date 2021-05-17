import styled from 'styled-components';
import { mediaBreakPoint } from '../styles/common';
import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../library/functions/visits-and-views';
import GotoIntroduction from '../components/pages/index/go-to-introduction';
import Footer from '../components/pages/index/footer';
import ShareToolBar from '../components/pages/index/share-tool-bar';
import List from '../components/pages/index/list';
import { articleData } from '../data/article-data';
import IconLanguage169 from '../foundation/svg/icon_language_16_9';
import IconMotion169 from '../foundation/svg/icon_motion_16_9';
import { useArvAmplitude } from '../library/hooks/Amplitude/useArvAmplitude';

const Index = () => {
  useArvAmplitude('arv_home');
  useEffect(() => {
    VisitsAndViewsDuringSession('Home');
  }, []);
  const data = articleData();

  return (
    <>
      <Main>
        <ul>
          <List
            url={data[1].url}
            category={data[1].category}
            date={data[1].date}
            dateTime={data[1].dateTime}
            title={data[1].title}
            summary={data[1].summary}
          >
            <IconMotion169 />
          </List>
          <List
            url={data[0].url}
            category={data[0].category}
            date={data[0].date}
            dateTime={data[0].dateTime}
            title={data[0].title}
            summary={data[0].summary}
            marginTop="72px"
          >
            <IconLanguage169 />
          </List>
          <GotoIntroduction />
        </ul>

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
