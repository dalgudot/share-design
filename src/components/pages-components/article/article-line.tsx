import styled from 'styled-components';
import { useWindowHeight } from '../../../lib/hooks/useWindowHeight';
import { mediaBreakPoint } from '../../../styles/common';

const ArticleLine = () => {
  const height: number = useWindowHeight();

  return <Line height={height} />;
};

export default ArticleLine;

const Line = styled.div<{ height: number }>`
  width: 1px;
  height: ${({ height }) => height * 0.2}px;
  background-color: ${({ theme }) => theme.gray6};

  // 바뀌는 속성
  margin: 96px auto;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin: 72px auto;
  }
`;
