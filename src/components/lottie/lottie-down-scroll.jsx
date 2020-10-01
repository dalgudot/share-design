import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../../../public/lottie/shop_like.json";
import styled from "styled-components";

const LottieDownScroll = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animationData,
    });
  }, []);

  return <Container ref={container}></Container>;
};

export default LottieDownScroll;

const Container = styled.figure`
  width: 48px;
  height: 48px;
`;
