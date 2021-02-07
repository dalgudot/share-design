import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import H1Title700 from '../../../../elements/typography/h1-title-700';
import PMedium400 from '../../../../elements/typography/p-medium-400';
import { tArticle } from '../../article/text/t-article';
import { mediaBreakPoint } from '../../../../styles/common';
import { motion } from 'framer-motion';

const CategoryCard = ({
  title,
  background,
  showArticleList,
  showModalArticleList,
}: {
  title: object[];
  background: string;
  showArticleList: any;
  showModalArticleList: any;
}) => {
  const themeContext = useContext(ThemeContext);
  const backgroundGradient: string =
    background === 'gradientPurple'
      ? themeContext.gradientPurple
      : themeContext.gradientBurgundy;

  const categoryTitle = title.map((title, idx) => (
    <H1Title700 key={idx} text={title} color={themeContext.gray1} />
  ));

  return (
    <>
      <MotionLi //
        variants={ArticleListVariants}
        initial="rest"
        whileHover="hover"
        whileTap="pressed"
        animate={showModalArticleList ? 'scaleUp' : 'scaleOriginal'}
        backgroundGradient={backgroundGradient}
        onClick={showArticleList}
      >
        <motion.div //
          variants={TextVariants}
          initial={false}
          animate={showModalArticleList ? 'hide' : 'show'}
        >
          {categoryTitle}
          <ListViewSection>
            <PMedium400 //
              text={tArticle.goToList}
              color={themeContext.gray1}
            />
            <PMedium400 //
              text={tArticle.chevronRight}
              color={themeContext.gray1}
            />
          </ListViewSection>
        </motion.div>
      </MotionLi>
    </>
  );
};

export default CategoryCard;

const ArticleListVariants = {
  scaleUp: {
    scale: [0.9, 30],
    transition: {
      time: [0.01, 0.1],
      ease: 'easeInOut',
    },
  },

  scaleOriginal: {
    scale: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  rest: { scale: 1 },
  hover: { opacity: 0.9 },
  pressed: { scale: 0.97 },
};

const TextVariants = {
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.55,
    },
  },

  hide: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.1,
    },
  },
};

const MotionLi = styled(motion.li)<{ backgroundGradient: string }>`
  cursor: pointer;
  width: 100%;
  max-width: 480px;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.PrimaryBorderRadius};
  background-image: linear-gradient(
    ${({ backgroundGradient }) => backgroundGradient}
  );
  margin: 24px auto 0;
  padding: 32px 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ListViewSection = styled.section`
  padding: 16px 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: solid 1px ${({ theme }) => theme.gray1};
  border-bottom: solid 1px ${({ theme }) => theme.gray1};

  // 바뀌는 부분
  margin-top: 144px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 96px;
  }
`;
