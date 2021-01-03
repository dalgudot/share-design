import styled, { DefaultTheme } from 'styled-components';
import TextStyle from '../typography/atoms/text-style';
import { fontWeight } from '../typography/atoms/font';
import { mediaBreakPoint } from '../../styles/common';
import { motion } from 'framer-motion';
import MotionSVGShareDesignEn from '../svg/motion-svg-share-design-en';
import MotionSVGShareDesignKo from '../svg/motion-svg-share-design-ko';
import IconArrowRight24 from '../svg/icon_arrow_right_24';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useWindowHeight } from '../../lib/hooks/useWindowHeight';
import Router from 'next/router';

const ArticleListSimple = ({ href, order, title }: ArticleListPropTypes) => {
  const themeContext: DefaultTheme = useContext(ThemeContext);
  const height: number = useWindowHeight();

  return (
    <Ul height={height}>
      <motion.li
        variants={ListTextAnimationVariants}
        initial="start"
        animate="end"
      >
        <TextStyle
          type="h1"
          text={order}
          textSize="headlineBig"
          weight={fontWeight[700]}
          lineHeight={1.2}
          letterSpacing="-0.8px"
          color={themeContext.whitePrimary}
        />
        <TextStyle
          type="h1"
          text={title}
          textSize="headlineBig"
          weight={fontWeight[700]}
          lineHeight={1.2}
          marginTop="8px"
          letterSpacing="-0.8px"
          color={themeContext.whitePrimary}
        />

        <BtnStyle onClick={() => Router.push({ href })}>
          <IconArrowRight24 color={themeContext.whitePrimary} />
        </BtnStyle>
      </motion.li>

      <TextDecoration height={height}>
        <MotionSVGShareDesignKo />
        <MotionSVGShareDesignEn />
      </TextDecoration>
    </Ul>
  );
};

export default ArticleListSimple;

const Ul = styled.ul<StyleTypes>`
  width: 100%;
  height: ${({ height }) => height}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 12px;

  li {
    width: 100%;
    height: ${({ height }) => height}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 12px;
  }
`;

const BtnStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 63px;
  height: 63px;
  border-radius: 50%;
  background-image: var(--purple-linear-gradient);
  margin-top: 24px;

  &:hover {
    opacity: 0.95;
  }
`;

const TextDecoration = styled.figure<StyleTypes>`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -4%);
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  overflow: hidden;

  svg {
    mask-image: linear-gradient(0deg, transparent 3%, #000 90%);
    -webkit-mask-image: linear-gradient(0deg, transparent 3%, #000 90%);
  }
`;

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
