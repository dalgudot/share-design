import Link from 'next/link';
import styled from 'styled-components';
import PMedium400 from '../../../elements/typography/p-medium-400';
import { mediaBreakPoint } from '../../../styles/common';
import H2Title700 from '../../../elements/typography/h2-title-700';
import IconLanguageFill24 from '../../../elements/svg/icon_language_fill_24';
import PSmall300 from '../../../elements/typography/p-small-300';

const List = ({
  url,
  category,
  date,
  title,
  summary,
}: {
  url: string;
  category: object;
  date: object;
  title: object;
  summary: object;
}) => {
  return (
    <Li>
      <Link href={url}>
        <a>
          <div className="image__area__wrap">
            <div className="image__area">
              <IconLanguageFill24 />
            </div>
          </div>
          <CategoryDateArea>
            <PSmall300 text={category} color="gray4" opacity={0.9} />
            <span />
            <time dateTime="2021-03-14">
              <PSmall300 text={date} color="gray4" opacity={0.9} />
            </time>
          </CategoryDateArea>
          <H2Title700 //
            text={title}
            color="gray1"
            marginTop="4px"
          />
          <PMedium400
            text={summary}
            color="gray3"
            marginTop="16px"
            lineHeight={1.55}
          />
        </a>
      </Link>
    </Li>
  );
};

export default List;

const Li = styled.li`
  width: 100%; /* 원하는 너비 */
  max-width: 640px;
  /* max-width: ${({ theme }) => theme.maxWidth.Paragraph}; */
  margin: 0 auto;

  .image__area__wrap {
    // 16:9 비율 만들기
    position: relative;
    /* background-color: ${({ theme }) => theme.gray7}; */
    background-color: ${({ theme }) => theme.gray7__40};
    border: solid 1px ${({ theme }) => theme.gray7};
    border-radius: ${({ theme }) => theme.borderRadius.R13};
  }
  .image__area__wrap:before {
    content: '';
    display: block;
    padding-bottom: 56.25%; /* 16:9 비율 */
  }

  .image__area {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CategoryDateArea = styled.div`
  display: flex;
  align-items: center;

  // 바뀌는 속성
  margin-top: 24px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 16px;
  }

  span {
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.gray4};
    opacity: 0.9;

    // 바뀌는 속성
    margin: 1px 5px 0;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      margin: 1px 4px 0;
    }
  }
`;
