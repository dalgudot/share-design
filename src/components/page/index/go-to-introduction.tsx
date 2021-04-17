import Link from 'next/link';
import styled from 'styled-components';
import { projectIntroduction } from '../../../data/article/introduction';
import { useWindowHeight } from '../../../lib/hooks/useWindowHeight';
import { mediaBreakPoint } from '../../../styles/common';
import AloneButton from '../../button/alone-button';

const GotoIntroduction = () => {
  const height: number = useWindowHeight();

  return (
    <Li>
      <ComingSoonLine height={height} />
      <Link href="/introduction">
        <a>
          <AloneButton //
            size="medium"
            btnText={projectIntroduction().goToIntroduction}
          />
        </a>
      </Link>
    </Li>
  );
};

export default GotoIntroduction;

const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // 바뀌는 속성
  margin-top: 48px;
  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 36px;
  }
`;

type ComingSoonLineType = {
  height: number;
};

// 화면 세로 길이에 따라 길이가 달라지는 선분
const ComingSoonLine = styled.span<ComingSoonLineType>`
  width: 1px;
  height: ${({ height }) => height * 0.45}px;
  background-color: ${({ theme }) => theme.gray6};

  // 바뀌는 속성
  margin-bottom: 36px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-bottom: 24px;
  }
`;
