import styled from "styled-components";
import HeadInfo from "../../components/head-info";
import { twentiesInfo } from "../../components/lang/head-info/head-info-text";
import { useState } from "react";
import View from "./view";

const TwentiesPage = () => {
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
      <View pageNum={pageNum} />
      <Button onClick={backward}>backward</Button>
      <Button onClick={forward}>forward</Button>
    </>
  );
};

export default TwentiesPage;

const Button = styled.button`
  font-size: 24px;
  font-weight: 100;
  padding: 6px 6px;
  padding: 24px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.textPrimary};
  border-color: ${({ theme }) => theme.textPrimary};
`;
