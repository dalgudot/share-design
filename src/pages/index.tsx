import styled from 'styled-components';
import { mediaBreakPoint } from '../styles/common';
import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../library/functions/visits-and-views';
import Footer from '../components/pages/index/footer';
import List from '../components/pages/index/list';
import { articleData } from '../data/article-data';
import { useArvAmplitude } from '../library/hooks/Amplitude/useArvAmplitude';
import { useWindowHeight } from '../library/hooks/useWindowHeight';
import PLarge from '../foundation/typography/p-large';

const Index = () => {
  // useArvAmplitude('arv_home');
  useEffect(() => {
    VisitsAndViewsDuringSession('Home');
  }, []);
  const data = articleData();

  // temporary component for iOS env(safe-area-inset-bottom)
  const height = useWindowHeight();

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

      {/* temporary component for iOS env(safe-area-inset-bottom) */}
      <ComingSoon height={height * 0.7}>
        <div />
        <PLarge
          text="Coming Soon 😎"
          color="gray1"
          weight={700}
          marginTop="36px"
        />
      </ComingSoon>
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
    padding: ${({ theme }) => theme.padding.LeftRightPadding};
  }

  // iOS bottom safe area
  /* padding-bottom: calc(env(safe-area-inset-bottom)); */
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
