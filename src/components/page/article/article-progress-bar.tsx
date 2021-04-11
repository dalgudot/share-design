import styled from 'styled-components';
import useScrollPercentage from '../../../lib/hooks/useScrollPercentage';
import { mediaBreakPoint } from '../../../styles/common';

const ArticleProgressBar = () => {
  const scrollPercentage = useScrollPercentage();

  return (
    <>
      <Progressbar scrollPercentage={scrollPercentage} />
    </>
  );
};

export default ArticleProgressBar;

const Progressbar = styled.div<{ scrollPercentage: number }>`
  width: ${({ scrollPercentage }) => scrollPercentage}%;
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
