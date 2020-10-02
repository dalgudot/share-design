import styled from "styled-components";

const ArtworkTwenteis = ({ src }) => {
  return (
    <Container>
      <Artwork src={src} />
    </Container>
  );
};

export default ArtworkTwenteis;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Artwork = styled.img`
  pointer-events: none;
  margin-top: 50vh;
  margin-bottom: 25vh;

  @media all and (max-width: 1200px) {
    width: 100vw;
    height: 66.6667vw;
  }

  @media all and (min-width: 1200px) {
    width: 75vw;
    height: 50vw;
    border: 16px solid #161616;
    box-sizing: content-box;
    border-radius: 2px;
    filter: drop-shadow(0px 2px 8px #161616);
  }
`;
