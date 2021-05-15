import styled from 'styled-components';
import WaveLoading from '../components/canvas/wave-loading/wave-loading';

const WaveTest = () => {
  return (
    <>
      <Div />
      <WaveLoading />
    </>
  );
};

export default WaveTest;

const Div = styled.div`
  width: 48px;
  height: 48px;
  background-color: #ffffff;
  margin: 200px auto 0;
  border-radius: 50%;
  opacity: 0.5;
`;
