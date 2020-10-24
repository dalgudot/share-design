import styled from "styled-components";
import TwentiesStaggerText from "../../components/text-component/twenties/twenties-stagger-text";
import LangChangeButton from "../../components/button/lang-change-button";
import HeadInfo from "../../components/head-info";

const Twenties = () => {
  return (
    <>
      {/* <LangChangeButton /> */}
      <GallaryBackground>
        <Frame>
          <TwentiesStaggerText text="flutter" />

          {/* <Artwork src="/images/1.jpg" /> */}
        </Frame>
      </GallaryBackground>
    </>
  );
};

export default Twenties;

const GallaryBackground = styled.main`
  width: 100%;
  height: 100%;
  /* background-image: linear-gradient(
    #242424,
    ${({ theme }) => theme.backgroundColor}
  ); */
`;

const Frame = styled.figure`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.25) inset,
    2 6px 16px 0 rgba(0, 0, 0, 0.7);
  box-sizing: content-box;

  @media all and (max-width: 1199px) {
    /* border: 1vw solid;
    border-top-color: #2a2a2a;
    border-right-color: #2d2d2d;
    border-bottom-color: #313131;
    border-left-color: #2a2a2a; */
    width: 93vw;
    height: 62vw;
  }

  @media all and (min-width: 1200px) {
    width: 75vw;
    height: 50vw;
  }
`;

const Artwork = styled.img`
  pointer-events: none;

  @media all and (max-width: 1199px) {
    /* border: 1vw solid;
    border-top-color: #2a2a2a;
    border-right-color: #2d2d2d;
    border-bottom-color: #313131;
    border-left-color: #2a2a2a; */
    width: 93vw;
    height: 62vw;
  }

  @media all and (min-width: 1200px) {
    width: 75vw;
    height: 50vw;
  }
`;
