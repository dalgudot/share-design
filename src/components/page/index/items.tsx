import { motion } from 'framer-motion';
import Link from 'next/link';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import H3Title700 from '../../../elements/typography/h3-title-700';
import PSmall400 from '../../../elements/typography/p-small-400';

const Items = ({
  date,
  title,
  summary,
  url,
}: {
  date: string;
  title?: string;
  summary?: string;
  url: string;
}) => {
  const themeContext = useContext(ThemeContext);

  console.log(`date: ${date}`);
  console.log(`title: ${title}`);
  console.log(`summary: ${summary}`);
  console.log(`url: ${url}`);

  return (
    <MotionLi
      variants={variants}
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.95 }}
    >
      <Link href={url}>
        <a>
          <PSmall400 text={date} color={themeContext.gray3} />
          <H3Title700 text={title} color={themeContext.gray1} />
          <PSmall400 text={summary} color={themeContext.gray1} />
        </a>
      </Link>
    </MotionLi>
  );
};

export default Items;

const MotionLi = styled(motion.li)`
  display: flex;
  flex-direction: center;
  /* align-items: center;
  justify-content: center; */
  margin: 24px auto 0;
  padding-bottom: 16px;
  border-bottom: solid 1px rgba(230, 230, 245, 0.2);

  a {
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
