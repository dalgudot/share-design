import styled from "styled-components";
import HeadInfo from "../../components/head-info";
import { twentiesInfo } from "../../components/lang/head-info/head-info-text";
import { useState } from "react";
import View from "./view";
import LangChangeButton from "../../components/button/lang-change-button";
import { useSelector } from "react-redux";
import { amplitudeModule } from "../../components/amplitude/amplitude";

const TwentiesPage = () => {
  const lang = useSelector((state) => state.language);
  const [pageNum, setPageNum] = useState(5);
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
      <LangChangeButton />

      <Aligncenter>
        <View pageNum={pageNum} lang={lang} />

        {pageNum !== 1 && <ButtonPrev onClick={prev}>&lt;</ButtonPrev>}

        <ButtonNext onClick={next}>&gt;</ButtonNext>
      </Aligncenter>
    </>
  );
};

export default TwentiesPage;

const ButtonPrev = styled.button`
  position: absolute;
  opacity: 0.8;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 36px;
  opacity: 0.3;

  @media all and (max-width: 650px) {
    left: 72px;
    bottom: 72px;
  }

  @media all and (min-width: 651px) {
    left: 3vw;
    top: 47%;
  }

  /* @media all and (min-width: 700px) {
    right: 24px;
    top: 50%;
    trasform: translateY(-50%);
  } */
`;

const Aligncenter = styled.section`
  @media all and (min-width: 651px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ButtonNext = styled.button`
  position: absolute;
  opacity: 0.8;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 36px;
  opacity: 0.3;

  @media all and (max-width: 650px) {
    right: 72px;
    bottom: 72px;
  }

  @media all and (min-width: 651px) {
    right: 3vw;
    top: 47%;
  }

  /* @media all and (min-width: 700px) {
    right: 24px;
    top: 50%;
    trasform: translateY(-50%);
  }*/
`;
