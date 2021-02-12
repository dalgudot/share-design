import { motion } from 'framer-motion';
import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { tArticle } from '../components/page/article/text/t-article';
import H1Title700 from '../elements/typography/h1-title-700';

const Test1 = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <motion.div
      variants={thumbnailVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Link href="/list">
        <a>
          <H1Title700 text={tArticle.close} color={themeContext.gray1} />
        </a>
      </Link>
    </motion.div>
  );
};

export default Test1;

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};
