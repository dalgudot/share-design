import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';
import { t } from '../../index/lang/t';
import H2Title700 from '../../typography/h2-title-700';
import PMedium400 from '../../typography/p-medium-400';
import { articleT } from '../../article/lang/article-t';

const WelcomeState = () => {
  const welcomeHeadlineTextArray = articleT.welcomeText;
  const welcomeHeadlineText = welcomeHeadlineTextArray.map((text, index) => (
    <H2Title700 key={index} text={text} color={themeContext.gray1} />
  ));

  const welcomeTextArray = articleT.welcomeText;
  const welcomeText = welcomeTextArray.map((text, index) => (
    <PMedium400
      key={index}
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
