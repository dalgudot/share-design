import styled from 'styled-components';
import useScrollPercentage from '../../../library/hooks/useScrollPercentage';
import { mediaBreakPoint } from '../../../styles/common';
import React from 'react';

const ArticleProgressBar = () => {
  const scrollPercentage = useScrollPercentage();

  return (
    <>
      {/* 성능 최적화 위해 inline style로 길이 정의 */}
      <Progressbar
        style={{ width: `${scrollPercentage}%` }}
        scrollPercentage={scrollPercentage}
      />
    </>
  );
};

// React.memo로 styled-component의 'Over 200 classes were generated for component styled.div' 경고 방지
export default React.memo(ArticleProgressBar);

const Progressbar = styled.div<{ scrollPercentage: number }>`
  /* width: ${({ scrollPercentage }) => scrollPercentage}%; */
  background-color: ${({ theme }) => theme.gray1};
  height: 2px;
  position: fixed;
  left: 0;

  // 바뀌는 요소
  bottom: 56px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    bottom: 48px;
  }
`;
