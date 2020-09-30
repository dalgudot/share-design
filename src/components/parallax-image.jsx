import PropTypes from "prop-types";
import styled from "styled-components";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

const ParallaxImage = ({ img }) => {
  return (
    <Container>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            {
              image: `${img}`,
              amount: 0.01,
            },
          ]}
          style={{
            width: "100vw",
            height: "66.6667vw",
            pointerEvents: "none",
          }}
        />
      </ParallaxProvider>
    </Container>
  );
};

export default ParallaxImage;

const Container = styled.section`
  margin-top: 200px;
  margin-bottom: 200px;
`;

ParallaxImage.propTypes = {
  img: PropTypes.string.isRequired,
};
