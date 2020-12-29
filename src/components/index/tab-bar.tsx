import styled from 'styled-components';
import { mediaBreakPoint } from '../../styles/common';

const TabBar = ({ theme }: any) => {
  return (
    <Container>
      <Tab>
        <p>홈</p>
      </Tab>
      <Tab>
        <p>더보기</p>
      </Tab>
    </Container>
  );
};

export default TabBar;

const Container = styled.section`
  display: none;
  width: 100vw;
  height: 48px;
  position: fixed;
  left: 0;
  bottom: 0;

  z-index: 9999;
  background-color: ${({ theme }) => theme.gray4};

  /* Grassmorphism */
  /* opacity: 0.999;
  color: ${({ theme }) => theme.backgroundColor};
  -webkit-backdrop-filter: blur(80px) saturate(120%) brightness(95%)
    hue-rotate(10deg);
  backdrop-filter: blur(80px) saturate(120%) brightness(95%) hue-rotate(10deg);

  -webkit-transition: color 0.11s ease-in-out,
    -webkit-backdrop-filter 0.11s ease-in-out;
  transition: color 0.11s ease-in-out, backdrop-filter 0.11s ease-in-out; */

  @media all and (max-width: ${mediaBreakPoint.first}) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const Tab = styled.div`
  width: 100%;
  text-align: center;
`;
