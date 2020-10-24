import styled from "styled-components";
import { useEffect, useState } from "react";
import PageMove from "./views/view";

const TwentiesPage = () => {
  const [pageNum, setPageNum] = useState(1);

  console.log(`TwentiesPageNum: ${pageNum}`);

  const forward = () => {
    setPageNum(pageNum + 1);
  };

  const back = () => {
    setPageNum(pageNum - 1);
  };

  return (
    <>
      <PageMove pageNum={pageNum} />
      <ForwardButton onClick={back}>back</ForwardButton>
      <BackButton onClick={forward}>forward</BackButton>
    </>
  );
};

export default TwentiesPage;

const ForwardButton = styled.button`
  font-size: 24px;
  font-weight: 100;
  padding: 6px 6px;
  padding: 24px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.textPrimary};
  border-color: ${({ theme }) => theme.textPrimary};
  position: absolute;
  left: 5%;
  bottom: 24px;
`;

const BackButton = styled.button`
  font-size: 24px;
  font-weight: 100;
  padding: 6px 6px;
  padding: 24px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.textPrimary};
  border-color: ${({ theme }) => theme.textPrimary};
  position: absolute;
  right: 5%;
  bottom: 24px;
`;
