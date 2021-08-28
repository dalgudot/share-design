import styled from 'styled-components';
import { mediaBreakPoint } from '../styles/common';
import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../library/functions/visits-and-views';
import Footer from '../components/pages/index/footer';
import List from '../components/pages/index/list';
import { articleData } from '../data/article-data';
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
          {data.map((_, idx) => (
            <List
              key={data[idx].url}
              url={data[idx].url}
              category={data[idx].category}
              date={data[idx].date}
              dateTime={data[idx].dateTime}
              title={data[idx].title}
              hashTags={data[idx].hashTags}
            />
          ))}
        </ul>
      </Main>
      <Footer />
    </>
  );
};

export default Index;

const Main = styled.main`
  margin-top: ${({ theme }) => theme.margin.DesktopTop};
  /*  margin-bottom: ${({ theme }) => theme.margin.DesktopBottom}; */

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: ${({ theme }) => theme.margin.MobileTop};
    padding: ${({ theme }) => theme.padding.LeftRightPadding};

    /* margin-bottom: ${({ theme }) => theme.margin.MobileBottom};
     */
  }
`;
