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

  @media all and (min-width: 320px) and (max-width: 767px) {
    width: 100vw;
    height: 66.6667vw;
  }

  @media all and (min-width: 768px) {
    width: 135vh;
    height: 90vh;
    border: 16px solid #212121;
    filter: drop-shadow(2px 4px 24px #333333);
  }
`;
