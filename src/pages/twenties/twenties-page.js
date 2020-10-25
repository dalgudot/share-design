import styled from "styled-components";
import HeadInfo from "../../components/head-info";
import { twentiesInfo } from "../../components/lang/head-info/head-info-text";
import { useState } from "react";
import View from "./view";
import LangChangeButton from "../../components/button/lang-change-button";
import { useSelector } from "react-redux";
import { kAlt } from "../../components/lang/twenties-gallary/ko-twenties";
import { eAlt } from "../../components/lang/twenties-gallary/en-twenties";

const TwentiesPage = () => {
  const lang = useSelector((state) => state.language);

  const [pageNum, setPageNum] = useState(1);
  console.log(`TwentiesPageNum: ${pageNum}`);

  const forward = () => {
    setPageNum(pageNum + 1);
  };

  const backward = () => {
    setPageNum(pageNum - 1);
  };

  return (
    <>
      <HeadInfo info={twentiesInfo} />
      <LangChangeButton />
      <View pageNum={pageNum} lang={lang} />
      <ButtonPositionWrap>
        <Button onClick={backward}>
          <img
            src="/svg/icn_backward_48.svg"
            alt={`${lang}` === "ko" ? kAlt.altPrevious : eAlt.altPrevious}
          />
        </Button>
        <Button onClick={forward}>
          <img
            src="/svg/icn_forward_48.svg"
            alt={`${lang}` === "ko" ? kAlt.altNext : eAlt.altNext}
          />
        </Button>
      </ButtonPositionWrap>
    </>
  );
};

export default TwentiesPage;

const ButtonPositionWrap = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10vh;
`;

const Button = styled.button`
  margin: 0 20vw;

  @media all and (max-width: 480px) {
    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
  }

  @media all and (min-width: 481px) {
    img {
      width: 48px;
      height: 48px;
      object-fit: contain;
    }
  }
`;
