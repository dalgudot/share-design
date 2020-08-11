import styled from "styled-components";

const Spoqa = () => {
  return (
    <Container>
      <h1>123456789</h1>
      <h2>123456789</h2>
      <h3>123456789</h3>
      <h4>123456789</h4>
    </Container>
  );
};

export default Spoqa;

const Container = styled.section`
  margin: 0 auto;

  h1 {
    font-family: "Spoqa Han Sans";
    font-weight: 700;
    font-size: 36px;
    color: var(--text-color);
  }

  h2 {
    font-family: "Spoqa Han Sans";
    font-weight: 400;
    font-size: 36px;
  }

  h3 {
    font-family: "Spoqa Han Sans";
    font-weight: 300;
    font-size: 36px;
  }

  h4 {
    font-family: "Spoqa Han Sans";
    font-weight: 100;
    font-size: 36px;
  }
`;
