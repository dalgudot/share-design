import Link from 'next/link';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { t } from '../../../data/index/t';
import PMedium400 from '../../../elements/typography/p-medium-400';
import { mediaBreakPoint } from '../../../styles/common';

const GotoIntroduction = () => {
  const themeContext = useContext(ThemeContext);
  const goToIntroductionText =
    t.shareDesignProjectIntroduction.goToIntroduction;

  return (
    <Li>
      <Link href="/introduction">
        <a>
          <PMedium400 text={goToIntroductionText} color={themeContext.gray2} />
        </a>
      </Link>
    </Li>
  );
};

export default GotoIntroduction;

const Li = styled.li`
  margin-top: 48px;
  display: flex;
  justify-content: center;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 36px;
  }
`;
