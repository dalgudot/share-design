import Link from 'next/link';
import styled from 'styled-components';
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
  return (
    <Link href={url}>
      <a>
        <Li>
          <time dateTime="2021-03-07">
            <PSmall400 text={date} color="gray3" />
          </time>
          <H3Title700 //
            text={title}
            color="gray1"
            marginTop="3px"
          />
          <PSmall400 text={summary} color="gray1" marginTop="16px" />
        </Li>
      </a>
    </Link>
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

  p {
    margin-left: 2px; // 시각 보정
  }
`;
