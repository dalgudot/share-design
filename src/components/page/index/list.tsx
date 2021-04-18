import Link from 'next/link';
import styled from 'styled-components';
import PMedium400 from '../../../elements/typography/p-medium-400';
import { mediaBreakPoint } from '../../../styles/common';
import H2Title700 from '../../../elements/typography/h2-title-700';
import PSmall400 from '../../../elements/typography/p-small-400';
import { motion } from 'framer-motion';

const List = ({
  url,
  category,
  date,
  dateTime,
  title,
  summary,
  marginTop,
  children,
}: {
  url: string;
  category: object;
  date: object;
  dateTime: string;
  title: object;
  summary: object;
  marginTop?: string;
  // https://www.carlrippon.com/react-children-with-typescript/
  children: JSX.Element;
}) => {
  return (
    <MotionLi //
      variants={liVariants}
      // whileHover="whileHover"
      whileTap="whileTap"
      marginTop={marginTop}
    >
      <Link href={url}>
        <a>
          {/* 이미지 영역 */}
          <div className="image__area__wrap">
            <div className="image__area">{children}</div>
          </div>

          {/* 메타 정보 영역 */}
          <CategoryDateArea>
            <PSmall400 text={category} color="gray4" />
            <span />
            <time dateTime={dateTime}>
              <PSmall400 text={date} color="gray4" />
            </time>
          </CategoryDateArea>

          {/* 제목 및 요약 영역 */}
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
    </MotionLi>
  );
};

export default List;

const liVariants = {
  whileHover: {
    scale: 1.02,
  },

  whileTap: { scale: 0.98 },
};

const MotionLi = styled(motion.li)<{ marginTop?: string }>`
  width: 100%; /* 원하는 너비 */
  max-width: ${({ theme }) => theme.maxWidth.List};
  margin: 0 auto;

  .image__area__wrap {
    // 16:9 비율 만들기
    position: relative;
    background-color: ${({ theme }) => theme.gray7__40};
    border: solid 1px ${({ theme }) => theme.gray7};
    border-radius: ${({ theme }) => theme.borderRadius.R13};

    // 리스트 사이의 간격
    margin-top: ${({ marginTop }) => marginTop};
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
