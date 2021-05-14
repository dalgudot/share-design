import styled from 'styled-components';
import WaveLoading from '../components/canvas/wave-loading/wave-loading';

const WaveTest = () => {
  return (
    <Container>
      <Wrap>
        <WaveLoading />
      </Wrap>
    </Container>
  );
};

export default WaveTest;
const Container = styled.main`
  /* position: absolute; */
  width: 100%;
  height: calc(100vh - 48px);
  /* margin: 150px auto 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* background-color: white; */
  /* border-radius: 50%; */

  canvas {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
`;

const Wrap = styled.div`
  display: flex;
`;
