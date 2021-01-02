import styled from 'styled-components';
import TextStyle from '../../typography/text-style';
import { fontWeight } from '../../typography/font';
import { mediaBreakPoint } from '../../../styles/common';

const WelcomeState = () => {
  return (
    <Container>
      <h1>Welcome</h1>
    </Container>
  );
};

export default WelcomeState;

const Container = styled.section`
  display: flex;

  // 변경 요소
  margin-top: 176px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 155px;
  }
`;
