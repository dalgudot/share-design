import PropTypes from "prop-types";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

const ParallaxText = ({
  yOne,
  yTwo,
  textOne,
  textTwo,
  textThree,
  textFour,
}) => {
  return (
    <Parallax y={[yOne, yTwo]} tagOuter="figure">
      <TextContainer>
        <div>
          <p>{textOne}</p>
          <p>{textTwo}</p>
          <p>{textThree}</p>
          <p>{textFour}</p>
        </div>
      </TextContainer>
    </Parallax>
  );
};

export default ParallaxText;

const TextContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  /* div는 2줄 이상에서 필요 */
  div {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    color: var(--white);
    font-size: 48px;
    font-weight: 100;
  }
`;

ParallaxText.propTypes = {
  yOne: PropTypes.number.isRequired,
  yTwo: PropTypes.number.isRequired,
  textOne: PropTypes.string.isRequired,
  textTwo: PropTypes.string,
  textThree: PropTypes.string,
  textFour: PropTypes.string,
};
