import styled from 'styled-components';

const Test = () => {
  return (
    <Container>
      <Basic>
        <Blur />
      </Basic>
    </Container>
  );
};

export default Test;

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    90deg,
    #ffff00 6%,
    #ffa500 25%,
    #f14444 45%,
    #d53567 55%,
    #9a109a 94%
  );
  display: flex;
`;

const Basic = styled.div`
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.4);
  position: relative;
  border-radius: 10px;
  margin: auto auto;
`;

const Blur = styled.div`
  position: absolute;
  bottom: 25px;
  right: 162px;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;
