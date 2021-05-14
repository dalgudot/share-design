import styled from 'styled-components';
import WaveLoading from '../components/canvas/wave-loading/wave-loading';

const WaveTest = () => {
  return (
    <Container>
      <WaveLoading />
    </Container>
  );
};

export default WaveTest;

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  /* margin: 150px auto 0; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  overflow: auto;

  canvas {
    width: 100%;
    height: 100%;
  }
`;
