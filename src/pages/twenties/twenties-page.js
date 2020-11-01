import styled from "styled-components";
import HeadInfo from "../../components/head-info";
import { twentiesInfo } from "../../components/lang/head-info/head-info-text";
import { useState } from "react";
import View from "./view";
import LangChangeButton from "../../components/button/lang-change-button";
import { useSelector } from "react-redux";
import { kAlt } from "../../components/twenties/lang/ko-twenties";
import { eAlt } from "../../components/twenties/lang/en-twenties";
import { amplitudeModule } from "../../components/amplitude/amplitude";

const TwentiesPage = () => {
  const lang = useSelector((state) => state.language);
  const [pageNum, setPageNum] = useState(1);
  console.log(`TwentiesPageNum: ${pageNum}`);

  const next = () => {
    setPageNum(pageNum + 1);
  };

  const prev = () => {
    setPageNum(pageNum - 1);
  };

  amplitudeModule("arv_twenties_artwork");

  return (
    <>
      <HeadInfo info={twentiesInfo} />
      {/* <LangChangeButton /> */}

      <View pageNum={pageNum} lang={lang} />

      <ButtonPrev onClick={prev}>
        <img
          src="/svg/icn_prev_48.svg"
          alt={`${lang}` === "ko" ? kAlt.altPrevious : eAlt.altPrevious}
        />
      </ButtonPrev>

      <ButtonNext onClick={next}>
        <img
          src="/svg/icn_next_48.svg"
          alt={`${lang}` === "ko" ? kAlt.altNext : eAlt.altNext}
        />
      </ButtonNext>
    </>
  );
};

export default TwentiesPage;

const ButtonPrev = styled.button`
  position: absolute;
  opacity: 0.8;

  @media all and (max-width: 650px) {
    bottom: 72px;
    left: 72px;

    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
  }

  @media all and (min-width: 651px) {
    left: 3vw;
    top: 49%;

    img {
      width: 36px;
      height: 36px;
      object-fit: contain;
    }
  }

  /* @media all and (min-width: 700px) {
    right: 24px;
    top: 50%;
    trasform: translateY(-50%);

    img {
      width: 36px;
      height: 36px;
      object-fit: contain;
    }
  } */
`;

const ButtonNext = styled.button`
  position: absolute;
  opacity: 0.8;

  @media all and (max-width: 650px) {
    bottom: 72px;
    right: 72px;

    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
  }

  @media all and (min-width: 651px) {
    right: 3vw;
    top: 49%;

    img {
      width: 36px;
      height: 36px;
      object-fit: contain;
    }
  }

  /* @media all and (min-width: 700px) {
    right: 24px;
    top: 50%;
    trasform: translateY(-50%);

    img {
      width: 36px;
      height: 36px;
      object-fit: contain;
    } 
  }*/
`;
