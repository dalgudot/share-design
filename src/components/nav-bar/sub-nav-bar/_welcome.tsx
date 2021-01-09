import styled from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';
import { t } from '../../index/lang/t';
import H2HeadlineMedium from '../../typography/headline-medium';
import PBody from '../../typography/body';

const WelcomeState = () => {
  const welcomeHeadlineTextArray = t.welcomeHeadlineText;
  const welcomeHeadlineText = welcomeHeadlineTextArray.map((text, index) => (
    <H2HeadlineMedium key={index} text={text} />
  ));

  const welcomeTextArray = t.welcomeText;
  const welcomeText = welcomeTextArray.map((text, index) => (
    <PBody key={index} text={text} marginTop="24px" />
  ));

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
  color: ${({ theme }) => theme.whitePrimary};
  max-width: 740px;

  // 변경 요소
  margin-top: 176px;
  margin-bottom: 72px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 155px;
    margin-bottom: 36px;
  }
`;
