import PropTypes from "prop-types";
import styled from "styled-components";
import { ParallaxBanner } from "react-scroll-parallax";

const ParallaxImage = ({ imgOne, amountOne }) => {
  return (
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
  );
};

export default ParallaxImage;

ParallaxImage.propTypes = {
  imgOne: PropTypes.string.isRequired,
  amountOne: PropTypes.number.isRequired,
};
