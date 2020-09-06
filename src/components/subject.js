import styled from "styled-components";

const Subject = ({ order, title, date }) => {
  return (
    <>
      <Container>
        <LeftBox>
          <p>{order}</p>
          <h1>{title}</h1>
        </LeftBox>
        <p>{date}</p>
      </Container>
      <Line />
    </>
  );
};

export default Subject;

const Container = styled.section`
  width: 100%;
  color: #eeeeee;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 20vh;

  p {
    font-size: 2.5vw;
    font-weight: 300;
  }

  h1 {
    font-weight: 400;
    margin-left: 1.2vw;
  }
`;

const LeftBox = styled.span`
  display: flex;
  align-items: flex-end;
`;

const Line = styled.div`
  width: 100%;
  height: 0.2vw;
  background-color: #eeeeee;
  margin-top: 3vh;
`;
