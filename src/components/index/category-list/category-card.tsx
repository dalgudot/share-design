import styled, { DefaultTheme } from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Router from 'next/router';
import H1TitleLarge from '../../typography/h1-title-large';
import { t } from '../lang/t';
import ContentsList from './contents-list';

const CategoryCard = ({
  href,
  title1,
  title2,
  background,
  list,
}: {
  href: string;
  title1: object;
  title2: object;
  background: string;
  list: string;
}) => {
  const themeContext: DefaultTheme = useContext(ThemeContext);
  const backgroundGradient: string =
    background === 'gradientPurple'
      ? themeContext.gradientPurple
      : themeContext.gradientBurgundy;

  return (
    <Li backgroundGradient={backgroundGradient}>
      <TitleSection>
        <H1TitleLarge text={title1} />
        <H1TitleLarge text={title2} />
      </TitleSection>

      <Ul>
        <ContentsList list={list} />
      </Ul>
    </Li>
  );
};

export default CategoryCard;

const Li = styled.li<{ backgroundGradient: string }>`
  width: 100%;
  max-width: 480px;
  height: 335px;
  border-radius: ${({ theme }) => theme.borderRadius.PrimaryBorderRadius};
  background-image: linear-gradient(
    ${({ backgroundGradient }) => backgroundGradient}
  );
  margin: 24px auto 0;
  padding: 16px 24px 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleSection = styled.section``;

const Ul = styled.ul``;

// framer motion
const ListTextAnimationVariants = {
  start: {
    opacity: 0,
  },

  end: {
    opacity: 1,
    transition: {
      delay: 0.5,
      ease: 'easeInOut',
    },
  },
};
