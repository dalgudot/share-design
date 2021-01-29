import styled, { ThemeContext, DefaultTheme } from 'styled-components';
import { useContext, useEffect } from 'react';
import { DetectBrowserLang } from '../../../../lib/functions/detect-browser-lang';
import { VisitsAndViewsDuringSession } from '../../../../lib/functions/visits-and-views';
import Share from '../../../../components/article/share-modal';
import Comment from '../../../../components/article/comment';
import PSmall700 from '../../../../components/typography/p-small-700';
import { mediaBreakPoint } from '../../../../styles/common';
import { t } from '../../../../components/index/lang/t';
import { articleT } from '../../../../components/article/lang/article-t';
import H1Title700 from '../../../../components/typography/h1-title-700';
import { useSetLanguage } from '../../../../lib/hooks/useSetLanguage';
import PSmall400 from '../../../../components/typography/p-small-400';
import PMedium400 from '../../../../components/typography/p-medium-400';

const TwoLanguage = () => {
  DetectBrowserLang();
  useEffect(() => {
    VisitsAndViewsDuringSession('portfolio/001 SHARE DESIGN Project');
  }, []);
  const themeContext: DefaultTheme = useContext(ThemeContext);

  const TitleTextArray = articleT.portfolioDesignStory.article1.title;
  const titleText = TitleTextArray.map((text, index) => (
    <H1Title700
      key={index}
      text={text}
      color={themeContext.gray1}
      marginTop="4px"
    />
  ));

  const contentsTextArray = articleT.portfolioDesignStory.article1.contentsText;
  const contentsText = contentsTextArray.map((text, index) => (
    <PMedium400
      key={index}
      text={text}
      color={themeContext.gray3}
      marginTop="36px"
    />
  ));

  return (
    <Main>
      <BackgroundColor />
      <PSmall700
        text={articleT.portfolioDesignStory.article1.category}
        color={themeContext.gray4}
        marginTop="91px"
      />
      {titleText}

      <AuthorData>
        <img
          src="/images/profile.jpg"
          alt={useSetLanguage(t.contact.profileAlt)}
        />
        <PSmall400 text={t.myName} color={themeContext.gray1} />
        <span></span>
        <PSmall400
          text={articleT.portfolioDesignStory.article1.date}
          color={themeContext.gray4}
        />
      </AuthorData>

      <ContentsContainer>{contentsText}</ContentsContainer>

      {/* <Comment /> */}
      {/* <Share /> */}
    </Main>
  );
};

export default TwoLanguage;

const Main = styled.main`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: 0 4.5vw;
  }

  /* @media all and (min-width: ${mediaBreakPoint.second}) and (max-width: ${mediaBreakPoint.third}) {
    padding: 0 12vw;
  }

  @media all and (min-width: ${mediaBreakPoint.fourth}) {
    padding: 0 16.6667%;
  } */
`;

const AuthorData = styled.section`
  margin-top: 8px;
  display: flex;
  align-items: center;

  img {
    width: 28px;
    height: 28px;
    border: solid 2px ${({ theme }) => theme.gray7};
    border-radius: 50%;
    margin-right: 6px;
  }

  span {
    height: 2px;
    width: 2px;
    background-color: ${({ theme }) => theme.gray4};
    border-radius: 50%;
    margin-left: 4px;
    margin-right: 4px;
    margin-top: 3px;
  }
`;

const ContentsContainer = styled.section`
  padding-top: 12px; // 12px + {contentsText}의 36px = 48px
  padding-bottom: 85px; // 하단 fixed 공유하기 탭 바 고려
`;

const BackgroundColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.gray7};
  z-index: -1;
`;
