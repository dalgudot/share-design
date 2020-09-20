import PropTypes from "prop-types";
import styled from "styled-components";
import { ParallaxBanner } from "react-scroll-parallax";

const ParallaxImage = ({ imgOne, amountOne }) => {
  return (
    <Container>
      <ParallaxBanner
        // className="image__banner"

        //객체에는 `${~}` 로 작성
        layers={[
          {
            image: `${imgOne}`,
            amount: `${amountOne}`,
          },
        ]}
        style={{
          width: "100vw",
          height: "66.6667vw",
          pointerEvents: "none",
        }}
      />
    </Container>
  );
};

export default ParallaxImage;

const Container = styled.section`
  margin-top: 100px;
  margin-bottom: 200px;
`;

ParallaxImage.propTypes = {
  imgOne: PropTypes.string.isRequired,
  amountOne: PropTypes.number.isRequired,
};
