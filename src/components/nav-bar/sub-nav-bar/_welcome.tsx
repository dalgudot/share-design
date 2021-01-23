import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';
import { t } from '../../index/lang/t';
import H2HeadlineMedium from '../../typography/h2-title-medium';
import PBody400 from '../../typography/p-body-400';

const WelcomeState = () => {
  const welcomeHeadlineTextArray = t.welcomeHeadlineText;
  const welcomeHeadlineText = welcomeHeadlineTextArray.map((text, index) => (
    <H2HeadlineMedium key={index} text={text} />
  ));

  const welcomeTextArray = t.welcomeText;
  const welcomeText = welcomeTextArray.map((text, index) => (
    <PBody400
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
