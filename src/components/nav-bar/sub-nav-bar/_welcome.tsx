import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';
import { t } from '../../page/index/text/t';
import H2Title700 from '../../../elements/typography/h2-title-700';
import PMedium400 from '../../../elements/typography/p-medium-400';
import { tArticle } from '../../page/article/text/t-article';

const WelcomeState = () => {
  const welcomeHeadlineTextArray = tArticle.welcomeText;
  const welcomeHeadlineText = welcomeHeadlineTextArray.map((text, index) => (
    <H2Title700 key={index} text={text} color={themeContext.gray1} />
  ));

  const welcomeTextArray = tArticle.welcomeText;
  const welcomeText = welcomeTextArray.map((text, idx) => (
    <PMedium400
      key={idx}
      text={text}
      marginTop="24px"
      color={themeContext.gray1}
    />
  ));

  const themeContext = useContext(ThemeContext);

  return (
    <Container>
      {welcomeHeadlineText}
      {welcomeText}
    </Container>
  );
};

export default WelcomeState;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  color: ${({ theme }) => theme.gray1};
  max-width: 740px;

  // 변경 요소
  margin-top: 176px;
  margin-bottom: 72px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 155px;
    margin-bottom: 36px;
  }
`;
