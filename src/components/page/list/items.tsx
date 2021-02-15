import Link from 'next/link';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import H3Title700 from '../../../elements/typography/h3-title-700';
import PSmall400 from '../../../elements/typography/p-small-400';
import { mediaBreakPoint } from '../../../styles/common';

const Items = ({
  date,
  title,
  summary,
  url,
}: {
  date: string;
  title: string;
  summary: string;
  url: string;
}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <Li>
      <Link href={url}>
        <a>
          <PSmall400 text={date} color={themeContext.gray3} />
          <H3Title700 //
            text={title}
            color={themeContext.gray1}
            marginTop="3px"
          />
          <PSmall400
            text={summary}
            color={themeContext.gray1}
            marginTop="16px"
          />
        </a>
      </Link>
    </Li>
  );
};

export default Items;

const Li = styled.li`
  border-bottom: solid 1px rgba(230, 230, 245, 0.2);

  // 바뀌는 속성
  padding: 48px 0;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: 36px 0;
  }
`;
