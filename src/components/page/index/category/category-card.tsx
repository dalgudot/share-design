import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import H1Title700 from '../../../../elements/typography/h1-title-700';
import PMedium400 from '../../../../elements/typography/p-medium-400';
import { tArticle } from '../../article/text/t-article';
import { mediaBreakPoint } from '../../../../styles/common';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { smoothUp } from '../../../../elements/framer-motion/variants/variants';

const CategoryCard = ({
  url,
  title,
  background,
}: {
  url: string;
  title: object[];
  background: string;
}) => {
  const themeContext = useContext(ThemeContext);

  const categoryTitle = title.map((title, idx) => (
    <H1Title700 key={idx} text={title} color={themeContext.gray1} />
  ));

  return (
    <MotionLi //
      variants={smoothUp} // stagger animation은 부모에서 같은 이름의 initial, animate, exit 적용
      backgroundGradient={background}
    >
      <Link href={`/list/${url}`}>
        <motion.a
          variants={smoothUp}
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <MotionTitleSection>{categoryTitle}</MotionTitleSection>
          <MotionListViewSection>
            <PMedium400 //
              text={tArticle.goToList}
              color={themeContext.gray1}
            />
            <PMedium400 //
              text={tArticle.chevronRight}
              color={themeContext.gray1}
            />
          </MotionListViewSection>
        </motion.a>
      </Link>
    </MotionLi>
  );
};

export default CategoryCard;

const MotionLi = styled(motion.li)<{ backgroundGradient: string }>`
  a {
    cursor: pointer;
    width: 100%;
    max-width: 480px;
    border-radius: ${({ theme }) => theme.borderRadius.PrimaryBorderRadius};
    background-image: linear-gradient(
      ${({ backgroundGradient }) => backgroundGradient}
    );
    z-index: 1;
    overflow-y: auto;

    margin: 24px auto 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    // 바뀌는 속성
    padding: 32px 24px;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      padding: 24px;
    }
  }
`;

const MotionTitleSection = styled(motion.section)``;

const MotionListViewSection = styled(motion.section)`
  padding: 16px 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: solid 1px ${({ theme }) => theme.gray1};
  border-bottom: solid 1px ${({ theme }) => theme.gray1};

  // 바뀌는 부분
  margin-top: 158px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 108px;
  }
`;
