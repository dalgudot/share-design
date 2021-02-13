import { motion } from 'framer-motion';
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
    <MotionDiv
      variants={variants}
      // whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      <Link href={url}>
        <a>
          <PSmall400 text={date} color={themeContext.gray3} />
          <H3Title700 //
            text={title}
            color={themeContext.gray1}
            marginTop="2px"
          />
          <PSmall400
            text={summary}
            color={themeContext.gray1}
            marginTop="12px"
          />
        </a>
      </Link>
    </MotionDiv>
  );
};

export default Items;

const MotionDiv = styled(motion.div)`
  border-bottom: solid 1px rgba(230, 230, 245, 0.2);

  // 바뀌는 속성
  padding: 48px 0;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: 36px 0;
  }
`;

// 부모와 자식 variants의 이름 통일해야 함.
const variants = {
  initial: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },

  exit: {
    opacity: 0,
    transition: { ease: [0.43, 0.13, 0.23, 0.96] },
  },
};
