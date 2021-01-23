import styled, { DefaultTheme } from 'styled-components';
import TextStyle from '../typography/atoms/text-style';
import { fontWeight } from '../typography/atoms/font';
import { mediaBreakPoint } from '../../styles/common';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useWindowHeight } from '../../lib/hooks/useWindowHeight';
import Router from 'next/router';
import H1TitleLarge from '../typography/h1-title-large';
import { t } from '../index/lang/t';

const ArticleListSimple = ({ href, order, title }: ArticleListPropTypes) => {
  const themeContext: DefaultTheme = useContext(ThemeContext);
  const height: number = useWindowHeight();

  return (
    <Li>
      {/* <Container> */}
      <TitleSection>
        <H1TitleLarge text={t.article1.titleSimpleOrder} />
        <H1TitleLarge text={t.article1.titleSimpleOrder} />
      </TitleSection>

      <UlSection>
        <H1TitleLarge text={t.article1.titleSimpleOrder} />
      </UlSection>
      {/* </Container> */}
    </Li>
  );
};

export default ArticleListSimple;

const Li = styled.li`
  width: 100%;
  max-width: 380px;
  height: 335px;
  border-radius: var(--border-radius-primary);
  background-image: linear-gradient(354deg, #4633d7, #7c62ed);
  margin: 0 auto;
  padding: 16px 24px 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleSection = styled.section``;

const UlSection = styled.ul``;

// const Ul = styled.ul<StyleTypes>`
//   width: 100%;
//   height: ${({ height }) => height}px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding-bottom: 12px;

//   li {
//     width: 100%;
//     height: ${({ height }) => height}px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     padding-bottom: 12px;
//   }
// `;

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

// type
interface ArticleListPropTypes {
  href: string;
  order: string;
  title: string;
}

interface StyleTypes {
  height: number;
}
